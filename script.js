

// Sélectionne le bouton et initialise le tableau audio
const shuffleButton = document.getElementById('shuffleButton');
const audioFiles =
[
   "audio/CLEMENT_BretiClem.mp3",
    "audio/CLEMENT_BretiPoutine.mp3",
    "audio/CLEMENT_C'est_excellent_!.mp3",
    "audio/CLEMENT_C'est_la_commurge_bis_!.mp3",
    "audio/CLEMENT_C'est_les_pitchounes_!.mp3",
    "audio/CLEMENT_Chaud_mgl.mp3",
    "audio/CLEMENT_Chuis_fuméééé.mp3",
    "audio/CLEMENT_Clement_imite_Nicolas.mp3",
    "audio/CLEMENT_Déclaration_Clément_bourré.mp3",
    "audio/CLEMENT_J'ai_pissé_un_arbre.mp3",
    "audio/CLEMENT_J'envoie_un_vocal_..._à_mes_potes_..._du_Mans.mp3",
    "audio/CLEMENT_Je_suis_mort_dans_la_boittahh.mp3",
    "audio/CLEMENT_NAAaa NaaAAN Naaaoo.mp3",
    "audio/CLEMENT_Starfoullah_chuis_pas_là.mp3",
    "audio/CLEMENT_T'y_est_fou_!.mp3",
    "audio/CONSTANT_BretiConstant.mp3",
    "audio/CONSTANT_C'était_ton_premier_doigtage.mp3",
    "audio/CONSTANT_Gros_son_ce_soiiiir.mp3",
    "audio/CONSTANT_L'haleine_de_Malo.mp3",
    "audio/CONSTANT_Les_potes_de_Constant_disent_Brétignolles.mp3",
    "audio/CONSTANT_Prout_long.mp3",
    "audio/CONSTANT_Sir_Nicolas_de_Fombonne.mp3",
    "audio/CONSTANT_TCHOIN_TCHOIN_TCHOIN_!.mp3",
    "audio/CONSTANT_UIIiiiiii.mp3",
    "audio/CORENTIN_BretiCorentin.mp3",
    "audio/CORENTIN_C'est_honteux_!.mp3",
    "audio/CORENTIN_Corentin_parle_de_Nadia.mp3",
    "audio/CORENTIN_Moi_c'est_Wejdene.mp3",
    "audio/JUSTIN_Avec_ça_TR_GRATUIT_!!!.mp3",
    "audio/JUSTIN_C'est_toi_le_fils_de_druide.mp3",
    "audio/JUSTIN_Chaaartrres.mp3",
    "audio/JUSTIN_Derrière_la_Croix-Rouge_....mp3",
    "audio/JUSTIN_Elle_PUE-LA-MERDE.mp3",
    "audio/JUSTIN_Fourré_le_seum_!.mp3",
    "audio/JUSTIN_Je_suis_dans_ma_sdb_....mp3",
    "audio/JUSTIN_Joyeux_Noël_les_biloutes_!.mp3",
    "audio/JUSTIN_Mon_brave_Clément.mp3",
    "audio/JUSTIN_Oh_la_bah_dis_donc.mp3",
    "audio/JUSTIN_Oh_le_ptit_Clément.mp3",
    "audio/JUSTIN_Prout_F1.mp3",
    "audio/JUSTIN_Prout_trompette.mp3",
    "audio/JUSTIN_Prout_voiture_des_24H.mp3",
    "audio/JUSTIN_TR_GRATUIT_MGL.mp3",
    "audio/JUSTIN_Y'a_un_truc_qui_devient_dur.mp3",
    "audio/MEVEN_Bière_écran.mp3",
    "audio/MEVEN_Bombaho_par_Margot.mp3",
    "audio/MEVEN_BONANÉÉÉ_!!!.mp3",
    "audio/MEVEN_BONNE_ANNEÉééééEEe_!!!.mp3",
    "audio/MEVEN_En_2020_....mp3",
    "audio/MEVEN_I'm_totally_rabat.mp3",
    "audio/MEVEN_Je_suis_dans_ma_salle_de_baiiiing.mp3",
    "audio/MEVEN_Lac_du_Connemara.mp3",
    "audio/MEVEN_On_te_l'avait_dit.mp3",
    "audio/MEVEN_Pacho_Radio.mp3",
    "audio/MEVEN_Paul_Menou_dit_Brétignolles.mp3",
    "audio/MEVEN_Prout_avec_ambiance.mp3",
    "audio/MEVEN_Prout_Mario_fake.mp3",
    "audio/NICOLAS_BOOONNE_ANNÉÉeeEUUH.mp3",
    "audio/NICOLAS_Brétignolles_du_Sud.mp3",
    "audio/NICOLAS_Elle_est_tactile.mp3",
    "audio/NICOLAS_Elle_m'empêche_de_vivre.mp3",
    "audio/NICOLAS_J'adore_la_technoooo_!!!.mp3",
    "audio/NICOLAS_J'ai_envie_que_vous_veniez.mp3",
    "audio/NICOLAS_J'ai_saigné_de_l'anus.mp3",
    "audio/NICOLAS_KééééBAAAAB.mp3",
    "audio/NICOLAS_Mon_dernier_Brétignolles.mp3",
    "audio/NICOLAS_MOULAGA_SATURATION.mp3",
    "audio/NICOLAS_Nadia_vient_de_m'envoyer_un_message.mp3",
    "audio/NICOLAS_Nicolas_dans_la_rue.mp3",
    "audio/NICOLAS_Nico_saturation.mp3",
    "audio/NICOLAS_Oh_BOSSETI_!!.mp3",
    "audio/NICOLAS_Sarkolas.mp3",
    "audio/NICOLAS_Star_Academie.mp3",
    "audio/NICOLAS_Thomas_a_dit_que_....mp3",
    "audio/NICOLAS_VOUS_ME_MANQUEZ_PUTAING.mp3",
    "audio/NICOLAS_Yes_!.mp3",
    "audio/NOE_Au_piiiiiiire.mp3",
    "audio/NOE_BONNE_ANNÉÉÉÉ_!.mp3",
    "audio/NOE_BretiDisco.mp3",
    "audio/NOE_Mamie_Rhum_dit_Brétignolles.mp3",
    "audio/NOE_Mbappé_à_Paques.mp3",
    "audio/NOE_Noé_au_WEI_Ambiance_chelou.mp3",
    "audio/NOE_Noé_au_WEI_Oui_j'ai_bu_un_petit_peu.mp3",
    "audio/NOE_Noé_au_WEI_Quelle_déballe_tout.mp3",
    "audio/NOE_Noé_imite_Nicolas.mp3",
    "audio/NOE_Oueh_zeuubi_!.mp3",
    "audio/NOE_Papi_Rhum_dit_Brétignolles.mp3",
    "audio/NOE_Parle_normal_coup_de_fouet.mp3",
    "audio/NOE_Prout_Mario.mp3",
    "audio/NOE_Siii_Brétignolles_!.mp3",
    "audio/NOE_Starfoullah_je_sais_pas.mp3",
    "audio/NOE_Starfoullah_je_suis_encore_bourré.mp3",
    "audio/NOE_Starfoullah_moi_je_quitte_cet_endroit_!.mp3",
    "audio/NOE_T'es_un_malade_Bernard_!.mp3",
    "audio/NOE_Yo_techno.mp3"
];

