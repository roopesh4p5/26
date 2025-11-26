// Era definitions with progressive scratch requirements
const eras = [
  {
    id: 1,
    name: "Little Princess",
    subtitle: "Age 1–6",
    scratchPercentage: 80,
    color: "#ffb3d9",
    startMessage: "The world welcomed its cutest miracle.",
  },
  {
    id: 2,
    name: "School Days",
    subtitle: "Age 7–13",
    scratchPercentage: 80,
    color: "#ffc4dd",
    startMessage: "Learning, curiosity & innocent happiness began...",
  },
  {
    id: 3,
    name: "Becoming Her Best Self",
    subtitle: "Age 14–17",
    scratchPercentage: 80,
    color: "#e5d4f0",
    startMessage: "She started to bloom into who she was meant to be.",
  },
  {
    id: 4,
    name: "Queen Era",
    subtitle: "Age 18–23",
    scratchPercentage: 80,
    color: "#c597d8",
    startMessage: "She doesn't follow the world... She leads it.",
  },
  {
    id: 5,
    name: "Forever With Me",
    subtitle: "Age 24",
    scratchPercentage: 80,
    color: "#ff9ec7",
    startMessage: "And now love stays. Always. Forever.",
  },
];

// Gift Data - 24 gifts across 5 eras
const gifts = [
  // Era 1: Little Princess (Ages 1-6)
  {
    age: "1-6",
    era: 1,
    gift: "The Little Princess Era",
    subtitle: "Jab duniya mein aayi thi",
    message: "1 se 6 saal... Chhoti si princess, badi si smile 😊\nChocolates se lekar handkerchief tak, sab kuch cute tha ❤️\n\nScratch kar ke dekh kya tha teri childhood mein! 👶✨",
    isEra: true,
    gameId: null,
  },
  {
    age: 1,
    era: 1,
    gift: "Chocolate",
    subtitle: "Pehli meeting chocolate se hui",
    message: " 🍫😂",
    gameId: 1,
  },
  {
    age: 2,
    era: 1,
    gift: "Kinder Joy",
    subtitle: "Chhoti si khushiyan, badi memories",
    message: "Dekho You won the Kinder Joy but isme ka toys Roopesh ko dedena okkii?",
    gameId: 2,
  },
  {
    age: 3,
    era: 1,
    gift: "Penguin Soft Toy",
    subtitle: "Pehla cuddle buddy",
    message: "You remember someone with this ? thera chuuu wala boyfriend😂",
    gameId: 3,
  },
  {
    age: 4,
    era: 1,
    gift: "Comb",
    subtitle: "Princess jaisi baalon ki care",
    message: "uffffff there woh comb ke saath connection dekh ke aisa laga kii tera first love is not me 😂 its your kangha 🎀",
    gameId: 4,
  },
  {
    age: 5,
    era: 1,
    gift: "Hair Band",
    subtitle: "Har din nayi style",
    message: "Long hair time my wifey 😒🎀",
    gameId: 5,
  },
  {
    age: 6,
    era: 1,
    gift: "Hand Kerchief",
    subtitle: "Proper little princess",
    message: "Handkerchief tere pocket mein, but use apne Rondu boyfreind ke aansu poch ne ke liye 🎀",
    gameId: 6,
  },

  // Era 2: School Days (Ages 7-13)
  {
    age: "7-13",
    era: 2,
    gift: "School Days Era",
    subtitle: "Padhai aur creativity",
    message: "7 se 13 saal... School bag, crayons, aur sapne 📚\nWater bottle se lekar pen tak, sab yaadein fresh hai 🎨\n\nScratch kar ke dekh tera school life kaisa tha! 📝✨",
    isEra: true,
    gameId: null,
  },
  {
    age: 7,
    era: 2,
    gift: "Water Bottle",
    subtitle: "School ka pehla din",
    message: "i will Kill you if u do not drink water when I ask you to😠",
    gameId: 7,
  },
  {
    age: 8,
    era: 2,
    gift: "Crayons",
    subtitle: "Rang bhare dreams",
    message: "Mere life mein colours bharegi with yopur Existance? 🖍️🎨",
    gameId: 8,
  },
  {
    age: 9,
    era: 2,
    gift: "Apsara Colors",
    subtitle: "Imagination ko rang dena",
    message: "will you be my Apsara? 😜",
    gameId: 9,
  },
  {
    age: 10,
    era: 2,
    gift: "Color Pens",
    subtitle: "Notes bhi colorful, life bhi",
    message: "jiii I wont take kisi aur ka pen, I will come asking you pen hai kya🖤",
    gameId: 10,
  },
  {
    age: 11,
    era: 2,
    gift: "Sketch Book",
    subtitle: "Creativity ka khazana",
    message: "Har page pe creativity, Saath mai? I have your scetchbook untouched. i want to fill it with our memories and exchange it.",
    gameId: 11,
  },
  {
    age: 12,
    era: 2,
    gift: "Diary",
    subtitle: "Pehli baar dil ki baatein likhi",
    message: "When I ask you book in office, dont give me paper ka piece!!!🤣",
    gameId: 12,
  },
  {
    age: 13,
    era: 2,
    gift: "Pen",
    subtitle: "Dil se likhe alfaaz",
    message: "I am out of dialogues😕, Write some Dialogues so I can use it to propose my wife in future😙",
    gameId: 13,
  },

  // Era 3: Becoming Her Best Self (Ages 14-17)
  {
    age: "14-17",
    era: 3,
    gift: "Teen Radha Era",
    subtitle: "Bindokk ka glow up",
    message: "14 se 17 saal... Lip balm se period cups tak 💄\nTeen years, teen struggles, par tu strong bani 💪\n\nScratch kar ke dekh kaise bani tu strong! 🌸✨",
    isEra: true,
    gameId: null,
  },
  {
    age: 14,
    era: 3,
    gift: "Lip Balm",
    subtitle: "Pehli baar beauty ka ehsaas",
    message: "teri smile dekhte hii I forget all my problems, Keep smiling Radhe🌸",
    gameId: 14,
  },
  {
    age: 15,
    era: 3,
    gift: "Earrings",
    subtitle: "Sparkle unlock ho gaya",
    message: "I am too bad at earing picking but I will try my best to make you look beautiful ✨💫",
    gameId: 15,
  },
  {
    age: 16,
    era: 3,
    gift: "Anklet",
    subtitle: "Har kadam pe confidence",
    message: "kya mai pehna du isko? 👣💫",
    gameId: 16,
  },
  {
    age: 17,
    era: 3,
    gift: "Period Cups",
    subtitle: "Strong woman banne lagi",
    message: "Radha Rani strong girl hai 💪❤️",
    gameId: 17,
  },

  // Era 4: Queen Era (Ages 18-23)
  {
    age: "18-23",
    era: 4,
    gift: "Queen Radha Era",
    subtitle: "Boss babe mode activated",
    message: "18 se 23 saal... Independent, confident, unstoppable 👑\nHot water bag se lekar phone case tak, practical queen hai tu 💪\n\nScratch kar ke dekh tera queen era! 📱✨",
    isEra: true,
    gameId: null,
  },
  {
    age: 18,
    era: 4,
    gift: "Hot Water Bag",
    subtitle: "Tough days ko sambhala",
    message: "I want to be there for yyou ou in every Situation. give me a chance to be your support in every tough days",
    gameId: 18,
  },
  {
    age: 19,
    era: 4,
    gift: "Lipstick",
    subtitle: "Bold shade, bold girl",
    message: "will you kiss me with the lipstick? 😕💄✨",
    gameId: 19,
  },
  {
    age: 20,
    era: 4,
    gift: "Mood-Change Octopus Toy",
    subtitle: "Moods ka sahi signal",
    message: "This will help me undertand Your mood. Remember it has 2 face happy sad no middle. 🐙😊",
    gameId: 20,
  },
  {
    age: 21,
    era: 4,
    gift: "Perfume",
    subtitle: "Khushboo se confidence",
    message: "I still love your perfume.",
    gameId: 21,
  },
  {
    age: 22,
    era: 4,
    gift: "Earphones",
    subtitle: "Music mein doob ke peace",
    message: "Can we listen to music like old era? no bluetooth connected with one wire?🎧🖤",
    gameId: 22,
  },
  {
    age: 23,
    era: 4,
    gift: "Phone Back Case",
    subtitle: "Phone bhi protected, tu bhi",
    message: "I was out of my budget.😂 yeh saste mai mil gaya📱💕",
    gameId: 23,
  },

  // Era 5: Forever With Me (Age 24)
  {
    age: "24",
    era: 5,
    gift: "Radha + Roopesh Era",
    subtitle: "Ab se tera mera saath",
    message: "24 saal... Teri journey amazing thi 🥺\nPar ab aage ka safar mere saath hai ❤️\n\nScratch kar ke dekh tere liye kya hai! 💕✨",
    isEra: true,
    gameId: null,
  },
  {
    age: 24,
    era: 5,
    gift: "Roopesh?",
    subtitle: "Humara pyaar, humari kahani",
    message: "Will you be my forever?",
    gameId: 24,
  },
];

