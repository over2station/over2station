# Faire une émission sur over2station avec MyRadiomatisme

## 1. Installation

Pour streamer sur over2station, vous pouvez utiliser n'importe quel logiciel de streaming radio qui est compatible avec un serveur icecast. Dans cet exemple, nous utiliserons le logiciel gratuit [MyRadiomatisme](http://www.myradiomatisme.fr/).

## 2. Présentation

Une fois lancé, MyRadiomatisme ressemble à ceci (sans les cadres de couleur):

![Demo Animation](/image/myradiomatisme.PNG)

- Dans le cadre bleu : affichage du titre en cours de lecture et du prochain titre
- Dans le cadre jaune : des informations sur la musique en cours, le niveau du son, si vous souhaitez ou non un retour son, démarrer ou arrêter la playlist et lire en boucle une musique de la playlist.
- Dans le cadre vert : votre playlist. Elle contient les musiques qui seront lues les unes après les autres.
- Dans le cadre rouge : votre cartoucheur. Vous pouvez attribuer des sons à chaque cartouche. Si vous cliquez dessus, le son sera joué instantanément et en même temps que la musique de la playlist.

## 2. Configuration

### 2.1 Microphone

Pour configurer votre micro, rendez-vous dans le menu "Modules" en haut à gauche puis "Micro".
Dans "Carte son à utiliser", sélectionner votre micro.
Le "volume" de gauche représente le volume de la musique lorsque le micro sera activé.
Le volume "Mic." de droite représente le volume de votre micro. Attention : Pour beaucoup de configuration, le micro sature. Donc mettez le niveau faiblement.

Pour configurer votre micro, lancez une musique dans votre playlist, cliquez sur "Activer le micro" puis ajustez les niveaux. Une fois que les niveaux vous semble ok, cliquez sur "Couper le micro".

> Pour activer votre micro, cliquer sur "Micro off" en bas à gauche de l'application. Cliquer sur "Micro on" pour éteindre le micro.

### 2.2 Ajustement du son

Dans l'onglet "Options", cocher "Activer l'amplificateur dynamique (DAMP). Cela permettra d'ajuster les musiques pour avoir tout le temps un même niveau sonore (et ne pas péter les oreilles de vos écouteurs).

### 2.3 Configurer une diffusion

Cliquer sur "Diffusion sur internet", cliquer sur le boutton "+". Données :
| Nom | Valeur |
| :---: | :---: |
| Type de serveur | Icecast |
| Adresse | radio.shyndard.net |
| Port | 80 |
| Mot de passe | A demander =D |
| Station publique | A décocher |
| Fichier de montage | /live.mp3 |
| Nom de la radio | Le nom de l'émission qui sera affiché sur le site web (par exemple "Loup Garou", "Blindtest")|
| Site web | https://over2craft.com |
| Genre | Gaming |
| Format | MP3 |
| Mono / Stéréo | Stéréo |
| Fréquence | 44 kHz |
| Débit | 128 kpbs (ne pas mettre plus sinon ça peut faire lag des auditeurs) |
| Message 1/2 | Ne rien mettre |

Une fois configuré, cliquer sur le bouton "Lancer la diffusion" pour démarrer le stream !

## 3. Notes

Dans le cas où il n'y a plus de son (musique, voix), le stream se coupe automatiquement au bout de quelques secondes. Pensez à avoir une playlist important pour ne pas avoir de problèmes.