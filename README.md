# studio-zerance
Mini projet front
Pour télécharger l'application cliquer sur 'clone and download' et 'download zip'.
Pour lancer l'application ouvrez le fichier index.html.

Rendu mini projet studio-zerance
L'application est totalement responsive  elle s'adapte à tous types d'écran grâce aux media queries.
L'application est composée d'un header,d'une bannière,d'un slider,d'un portfolio et d'un text inifinite.
Les menus : Nos clients, Notre offre et Le studio renvoie respectivement  vers les section 3, 4 et 5. 

Le header est composé de l'image présente dans la maquette photoshop à savoir le long logo jaune et non le logo court qui est sur le site studio zerance et d'un menu.
J'ai placé le logo studio zerance sur la gauche et le menu à droite ce n'était pas mentionné dans les consignes mais j'ai ajouter une animation  hover comme présente sur votre site aux elements du menu lorsque qu'on passe la souris sur un de ces élements le texte devient jaune et une ligne jaune défile sous l'élement .
Lorsque la largeur de l'écran devient trop petite les élements texte menu deviennent des icônes , par exemple la section menu 'contact' devient un logo 'courrier' la séction menu client devient un logo 'poignée de main'

En dessous il y'a la section bannière qui respecte le rendu de la maquette avec une taille et une largeur similaire et le mot 'Shopify' souligné en jaune.

La séction portfolio avec les clients géniaux est conçu avec un système de grille qui comme sur la maquette est composé de 5 colonnes et de trois lignes j'ai ajouté des bordures afin que le portfolio ressemble au mieux à la maquette.
Si la largeur de l'écran devient trop petite la grille devient une grille à 2 colonnes et j'ajoute des rangées afin d'améliorer l'éxperience utilisateur sur petit écran.
Lorsqu'on clique sur le logo yoko on est rediriger vers le site client.

La section slider est la seule section qui utilise JavaScript

Je récupere les images et boutons dans le DOM.
Je récupere la largeur de l'image grâce a 'client.width'

Je créer une fonction qui au clic vas ajouter une animation horizontale du nombre de pixel de l'image et donc basculer à la suivante.(les images ont le même nombre de pixel de largeur).
Je définis une animation 'ease in out' (rapide sur le début ralenti sur la fin) de 0.5secondes.

Concernant le bloc de texte du slider je le masque lorsque le clic est activé sur le bouton suivant grâce à "    element.style.display='none'" et je l'affiche lorsque la transition est terminée ('transitionend') grâce à element.style.display='block'
afin d'avoir un rendu plus propre.

Text infinite

Le text infinite est présent dans le footer de l'application est défile de manière infini et fluide il respecte les couleurs de la maquette.
J'ai utilisé les animation en css pour cette section 2 animation horizontale qui défile l'une après l'autre à la même vitesse en 'linear infinite'afin de faire une sorte de 'boucle infinie'.


Partie responsive 
Comme je l'ai éxpliquer ci dessus j'ai cacher les élements texte du menu lorsque la largeur d'écran est trop petite et je les ai rempalcés par des icônes afin d'améliorer l'experience utilisateur j'ai aussi adapter  le systeme de grille selon la largeur écran.

Difficultés rencontrés et amélioration possible
Je n'ai pas rencontrer de grosse difficultés pour réaliser la maquette par contre  je n'avais jamais fait de text infinite j'ai  donc fait quelques recherches  pour apprendre comment en faire et ça c'est très bien passé.
Axe d'amélioration :
De plus belles icônes pour la section menu lorsque la largeur de l'écran est trop petit, et ajouter le drag pour le slider.

Temps passé : La section header/bannière et le portfolio avec la grille à était fait assez rapidement le système de grille est très intéressant pour le portfolio j'ai  passer  moins d'une journée au total pour c'est 3 sections avec  l'Html et le CSS.
Header : environ 1 heures
Bannière : environ 1 heure
Portfolio : environ 2 heures
Pour la section slider
environ : 4 heures
pour la section text infinte : environ 4 heures
Responsive : environ 2 heures
Et j'ajoute à cela quelques heures de tests et d'améliorations comme le hover du header.
Donc un total d'environ 2 jours.