// State management
let currentGiftIndex = 0;
let unlockedGifts = [];
let scratchedEras = [];
let musicPlaying = false;
let isGridView = false;

// Initialize app
window.addEventListener("DOMContentLoaded", function () {
  loadProgress();
  generateGiftGrid();
  
  // Check authentication first
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  
  if (isAuthenticated === "true") {
    // User is authenticated - skip password page
    document.getElementById("password-page").classList.remove("active");
    
    // Check if journey already started (from saved state)
    const savedState = localStorage.getItem("appState");
    if (savedState) {
      const state = JSON.parse(savedState);
      
      // Restore dark theme
      if (state.isDarkTheme) {
        document.body.classList.add("dark-theme");
        const themeIcon = document.getElementById("theme-icon");
        const themeLabel = document.querySelector("#theme-toggle .nav-label");
        const themeToggle = document.getElementById("theme-toggle");
        themeIcon.className = "fas fa-sun";
        themeLabel.textContent = "Light";
        themeToggle.classList.add("active");
      }
      
      if (state.journeyStarted) {
        // Skip landing page and go directly to main page
        document.getElementById("landing-page").classList.remove("active");
        document.getElementById("main-page").classList.add("active");
        displayGift(currentGiftIndex);
        
        // Restore view mode
        if (state.isGridView) {
          toggleView(); // Switch to grid view
        }
        
        // Restore music state
        const music = document.getElementById("background-music");
        const musicToggle = document.getElementById("music-toggle");
        if (state.musicPlaying) {
          music.play().catch(() => {
            // Autoplay might be blocked
            musicPlaying = false;
          });
          musicToggle.classList.add("playing");
        }
      } else {
        // Show landing page
        document.getElementById("landing-page").classList.add("active");
      }
    } else {
      // No saved state - show landing page
      document.getElementById("landing-page").classList.add("active");
    }
  } else {
    // Not authenticated - show password page (already active by default)
    // Password page is already active in HTML
  }
});