const people = ["CLEMENT", "CONSTANT", "JUSTIN", "MEVEN", "NOE", "NICOLAS", "CORENTIN"];

let currentAudio = new Audio(); // Audio en cours

// Liste des termes à exclure
const excludeTerms = ['MEVEN', 'CONSTANT', 'JUSTIN', 'CLEMENT', 'NICOLAS', 'GROUPE', 'CORENTIN'];



document.addEventListener('DOMContentLoaded', function () {
    // Recherche l'élément searchInput uniquement si présent dans la page
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.trim();
            console.log('Recherche:', searchTerm);
            filterAudioFiles(searchTerm);
        });
    } else {
        console.log("search-input n'est pas présent sur cette page.");
    }

shuffleButton.addEventListener('click', playRandomAudio);


    // Autres initialisations et vérifications d'éléments peuvent aller ici...
});


// Liste des noms pour trier les fichiers audio

// Fonction pour changer le texte du bouton en fonction du nom du fichier audio
function changeButtonText(fileName) {
    const parts = fileName.split('_').slice(1); // Retire le premier terme
    const filteredParts = parts.filter(part => !excludeTerms.includes(part)); // Exclut les termes indésirables
    const displayName = filteredParts.join(' ').replace(/_/g, ' '); // Formater le nom et mettre en majuscules
    shuffleButton.innerText = displayName.replace('.mp3', ''); // Enlever l'extension .mp3

}



