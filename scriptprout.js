const audioFiles =
[
    "prout/CONSTANT_Prout_1.mp3",
    "prout/CONSTANT_Prout_10.mp3",
    "prout/CONSTANT_Prout_11.mp3",
    "prout/CONSTANT_Prout_12.mp3",
    "prout/CONSTANT_Prout_2.mp3",
    "prout/CONSTANT_Prout_3.mp3",
    "prout/CONSTANT_Prout_4.mp3",
    "prout/CONSTANT_Prout_5.mp3",
    "prout/CONSTANT_Prout_6.mp3",
    "prout/CONSTANT_Prout_7.mp3",
    "prout/CONSTANT_Prout_8.mp3",
    "prout/CONSTANT_Prout_9.mp3",
    "prout/JUSTIN_Prout_1.mp3",
    "prout/JUSTIN_Prout_10.mp3",
    "prout/JUSTIN_Prout_11.mp3",
    "prout/JUSTIN_Prout_12.mp3",
    "prout/JUSTIN_Prout_13.mp3",
    "prout/JUSTIN_Prout_14.mp3",
    "prout/JUSTIN_Prout_15.mp3",
    "prout/JUSTIN_Prout_16.mp3",
    "prout/JUSTIN_Prout_17.mp3",
    "prout/JUSTIN_Prout_18.mp3",
    "prout/JUSTIN_Prout_19.mp3",
    "prout/JUSTIN_Prout_2.mp3",
    "prout/JUSTIN_Prout_20.mp3",
    "prout/JUSTIN_Prout_21.mp3",
    "prout/JUSTIN_Prout_22.mp3",
    "prout/JUSTIN_Prout_23.mp3",
    "prout/JUSTIN_Prout_24.mp3",
    "prout/JUSTIN_Prout_25.mp3",
    "prout/JUSTIN_Prout_26.mp3",
    "prout/JUSTIN_Prout_27.mp3",
    "prout/JUSTIN_Prout_28.mp3",
    "prout/JUSTIN_Prout_29.mp3",
    "prout/JUSTIN_Prout_3.mp3",
    "prout/JUSTIN_Prout_30.mp3",
    "prout/JUSTIN_Prout_31.mp3",
    "prout/JUSTIN_Prout_32.mp3",
    "prout/JUSTIN_Prout_4.mp3",
    "prout/JUSTIN_Prout_5.mp3",
    "prout/JUSTIN_Prout_6.mp3",
    "prout/JUSTIN_Prout_7.mp3",
    "prout/JUSTIN_Prout_8.mp3",
    "prout/JUSTIN_Prout_9.mp3",
    "prout/MEVEN_Prout_1.mp3",
    "prout/MEVEN_Prout_10.mp3",
    "prout/MEVEN_Prout_11.mp3",
    "prout/MEVEN_Prout_12.mp3",
    "prout/MEVEN_Prout_13.mp3",
    "prout/MEVEN_Prout_14.mp3",
    "prout/MEVEN_Prout_15.mp3",
    "prout/MEVEN_Prout_16.mp3",
    "prout/MEVEN_Prout_17.mp3",
    "prout/MEVEN_Prout_18.mp3",
    "prout/MEVEN_Prout_19.mp3",
    "prout/MEVEN_Prout_2.mp3",
    "prout/MEVEN_Prout_20.mp3",
    "prout/MEVEN_Prout_21.mp3",
    "prout/MEVEN_Prout_22.mp3",
    "prout/MEVEN_Prout_23.mp3",
    "prout/MEVEN_Prout_24.mp3",
    "prout/MEVEN_Prout_25.mp3",
    "prout/MEVEN_Prout_26.mp3",
    "prout/MEVEN_Prout_3.mp3",
    "prout/MEVEN_Prout_4.mp3",
    "prout/MEVEN_Prout_5.mp3",
    "prout/MEVEN_Prout_6.mp3",
    "prout/MEVEN_Prout_7.mp3",
    "prout/MEVEN_Prout_8.mp3",
    "prout/MEVEN_Prout_9.mp3",
    "prout/NOE_Prout_1.mp3",
    "prout/NOE_Prout_10.mp3",
    "prout/NOE_Prout_11.mp3",
    "prout/NOE_Prout_12.mp3",
    "prout/NOE_Prout_13.mp3",
    "prout/NOE_Prout_14.mp3",
    "prout/NOE_Prout_15.mp3",
    "prout/NOE_Prout_16.mp3",
    "prout/NOE_Prout_17.mp3",
    "prout/NOE_Prout_18.mp3",
    "prout/NOE_Prout_2.mp3",
    "prout/NOE_Prout_3.mp3",
    "prout/NOE_Prout_4.mp3",
    "prout/NOE_Prout_5.mp3",
    "prout/NOE_Prout_6.mp3",
    "prout/NOE_Prout_7.mp3",
    "prout/NOE_Prout_8.mp3",
    "prout/NOE_Prout_9.mp3"
];