// Check password
function checkPassword() {
  const input = document.getElementById("password-input");
  const error = document.getElementById("password-error");
  const password = input.value.trim().toLowerCase();
  
  if (password === "timepass") {
    // Correct password - store authentication and show landing page
    localStorage.setItem("isAuthenticated", "true");
    
    // Hide password page, show landing page
    document.getElementById("password-page").classList.remove("active");
    document.getElementById("landing-page").classList.add("active");
    
    error.textContent = "";
  } else {
    // Wrong password
    error.textContent = "🤔 Hmm, galat jawab. Try again bindokk!";
    input.value = "";
    input.focus();
  }
}

// Allow Enter key to submit password
document.addEventListener("DOMContentLoaded", function() {
  const passwordInput = document.getElementById("password-input");
  if (passwordInput) {
    passwordInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        checkPassword();
      }
    });
  }
});

// Start the journey
function startJourney() {
  document.getElementById("landing-page").classList.remove("active");
  document.getElementById("main-page").classList.add("active");

  // Mark journey as started (will be saved in saveProgress)
  // Start at index 0 (first era card)
  currentGiftIndex = 0;
  displayGift(0);
  saveProgress(); // Save initial state

  // Try to play music
  const music = document.getElementById("background-music");
  music
    .play()
    .then(() => {
      musicPlaying = true;
      document.getElementById("music-toggle").classList.add("playing");
      saveProgress(); // Save music state
    })
    .catch(() => {
      // Autoplay blocked - user can click music button
      musicPlaying = false;
    });
}

