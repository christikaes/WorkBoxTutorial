// Application setup
export const setup = async () => {
    // Fetch the data.json for all the characters
    const response = await fetch("data.json");
    const data = await response.json();
    const characters = data.characters;

    const playSound = (characterName) => {
        const characterSounds = characters[characterName];
        const soundName = characterSounds[Math.floor(Math.random() * characterSounds.length)];
        const audio = new Audio("assets/sound/" + soundName + ".mp3")
        audio.play();
    }

    // Play a sound when an image is clicked
    document.querySelector('.characters').addEventListener("click", (e) => {
        if (!e || !e.target || !e.target.dataset || !e.target.dataset.character) {
            return;
        }

        const characterName = e.target.dataset.character;
        playSound(characterName);
    })
}

// Register serviceworker
export const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/sw.js')
            .then(() => {
                console.log("[Service Worker] Registered");
            })
    }
}