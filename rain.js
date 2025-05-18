function createRain() {
    const rainContainer = document.getElementById('rain-container');

    // Quantidade proporcional à largura da tela (~1 gota a cada 30px)
    const screenWidth = window.innerWidth;
    const dropCount = Math.floor(screenWidth / 30);

    for (let i = 0; i < dropCount; i++) {
        const drop = document.createElement('div');
        drop.classList.add('raindrop');
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.animationDuration = (0.4 + Math.random() * 1) + 's'; // ligeiramente mais rápido
        drop.style.animationDelay = Math.random() * 5 + 's';
        drop.style.opacity = Math.random();

        rainContainer.appendChild(drop);

        // Remove após 6s
        setTimeout(() => rainContainer.removeChild(drop), 6000);
    }
}

// Chuva contínua
setInterval(createRain, 1000);

function flashLightning() {
    const flash = document.getElementById('lightning-flash');

    const flashSequence = () => {
        flash.style.opacity = 0.8;
        setTimeout(() => flash.style.opacity = 0, 100);

        if (Math.random() > 0.5) {
            setTimeout(() => {
                flash.style.opacity = 0.6;
                setTimeout(() => flash.style.opacity = 0, 80);
            }, 200);
        }
    };

    flashSequence();
}

// Relâmpago com 20% de chance
setInterval(() => {
    if (Math.random() > 0.8) {
        flashLightning();
    }
}, 2000);