// Display a specific gift
function displayGift(index) {
  if (index < 0 || index >= gifts.length) return;

  currentGiftIndex = index;
  const gift = gifts[index];
  const isUnlocked = isGiftUnlocked(gift.age);

  // Update progress
  updateProgress();

  // Update card
  const card = document.getElementById("gift-card");
  card.className = "gift-card";
  if (gift.isEra) {
    card.classList.add("era-card");
  }

  // Update content - show mystery for locked gifts
  document.getElementById("current-age").textContent = gift.age;

  if (gift.isEra || isUnlocked) {
    // Show actual gift for era cards and unlocked gifts
    document.getElementById("current-gift-title").textContent = gift.gift;
    document.getElementById("current-gift-message").textContent = gift.message;
  } else {
    // Show mystery for locked gifts
    document.getElementById("current-gift-title").textContent = "Mystery Gift";
    document.getElementById("current-gift-message").textContent = "Complete the game to reveal your special gift!";
  }

  // Handle scratch overlay for era cards
  const scratchOverlay = document.getElementById("scratch-overlay");
  if (gift.isEra && !scratchedEras.includes(gift.age)) {
    // Show scratch overlay
    scratchOverlay.style.display = "flex";
    initScratchCard(gift.age, gift.era);
  } else {
    scratchOverlay.style.display = "none";
  }

    // Update navigation buttons
    const prevBtn = document.getElementById('prev-btn');
    const playBtn = document.getElementById('play-unlock-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Previous button
    prevBtn.disabled = index === 0;
    
    // Conditionally show either Play or Next button
    if (gift.isEra) {
        // Era cards: just show Next (no game required)
        playBtn.style.display = 'none';
        nextBtn.style.display = 'flex';
        nextBtn.disabled = index === gifts.length - 1;
    } else {
        if (isUnlocked) {
            // Unlocked: show Next, hide Play
            playBtn.style.display = 'none';
            nextBtn.style.display = 'flex';
            nextBtn.disabled = index === gifts.length - 1;
        } else {
            // Locked: show Play, hide Next
            playBtn.style.display = 'flex';
            nextBtn.style.display = 'none';
        }
    }
    
    // Save progress
    saveProgress();

  // Update grid highlight
  updateGridHighlight(index);
}

// Initialize scratch card with progressive difficulty
function initScratchCard(cardId, eraId) {
  const canvas = document.getElementById("scratch-canvas");
  const container = document.getElementById("scratch-overlay");
  const instruction = container.querySelector(".scratch-instruction");

  // Set canvas size
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;

  const ctx = canvas.getContext("2d");
  const era = eras[eraId - 1];
  const requiredPercentage = era.scratchPercentage;

  // Draw scratch surface
  ctx.fillStyle = era.color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add scratch pattern
  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.font = "20px Poppins";
  ctx.textAlign = "center";
  for (let y = 30; y < canvas.height; y += 60) {
    for (let x = 30; x < canvas.width; x += 80) {
      ctx.fillText("♥", x, y);
    }
  }

  let isScratching = false;
  let lastX = 0;
  let lastY = 0;
  const totalPixels = canvas.width * canvas.height;

  function scratch(e) {
    if (!isScratching) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;

    // Erase with smooth line
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 50;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    lastX = x;
    lastY = y;

    // Hide instruction
    if (instruction) {
      instruction.style.opacity = "0";
    }
  }

  function checkScratchPercentage() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparentPixels = 0;

    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] < 128) {
        transparentPixels++;
      }
    }

    const percentage = (transparentPixels / totalPixels) * 100;

    if (percentage >= requiredPercentage) {
      // Scratched enough!
      scratchedEras.push(cardId);
      saveProgress();

      // Create magical shatter animation
      createShatterEffect();
    }
  }

  function createShatterEffect() {
    // Stop scratching
    isScratching = false;
    canvas.style.pointerEvents = 'none';
    
    // Create particles from remaining scratch overlay
    const particles = [];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10 - 5,
        size: Math.random() * 30 + 20,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
        alpha: 1
      });
    }
    
    // Animate particles
    let frame = 0;
    const maxFrames = 60;
    
    function animateShatter() {
      frame++;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.forEach(particle => {
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.globalAlpha = particle.alpha;
        
        // Draw particle piece
        ctx.fillStyle = era.color;
        ctx.fillRect(-particle.size/2, -particle.size/2, particle.size, particle.size);
        
        // Add heart pattern
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.font = '15px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('♥', 0, 0);
        
        ctx.restore();
        
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.5; // gravity
        particle.rotation += particle.rotationSpeed;
        particle.alpha = Math.max(0, 1 - (frame / maxFrames));
      });
      
      if (frame < maxFrames) {
        requestAnimationFrame(animateShatter);
      } else {
        // Animation complete - hide overlay
        container.style.transition = 'opacity 0.3s ease';
        container.style.opacity = '0';
        setTimeout(() => {
          container.style.display = 'none';
          container.style.opacity = '1';
        }, 300);
      }
    }
    
    animateShatter();
  }

  // Mouse events
  canvas.addEventListener("mousedown", (e) => {
    isScratching = true;
    const rect = canvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;
    scratch(e);
  });

  canvas.addEventListener("mousemove", scratch);

  canvas.addEventListener("mouseup", () => {
    isScratching = false;
    checkScratchPercentage();
  });

  // Touch events
  canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    isScratching = true;
    const rect = canvas.getBoundingClientRect();
    lastX = e.touches[0].clientX - rect.left;
    lastY = e.touches[0].clientY - rect.top;
    scratch(e);
  });

  canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    scratch(e);
  });

  canvas.addEventListener("touchend", () => {
    isScratching = false;
    checkScratchPercentage();
  });
}

