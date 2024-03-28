class AudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    this.bufferSize = 4000;
    this.buffer = new Float32Array(this.bufferSize);
    this.buffered = 0;
    this.threshold = 0.1;
    this.sampleRate = 44100;
    this.probabilityThreshold = 0.1;
  }

  detect(float32AudioBuffer) {
    // Set buffer size to the highest power of two below the provided buffer's length.
    let bufferSize;
    for (bufferSize = 1; bufferSize < float32AudioBuffer.length; bufferSize *= 2);
    bufferSize /= 2;

    // Set up the yinBuffer as described in step one of the YIN paper.
    const yinBufferLength = bufferSize / 2;
    const yinBuffer = new Float32Array(yinBufferLength);

    let probability = 0,
      tau;

    // Compute the difference function as described in step 2 of the YIN paper.
    for (let t = 0; t < yinBufferLength; t++) {
      yinBuffer[t] = 0;
    }
    for (let t = 1; t < yinBufferLength; t++) {
      for (let i = 0; i < yinBufferLength; i++) {
        const delta = float32AudioBuffer[i] - float32AudioBuffer[i + t];
        yinBuffer[t] += delta * delta;
      }
    }

    // Compute the cumulative mean normalized difference as described in step 3 of the paper.
    yinBuffer[0] = 1;
    yinBuffer[1] = 1;
    let runningSum = 0;
    for (let t = 1; t < yinBufferLength; t++) {
      runningSum += yinBuffer[t];
      yinBuffer[t] *= t / runningSum;
    }

    for (tau = 2; tau < yinBufferLength; tau++) {
      if (yinBuffer[tau] < this.threshold) {
        while (tau + 1 < yinBufferLength && yinBuffer[tau + 1] < yinBuffer[tau]) {
          tau++;
        }
        probability = 1 - yinBuffer[tau];
        break;
      }
    }

    if (tau === yinBufferLength || yinBuffer[tau] >= this.threshold) {
      return null;
    }

    if (probability < this.probabilityThreshold) {
      return null;
    }

    let betterTau, x0, x2;
    if (tau < 1) {
      x0 = tau;
    } else {
      x0 = tau - 1;
    }
    if (tau + 1 < yinBufferLength) {
      x2 = tau + 1;
    } else {
      x2 = tau;
    }
    if (x0 === tau) {
      if (yinBuffer[tau] <= yinBuffer[x2]) {
        betterTau = tau;
      } else {
        betterTau = x2;
      }
    } else if (x2 === tau) {
      if (yinBuffer[tau] <= yinBuffer[x0]) {
        betterTau = tau;
      } else {
        betterTau = x0;
      }
    } else {
      const s0 = yinBuffer[x0];
      const s1 = yinBuffer[tau];
      const s2 = yinBuffer[x2];

      betterTau = tau + (s2 - s0) / (2 * (2 * s1 - s2 - s0));
    }

    return this.sampleRate / betterTau;
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0]; // Get the microphone input
    const bufferData = input[0];

    if (!input[0]) {
      return true;
    }

    for (let i = 0; i < bufferData.length; ++i) {
      this.buffer[this.buffered] = 2 * bufferData[i];
      this.buffered++;

      if (this.buffered > this.bufferSize) {
        const res = this.detect(this.buffer);
        this.port.postMessage(res);
        this.buffered = 0;
      }
    }

    return true;
  }
}

registerProcessor('audio-processor', AudioProcessor);