// Fonction pour jouer un audio aléatoire
function playRandomAudio() {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const selectedAudio = audioFiles[randomIndex];

    // Arrêter l'audio en cours s'il joue
    if (!currentAudio.paused) {
        currentAudio.pause();
    }

    currentAudio = new Audio(selectedAudio);
    currentAudio.play();
    changeButtonText(selectedAudio.split('/').pop()); // Changer le texte du bouton avec le nom du fichier
}



// Fonction pour trier automatiquement les fichiers audio par personne
function createAudioLibraries() {
    const audioLibraries = {};

    // Initialiser un tableau vide pour chaque personne
    people.forEach(person => {
        audioLibraries[person] = [];
    });

    // Parcourir les fichiers audio et les associer à la bonne personne
    audioFiles.forEach(file => {
        // Extraire le nom de la personne du fichier (la première partie du nom du fichier après "audio/")
        const person = file.split('/')[1].split('_')[0];
        
        // Si le nom de la personne correspond à une clé valide, on ajoute le fichier à sa bibliothèque
        if (audioLibraries[person]) {
            audioLibraries[person].push(file);
        }
    });

    return audioLibraries;
}

// Sélectionne tous les boutons de tête
const personButtons = document.querySelectorAll('.person-button');

// Ajoute un gestionnaire d'événements pour chaque bouton
personButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Retire la classe active de tous les boutons
        personButtons.forEach(btn => btn.classList.remove('active'));
        // Ajoute la classe active au bouton cliqué
        this.classList.add('active');
    });
});



function showFiles(person) {
    console.log(`Affichage des fichiers pour ${person}`); // Vérifie que la fonction est appelée

    const audioLibraries = createAudioLibraries(); // Générer les bibliothèques
    const audioGrid = document.getElementById('audio-grid');
    audioGrid.innerHTML = ''; // Vider la grille avant de l'afficher

    if (audioLibraries[person] && audioLibraries[person].length > 0) {
        audioLibraries[person].forEach(file => {
            const button = document.createElement('button');
            button.className = 'audio-button';

            // Extraire le nom du fichier sans prénom ni extension, et remplacer les _ par des espaces
            const fileName = file.split('/').pop().replace('.mp3', ''); // Récupère le nom du fichier sans extension
            const formattedName = fileName.split('_').slice(1).join(' ').trim(); // Supprime le prénom et remplace les _ par des espaces

            button.innerText = formattedName; // Définit le texte du bouton avec le nom formaté

            button.onclick = function () {
                playAudio(file); // Jouer l'audio en cliquant sur le bouton
            };

            audioGrid.appendChild(button);
        });

        audioGrid.classList.remove('hidden');
    } else {
        console.log(`Aucun fichier audio trouvé pour ${person}`);
    }

}



// Fonction pour jouer un fichier audio
function playAudio(file) {
    // Si un audio est déjà en cours de lecture, on l'arrête
    if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Remet l'audio à 0
    }

    // Créer un nouvel objet audio avec le fichier sélectionné
    currentAudio = new Audio(file);
    currentAudio.play();
}




// Fonction pour filtrer les fichiers audio en fonction de la recherche
function filterAudioFiles(searchTerm) {
    const audioGrid = document.getElementById('audio-grid');
    
    // Normaliser le terme de recherche (retirer les accents)
    const normalizedSearchTerm = searchTerm.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    const filteredFiles = audioFiles.filter(file => {
        const fileName = file.split('/').pop().replace('.mp3', '');
        const formattedName = fileName.split('_').slice(1).join(' ').trim();
        
        // Normaliser le nom du fichier (retirer les accents)
        const normalizedFileName = formattedName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
        
        return normalizedFileName.includes(normalizedSearchTerm);
    });

    // Vider la grille et afficher les fichiers filtrés
    audioGrid.innerHTML = '';
    filteredFiles.forEach(file => {
        const button = document.createElement('button');
        button.className = 'audio-button';

        const fileName = file.split('/').pop().replace('.mp3', '');
        const formattedName = fileName.split('_').slice(1).join(' ').trim();
        button.innerText = formattedName;

        button.onclick = function () {
            playAudio(file);
        };

        audioGrid.appendChild(button);
    });
}