// Check if gift is unlocked
function isGiftUnlocked(age) {
  return unlockedGifts.includes(age.toString());
}

// Unlock a gift
function unlockGift(age) {
  if (!unlockedGifts.includes(age.toString())) {
    unlockedGifts.push(age.toString());
    saveProgress();
    generateGiftGrid();
  }
}

// Navigation
function nextGift() {
  if (currentGiftIndex < gifts.length - 1) {
    displayGift(currentGiftIndex + 1);
  }
}

function previousGift() {
  if (currentGiftIndex > 0) {
    displayGift(currentGiftIndex - 1);
  }
}

// Toggle music
function toggleMusic() {
  const music = document.getElementById("background-music");
  const toggle = document.getElementById("music-toggle");

  if (musicPlaying) {
    music.pause();
    musicPlaying = false;
    toggle.classList.remove("playing");
  } else {
    music.play();
    musicPlaying = true;
    toggle.classList.add("playing");
  }
  
  saveProgress(); // Save music state
}

// Toggle view (single/grid)
function toggleView() {
  isGridView = !isGridView;

  const singleView = document.getElementById("single-view");
  const gridView = document.getElementById("grid-view");
  const viewIcon = document.getElementById("view-icon");
  const viewLabel = document.getElementById("view-label");
  const viewToggle = document.getElementById("view-toggle");

  if (isGridView) {
    singleView.classList.remove("active");
    gridView.classList.add("active");
    viewIcon.className = "fas fa-gift";
    viewLabel.textContent = "Current Gift";
    viewToggle.classList.add("active");
  } else {
    singleView.classList.add("active");
    gridView.classList.remove("active");
    viewIcon.className = "fas fa-th";
    viewLabel.textContent = "All Gifts";
    viewToggle.classList.remove("active");
  }
  
  saveProgress(); // Save view state
}

// Toggle theme (light/dark)
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");
  const themeLabel = document.querySelector("#theme-toggle .nav-label");
  const themeToggle = document.getElementById("theme-toggle");
  
  body.classList.toggle("dark-theme");
  const isDark = body.classList.contains("dark-theme");
  
  if (isDark) {
    themeIcon.className = "fas fa-sun";
    themeLabel.textContent = "Light";
    themeToggle.classList.add("active");
  } else {
    themeIcon.className = "fas fa-moon";
    themeLabel.textContent = "Dark";
    themeToggle.classList.remove("active");
  }
  
  saveProgress(); // Save theme state
}

