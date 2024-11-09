// Menu Button Functionality
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        nav.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        nav.classList.remove('open');
        menuOpen = false;
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (menuOpen && !nav.contains(e.target) && !menuBtn.contains(e.target)) {
        menuBtn.classList.remove('open');
        nav.classList.remove('open');
        menuOpen = false;
    }
});

// Hotbar Functionality
const hotbarSlots = document.querySelectorAll('.hotbar__slot');

// Handle click selection
hotbarSlots.forEach(slot => {
    slot.addEventListener('click', () => {
        hotbarSlots.forEach(s => s.classList.remove('active'));
        slot.classList.add('active');
    });
});

// Handle number key selection (1-5)
document.addEventListener('keydown', (e) => {
    const key = parseInt(e.key);
    if (key >= 1 && key <= 5) {
        hotbarSlots.forEach(s => s.classList.remove('active'));
        hotbarSlots[key - 1].classList.add('active');
    }
});

// Hover Effects for Game Cards
const gameCards = document.querySelectorAll('.game-card');

gameCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    });
});

// Play Button Click Animation
const playButtons = document.querySelectorAll('.btn-play');

playButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
});

// Hero Title Animation
const heroTitle = document.querySelector('.hero__title');
let hue = 0;

function updateTitleGlow() {
    hue = (hue + 1) % 360;
    heroTitle.style.textShadow = `0 0 20px hsl(${hue}, 70%, 50%)`;
    requestAnimationFrame(updateTitleGlow);
}

updateTitleGlow();