let currentAudio = null;
let score = 0;
let isPlaying = false;
let correctName = null; // Nom à deviner
let newAudioReady = false; // Flag pour savoir si un nouveau prout est prêt après une réponse

// Fonction pour générer un nombre aléatoire
function getRandomAudio() {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    return audioFiles[randomIndex];
}

// Fonction pour jouer un audio (nouveau ou actuel)
function playAudio() {
    if (!newAudioReady && currentAudio) {
        console.log("Rejoue le prout actuel.");
        currentAudio.play();
    } else {
        const audioSrc = getRandomAudio();
        currentAudio = new Audio(audioSrc);

        // Récupérer le prénom à deviner à partir du nom du fichier
        const fileName = audioSrc.split('/').pop().split('.')[0];
        correctName = fileName.split('_')[0].toLowerCase(); // Extraire le prénom en minuscule

        console.log(`Nouveau prout joué : ${audioSrc}`);
        console.log(`Prénom à deviner : ${correctName}`);

        currentAudio.play()
            .then(() => {
                proutButton.dataset.name = correctName; // Stocker le prénom dans un attribut data
                newAudioReady = false; // Reset pour empêcher de jouer un nouveau prout tant que pas recliqué
            })
            .catch(error => {
                console.error("Erreur lors de la lecture de l'audio :", error);
                currentAudio = null; // Réinitialise si quelque chose s'est mal passé
            });
    }
}

// Gérer le clic sur proutbutton
proutButton.addEventListener('click', () => {
    if (!isPlaying || newAudioReady) {
        isPlaying = true;
        proutButton.textContent = `Devine le prout Score : ${score}`;
        playAudio(); // Jouer l'audio actuel ou un nouveau selon l'état de newAudioReady
    } else if (currentAudio) {
        console.log("Rejoue l'audio actuel.");
        currentAudio.pause(); // Couper l'audio actuel
        currentAudio.currentTime = 0; // Réinitialiser le temps à 0
        currentAudio.play() // Rejouer l'audio
            .catch(error => {
                console.error("Erreur lors de la tentative de rejouer l'audio :", error);
            });
    } else {
        console.warn("Aucun audio disponible pour être rejoué.");
    }
});

// Gérer le clic sur les boutons de prénom
const audioButtons = document.querySelectorAll('.audio-button');
audioButtons.forEach(button => {
    button.addEventListener('click', () => {
        const guessedName = button.id.toLowerCase(); // Récupérer le prénom du bouton cliqué
        const correctNameDebug = proutButton.dataset.name.toLowerCase();

        console.log(`Prénom deviné : ${guessedName}`);
        console.log(`Prénom correct : ${correctNameDebug}`);

        if (guessedName === correctNameDebug) {
            score++; // Incrémenter le score
            proutButton.textContent = `Devine le prout Score : ${score}`;
            console.log("Bonne réponse !");

            newAudioReady = true; // Un nouveau prout est prêt à jouer au prochain clic sur proutbutton
        } else {
            // Réinitialiser le score et afficher "Clique pour jouer"
            score = 0;
            proutButton.textContent = `Devine le prout Score : ${score}`;
            console.log("Mauvaise réponse, le score est réinitialisé.");

            newAudioReady = true; // Un nouveau prout est prêt à jouer au prochain clic sur proutbutton
        }
    });
});