// Generate gift grid
function generateGiftGrid() {
  const grid = document.getElementById("gift-grid");
  grid.innerHTML = "";

  // Find the first locked gift (next available to play)
  let firstLockedIndex = -1;
  for (let i = 0; i < gifts.length; i++) {
    if (!gifts[i].isEra && !isGiftUnlocked(gifts[i].age)) {
      firstLockedIndex = i;
      break;
    }
  }

  gifts.forEach((gift, index) => {
    if (gift.isEra) return; // Skip era cards in grid

    const box = document.createElement("div");
    box.className = "gift-box";

    const isUnlocked = isGiftUnlocked(gift.age);
    const isCurrent = index === currentGiftIndex;
    const isNextAvailable = index === firstLockedIndex;
    const isLockedFuture = !isUnlocked && !isNextAvailable && !isCurrent;
    const isLocked = !isUnlocked; // Any locked gift (current, next, or future)

    if (isCurrent) {
      box.classList.add("current");
    } else if (isUnlocked) {
      box.classList.add("unlocked");
    } else if (isNextAvailable) {
      box.classList.add("next-available");
    } else {
      box.classList.add("locked");
      box.classList.add("disabled"); // Extra class for future locked gifts
    }

    // Show ??? for ALL locked gifts to preserve mystery (including current and next available)
    const displayName = isLocked ? "???" : gift.gift;
    const displayIcon = isLocked ? "fa-question" : "fa-gift";

    box.innerHTML = `
            <i class="fas ${displayIcon} gift-box-icon"></i>
            <div class="age-number-display">${gift.age}</div>
            <div class="gift-name-small">${displayName}</div>
            ${
              isUnlocked
                ? '<i class="fas fa-check-circle completed-check"></i><div class="replay-btn" onclick="replayGift(' + index + '); event.stopPropagation();"><i class="fas fa-play"></i> Replay</div>'
                : '<i class="fas fa-lock lock-icon"></i>'
            }
        `;

    // Only allow clicking on unlocked gifts or the next available locked gift
    if (isUnlocked || isNextAvailable || isCurrent) {
      box.style.cursor = "pointer";
      box.addEventListener("click", () => {
        displayGift(index);
        toggleView(); // Go back to single view
      });
    } else {
      box.style.cursor = "not-allowed";
      box.style.opacity = "0.5";
    }

    grid.appendChild(box);
  });
}

// Update grid highlight
function updateGridHighlight(index) {
  const boxes = document.querySelectorAll(".gift-box");
  boxes.forEach((box, i) => {
    box.classList.remove("current");
  });

  // Find the box index (excluding era cards)
  let boxIndex = 0;
  for (let i = 0; i <= index; i++) {
    if (!gifts[i].isEra) {
      if (i === index) {
        const targetBox = boxes[boxIndex];
        if (targetBox) {
          targetBox.classList.add("current");
        }
        break;
      }
      boxIndex++;
    }
  }
}

// Update progress
function updateProgress() {
  // Count only non-era gifts
  const totalGifts = gifts.filter(g => !g.isEra).length;
  
  // Count how many non-era gifts we've passed so far
  let currentGiftNumber = 0;
  for (let i = 0; i <= currentGiftIndex; i++) {
    if (!gifts[i].isEra) {
      currentGiftNumber++;
    }
  }
  
  // Update progress bar based on all items (including eras for smooth transitions)
  const percentage = ((currentGiftIndex + 1) / gifts.length) * 100;
  document.getElementById("progress-fill").style.width = percentage + "%";
  
  // Update text to show only gift count (excluding eras)
  document.getElementById("progress-text").textContent = `Gift ${currentGiftNumber} of ${totalGifts}`;
}

// Start game
function startGame() {
  const gift = gifts[currentGiftIndex];
  if (gift.isEra || !gift.gameId) return;

  const modal = document.getElementById("game-modal");
  const gameContent = document.getElementById("game-content");
  const gameTitle = document.getElementById("game-title");

  const isUnlocked = isGiftUnlocked(gift.age);

  // Hide gift name if locked
  if (isUnlocked) {
    gameTitle.textContent = `Age ${gift.age} - ${gift.gift}`;
  } else {
    gameTitle.textContent = `Age ${gift.age} - Mystery Gift`;
  }

  // Load game
  if (typeof loadGame === "function") {
    loadGame(gift.gameId, gameContent);
    modal.classList.add("active");
  }
}

