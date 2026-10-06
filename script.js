document.addEventListener("DOMContentLoaded", () => {
    const landingScene = document.getElementById("landing-scene");
    const profilePage = document.getElementById("profile-page");
    const enterBtn = document.getElementById("enter-btn");
    const introVideo = document.getElementById("intro-video");

    // 1. Landing Page Interaction
    enterBtn.addEventListener("click", () => {
        landingScene.classList.add("expand-out");
        introVideo.load();

        setTimeout(() => {
            landingScene.style.display = "none";
            profilePage.classList.remove("hidden");
            
            setTimeout(() => { introVideo.play(); }, 500);
            window.scrollTo(0, 0);
        }, 1000); 
    });

    // 2. Interactive Bento Hover Effects (Mouse Tracking)
    const cards = document.querySelectorAll('.interactive-card');
    
    cards.forEach(card => {
        const glowBlob = card.querySelector('.glow-blob');
        
        card.addEventListener('mousemove', (e) => {
            // Get mouse position relative to the card
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Move the glow blob to follow the mouse
            glowBlob.style.left = `${x}px`;
            glowBlob.style.top = `${y}px`;
        });
    });
});