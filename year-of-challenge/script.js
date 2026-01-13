// ============================================
// CHALLENGE DATA - EDIT YOUR CHALLENGES HERE
// ============================================
const challenges = [
  {
    month: "January",
    monthClass: "month-jan",
    emoji: "🎤",
    title: "Audition for a Singing Solo",
    description:
      "Step onto that stage and let your voice be heard! A cabaret solo awaits, and so does your spotlight moment.",
    status: "completed", // Options: "completed", "in-progress", "upcoming"
    photo: "./f303877f-e82a-465d-9788-df63479b6d3f.jpeg", // Add image URL here, e.g., "photos/january.jpg"
    notes: "Nailed it!!! Got a solo in the show 🔥",
  },
  {
    month: "February",
    monthClass: "month-feb",
    emoji: "💝",
    title: "Sing Solo in Cabaret Show",
    description:
      "You nailed the audition, now it's time to embrace the stage and share your talent with the audience!",
    status: "in-progress",
    photo: "",
  },
  {
    month: "March",
    monthClass: "month-mar",
    emoji: "🌱",
    title: "Challenge TBD",
    description:
      "Spring is the perfect time for new beginnings and bold moves!",
    status: "upcoming",
    photo: "",
  },
  {
    month: "April",
    monthClass: "month-apr",
    emoji: "🌸",
    title: "Challenge TBD",
    description: "What will you bloom into this month?",
    status: "upcoming",
    photo: "",
  },
  {
    month: "May",
    monthClass: "month-may",
    emoji: "☀️",
    title: "Challenge TBD",
    description: "Bright days ahead for bright ideas!",
    status: "upcoming",
    photo: "",
  },
  {
    month: "June",
    monthClass: "month-jun",
    emoji: "🌊",
    title: "Challenge TBD",
    description: "Dive into something exciting this summer!",
    status: "upcoming",
    photo: "",
  },
  {
    month: "July",
    monthClass: "month-jul",
    emoji: "🎆",
    title: "Challenge TBD",
    description: "Time to sparkle and shine!",
    status: "upcoming",
    photo: "",
  },
  {
    month: "August",
    monthClass: "month-aug",
    emoji: "🔥",
    title: "Challenge TBD",
    description: "Keep that fire burning strong!",
    status: "upcoming",
    photo: "",
  },
  {
    month: "September",
    monthClass: "month-sep",
    emoji: "🍂",
    title: "Challenge TBD",
    description: "A fresh season, a fresh challenge!",
    status: "upcoming",
    photo: "",
  },
  {
    month: "October",
    monthClass: "month-oct",
    emoji: "🎃",
    title: "Challenge TBD",
    description: "Be bold, be spooky, be you!",
    status: "upcoming",
    photo: "",
  },
  {
    month: "November",
    monthClass: "month-nov",
    emoji: "🦋",
    title: "Challenge TBD",
    description: "Transform and grow even more!",
    status: "upcoming",
    photo: "",
  },
  {
    month: "December",
    monthClass: "month-dec",
    emoji: "⭐",
    title: "Challenge TBD",
    description: "End the year shining bright!",
    status: "upcoming",
    photo: "",
  },
];

// Warm, encouraging affirmations
const affirmations = [
  "You are capable of amazing things! ✨",
  "Your confidence grows with every brave step 💪",
  "You're doing so much better than you think 🌟",
  "Every challenge makes you stronger 🦁",
  "Believe in yourself – you're incredible! 💖",
  "Your courage inspires others 🌈",
  "You were made for moments like these ⭐",
];

// Render progress dots
function renderProgress() {
  const container = document.getElementById("progress-visual");
  const textEl = document.getElementById("progress-text");
  let completedCount = 0;
  let inProgressCount = 0;

  challenges.forEach((challenge, index) => {
    const dot = document.createElement("div");
    dot.className = `progress-dot ${challenge.status}`;
    dot.textContent = index + 1;
    container.appendChild(dot);

    if (challenge.status === "completed") completedCount++;
    if (challenge.status === "in-progress") inProgressCount++;
  });

  // Friendly progress message
  if (completedCount === 0 && inProgressCount > 0) {
    textEl.innerHTML = `You're <strong>working on your first challenge</strong> – how exciting! 🎉`;
  } else if (completedCount === 0) {
    textEl.innerHTML = `Ready to start? <strong>Your journey awaits!</strong> 🚀`;
  } else if (completedCount === 12) {
    textEl.innerHTML = `<strong>WOW! You did it!</strong> All 12 challenges complete! 🏆👑`;
  } else {
    textEl.innerHTML = `<strong>${completedCount} challenge${
      completedCount > 1 ? "s" : ""
    } conquered!</strong> You're amazing! 🌟`;
  }
}

// Render timeline
function renderTimeline() {
  const timeline = document.getElementById("timeline");

  challenges.forEach((challenge, index) => {
    const item = document.createElement("div");
    item.className = `timeline-item ${challenge.status}`;

    const statusText = {
      completed: "Done!",
      "in-progress": "In Progress",
      upcoming: "Coming Soon",
    };

    const photoHtml = challenge.photo
      ? `<div class="card-photo has-image"><img src="${challenge.photo}" alt="${challenge.month} challenge"></div>`
      : "";

    const notesHtml = challenge.notes
      ? `<div class="notes">${photoHtml}<p>${challenge.notes}</p></div>`
      : "";

    item.innerHTML = `
              <div class="timeline-dot"></div>
              <div class="card">
                  <span class="emoji">${challenge.emoji}</span>
                  <div class="card-header">
                      <span class="month-name ${challenge.monthClass}">${
      challenge.month
    }</span>
                      <span class="status-badge ${challenge.status}">${
      statusText[challenge.status]
    }</span>
                  </div>
                  <h3>${challenge.title}</h3>
                  <p>${challenge.description}</p>
                  ${notesHtml}
              </div>
          `;

    timeline.appendChild(item);
  });
}

// Scroll animations
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 50);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".timeline-item").forEach((item) => {
    observer.observe(item);
  });
}

// Rotating affirmations
function rotateAffirmations() {
  const el = document.getElementById("affirmation");
  let index = 0;

  function showNext() {
    el.style.opacity = 0;
    el.style.transform = "translateY(10px)";

    setTimeout(() => {
      el.textContent = affirmations[index];
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      index = (index + 1) % affirmations.length;
    }, 300);
  }

  el.style.transition = "all 0.3s ease";
  showNext();
  setInterval(showNext, 4000);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProgress();
  renderTimeline();
  setupScrollAnimations();
  rotateAffirmations();
});
