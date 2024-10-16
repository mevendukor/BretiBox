import os
import json

# Remplace cela par le chemin de ton dossier contenant les fichiers MP3
dossier_prout = 'prout'
mp3_liste = []

# Parcourt les fichiers dans le dossier audio
for fichier in os.listdir(dossier_prout):
    if fichier.endswith('.mp3'):
        mp3_liste.append(f'prout/{fichier}')  # Ajoute "audio/" devant le nom du fichier

# Enregistre la liste directement dans un fichier JSON
with open('mp3_prout.json', 'w', encoding='utf-8') as json_file:
    json.dump(mp3_liste, json_file, ensure_ascii=False, indent=4)  # Écrit uniquement la liste

print("C'est bon, la liste prout est modifiée !")
