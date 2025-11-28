const keyStrokeSounds = [
    new Audio('/sounds/keystroke1.mp3'),
    new Audio('/sounds/keystroke2.mp3'),
    new Audio('/sounds/keystroke3.mp3'),
    new Audio('/sounds/keystroke4.mp3'),
]

function useKeyboardSound() {
    const playKeyStrokeSound = () => {
        const randomIndex = Math.floor(Math.random() * keyStrokeSounds.length)
        const sound = keyStrokeSounds[randomIndex]
        sound.currentTime = 0; // this is for a better experience when the sound is played in quick succession
        sound.play().catch((error) => {
            console.error("Error playing keystroke sound:", error)
        })
    };

    return { playKeyStrokeSound };
}

export default useKeyboardSound