// Replay a completed gift
function replayGift(giftIndex) {
  const gift = gifts[giftIndex];
  if (gift.isEra || !gift.gameId) return;

  const modal = document.getElementById("game-modal");
  const gameContent = document.getElementById("game-content");
  const gameTitle = document.getElementById("game-title");

  gameTitle.textContent = `Age ${gift.age} - ${gift.gift} (Replay)`;

  // Load game
  if (typeof loadGame === "function") {
    loadGame(gift.gameId, gameContent);
    modal.classList.add("active");
  }
}

// Close game
function closeGame() {
  const modal = document.getElementById("game-modal");
  modal.classList.remove("active");
}

// Game completion callback
function onGameComplete() {
  const gift = gifts[currentGiftIndex];
  unlockGift(gift.age);

  // Show success screen instead of closing immediately
  const gameContent = document.getElementById("game-content");
  const gameTitle = document.getElementById("game-title");
  
  gameTitle.textContent = " Congratulations!";
  
  gameContent.innerHTML = `
    <div style="text-align: center; padding: 40px 20px;">
      <div style="font-size: 80px; margin-bottom: 20px;">✨🎁✨</div>
      <h2 style="color: #ff9ec7; margin-bottom: 15px;">You Won!</h2>
      <p style="font-size: 18px; margin-bottom: 10px; color: #666;">Age ${gift.age} Gift Unlocked</p>
      <p style="font-size: 22px; font-weight: bold; color: #ff0088; margin-bottom: 30px;">${gift.gift}</p>
      <div style="background: #ffe5f1; padding: 20px; border-radius: 15px; margin-bottom: 30px;">
        <p style="color: #666; font-size: 16px; line-height: 1.6;">${gift.message}</p>
      </div>
      <button onclick="closeGameAndAdvance()" style="
        padding: 15px 40px; 
        background: linear-gradient(135deg, #ff9ec7, #ff6fa8); 
        color: white; 
        border: none; 
        border-radius: 25px; 
        font-size: 18px; 
        font-weight: bold; 
        cursor: pointer; 
        box-shadow: 0 4px 15px rgba(255, 158, 199, 0.4);
        transition: all 0.3s ease;
      " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        <i class="fas fa-arrow-right"></i> Next Gift
      </button>
    </div>
  `;
  
  // Update the current gift display in the background
  displayGift(currentGiftIndex);
}

// Close game and advance to next gift
function closeGameAndAdvance() {
  const modal = document.getElementById("game-modal");
  modal.classList.remove("active");
  
  // Advance to next gift if available
  if (currentGiftIndex < gifts.length - 1) {
    nextGift();
  }
}

// Save complete state to localStorage
function saveProgress() {
  const isDarkTheme = document.body.classList.contains("dark-theme");
  
  const state = {
    unlockedGifts: unlockedGifts,
    currentGiftIndex: currentGiftIndex,
    scratchedEras: scratchedEras,
    isGridView: isGridView,
    musicPlaying: musicPlaying,
    isDarkTheme: isDarkTheme,
    journeyStarted: true
  };
  localStorage.setItem("appState", JSON.stringify(state));
}

// Load complete state from localStorage
function loadProgress() {
  const savedState = localStorage.getItem("appState");
  
  if (savedState) {
    const state = JSON.parse(savedState);
    
    // Restore all state variables
    unlockedGifts = state.unlockedGifts || [];
    currentGiftIndex = state.currentGiftIndex || 0;
    scratchedEras = state.scratchedEras || [];
    isGridView = state.isGridView || false;
    musicPlaying = state.musicPlaying || false;
  }
}

// Reset all progress
function resetProgress() {
  if (confirm("Are you sure you want to reset all progress? This will clear all unlocked gifts and start over.")) {
    localStorage.clear();
    location.reload();
  }
}

// Keyboard navigation
document.addEventListener("keydown", function (e) {
  if (document.getElementById("game-modal").classList.contains("active"))
    return;

  if (e.key === "ArrowRight") {
    nextGift();
  } else if (e.key === "ArrowLeft") {
    previousGift();
  }
});
