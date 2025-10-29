// https://chatgpt.com/share/69024a30-c7a4-8009-af5a-2e07f46129b9    Journal AI
// https://www.figma.com/design/3zsOANctXFTvEn5GO61XX3/Montpetit_Justin_Portfolio?node-id=0-1&p=f&t=YCv6ZDvqvlwM6VYu-0  Moodboard
// https://github.com/users/Babouin-Sibyllin/projects/1  Github Project

//JAVASCRIPT VUE

const { createApp } = Vue;


createApp({
  data() {
    return {
      projects: [],
      DarkMode: false,
      DarkModeOnOff: "PORTFOLIO",
      HideGame: false
    };
  },

  mounted() {
    fetch('./projects.json')
      .then(data => data.json())
      .then(donnees => {
        this.projects = donnees;
      });
  },

  methods: {
    handleImageClick(id) {
      if (id == 1) {
        openPage3()
      } else if (id == 2) {
        openPage4()
      } else if (id == 3) {
        openPage5()
      } else {
        openPage6()
      }
    },

    DarkModeSwitch() {
      if (this.DarkMode) {
        this.DarkMode = false
        this.DarkModeOnOff = "PORTFOLIO"
      } else {
        this.DarkMode = true
        this.DarkModeOnOff = "DARKMODE"
      }
    },

    HideGameSwitch() {
      if (HideGame) {
        HideGame = true
      } else {
        HideGame = false
      }
    }
  },

})


  .mount('#app');

//FIN DU JAVASCRIPT VUE


// -------------------------------------------------------------------------------------------------------------------------------

//DÉBUT DU JAVASCRIPT POUR L'AFFICHAGE TÉLÉPHONE
let isVisible = false;
let activePhoneBackground = null;



function PhoneBackground() {
  document.getElementById("PhoneScreenID").style.backgroundImage = "url(./images/PhoneBackground.jpg)";
  document.getElementById("Fond1").style.border = "Solid aliceblue 2px"
  document.getElementById("Fond2").style.border = "none"
  document.getElementById("Fond3").style.border = "none"
  document.getElementById("Fond4").style.border = "none"
}

function PhoneBackground1() {
  document.getElementById("PhoneScreenID").style.backgroundImage = "url(./images/PhoneBackground1.avif)";
  document.getElementById("Fond2").style.border = "Solid aliceblue 2px"
  document.getElementById("Fond1").style.border = "none"
  document.getElementById("Fond3").style.border = "none"
  document.getElementById("Fond4").style.border = "none"
}

function PhoneBackground2() {
  document.getElementById("PhoneScreenID").style.backgroundImage = "url(./images/PhoneBackground2.avif)";
  document.getElementById("Fond3").style.border = "Solid aliceblue 2px"
  document.getElementById("Fond1").style.border = "none"
  document.getElementById("Fond2").style.border = "none"
  document.getElementById("Fond4").style.border = "none"
}

function PhoneBackground3() {
  document.getElementById("PhoneScreenID").style.backgroundImage = "url(./images/PhoneBackground3.avif)";
  document.getElementById("Fond4").style.border = "Solid aliceblue 2px"
  document.getElementById("Fond1").style.border = "none"
  document.getElementById("Fond2").style.border = "none"
  document.getElementById("Fond3").style.border = "none"
}

function AffichePhoneApp(App) {
  let OpenedApp = document.getElementById(`PhoneAppOpen${App}`)
  OpenedApp.style.display = 'block';
  isVisible = true;

  //Anime l'application téléphone en ouverture
  gsap.fromTo(OpenedApp,
    {
      scale: 0.3,
      y: window.innerHeight / 2,
      opacity: 0,
      borderRadius: "28px"
    },
    {
      duration: 0.8,
      scale: 1,
      y: 0,
      opacity: 1,
      borderRadius: "0px",
      ease: "power4.out"
    }
  );
}

function CachePhoneApp() {
  let EveryApps = document.getElementsByClassName('PhoneAppOpen');
  //vérifie toutes les classes AppOpen et les cachent
  for (let i = 0; i < EveryApps.length; i++) {

    // J'ai retiré display none sinon l'animation ne fontione pas
    //EveryApps[i].style.display = 'none';

    //Animation pour la fermeture de l'app téléphone
    if (isVisible) {
      gsap.fromTo(EveryApps[i],
        {
          duration: 0.8,
          scale: 1,
          y: 0,
          opacity: 1,
          borderRadius: "0px",
          ease: "power4.out"
        },
        {
          scale: 0.3,
          y: window.innerHeight / 2,
          opacity: 0,
          borderRadius: "28px",

          // exécuté après l'animation pour empêcher des problèmes techniques (les liens étaient toujours cliquable par accident)
          onComplete: function() {

            // Sélectionne l'index actuel et change le display à "none"
            EveryApps[i].style.display = 'none';
      }
        },
      );
    }
  }

  //Empêche la répétition de l'animation de fermeture
  isVisible = false;
}


// -------------------------------------------------------------------------------------------------------------------------------

// DÉBUT DU JAVASCRIPT POUR L'AFFICHAGE WINDOWS

const AppclickOnce = document.querySelectorAll('.icon');
let activeIcon = null;
const openBtn1 = document.getElementsByClassName('icon1');
let WindowScreen = document.getElementById('screenID');
const windowDivs = {};
const closeBtns = {};
let globalIndex = 1;


//Fonction pour aller chercher l'heure
function GetTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  // Ajoute un 0 quand les minutes sont en bas de 10 (évite d'afficher "10:8")
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  document.getElementById('PhoneTime').innerHTML = `${hours}:${minutes}`;
}

// Appelle la fonction
GetTime();

// À chaque minute, update le temps
setInterval(GetTime, 1000 * 60);


// Fonction pour ajouter un background bleu temporaire
AppclickOnce.forEach(element => {
  element.addEventListener('click', (e) => {

    //empêche le click de se déclencher dans tout les parents
    e.stopPropagation();

    //si il y a un "activeIcon" et que celui si n'est pas le même que "element", ça retire le fond bleu de l'icone actif
    if (activeIcon && activeIcon !== element) {
      activeIcon.style.backgroundColor = '';
    }

    //Si l'icone (celui précédemment cliqué) est le même que element (cliqué actuellement), alors il retire le fond bleu
    //activeIcon retourne à "null" (rien)
    if (activeIcon === element) {
      element.style.backgroundColor = '';
      activeIcon = null;
    } else {
      //si l'icone actuellement cliqué n'est pas le même, alors il applique le fond bleu à ce nouvel icone, et déclare ActiveIcon...
      // ... en tant que ce nouvel icone
      element.style.backgroundColor = 'rgba(0, 0, 255, 0.2)';
      activeIcon = element;
    }
  });
});

// lorsque l'utilisateur clique n'importe ou sur la page, si il y a un activeIcon, il retire le fond bleu, et remet activeIcon à null
document.addEventListener('click', () => {
  if (activeIcon) {
    activeIcon.style.backgroundColor = '';
    activeIcon = null;
  }
});




// fonctions utilisées pour changer le fond d'écran windows

function background1() {
  document.getElementById("screenID").style.backgroundImage = "url(./images/BaseBackground.jpg)"
}

function background2() {
  document.getElementById("screenID").style.backgroundImage = "url(./images/PlageBackground.jpg)"
}

function background3() {
  document.getElementById("screenID").style.backgroundImage = "url(./images/LionWallpaper.jpg)"
}

function background4() {
  document.getElementById("screenID").style.backgroundImage = "url(./images/MountainBackground.jpg)"
}


//Code nécessaire au fonctionnement du carousel
document.addEventListener("DOMContentLoaded", function () {

  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

});



//Animation ouverture de l'écran

let OpenIntro = gsap.timeline();

OpenIntro.to({}, {
  duration: 0.5
})
  .to(".intro", {
    duration: 1,
    opacity: 0,
    display: "none"
  });



// -------------------------------------------------------------------------------------------------------------------------------

//SYSTÈME FAUSSES FENÊTRE WINDOWS

// Loop à travers toutes mes fenêtres (1–10)
for (let i = 1; i <= 10; i++) {
  const windowDiv = document.getElementById(`computerWindow${i}`);
  const closeBtn = document.getElementById(`closeBtn${i}`);
  const dragHandle = document.getElementById(`dragHandle${i}`);

  // En cas d'erreur de numéro, il ignore
  if (!windowDiv || !closeBtn || !dragHandle) continue;

  // stock la donnée actuelle pour plus tard
  windowDivs[i] = windowDiv;
  closeBtns[i] = closeBtn;

  // --- Fonction qui permet d'ouvrir une page ---

  // Exécute la fonction "OpenPage" + l'index actuel (i)
  window[`openPage${i}`] = function() {
    // If i == 2 car le window 2 est la fenêtre des projets et requiert exceptionnelement un diplay flex.
    if (i == 2) {
      windowDiv.style.display = 'flex'
    } else { windowDiv.style.display = 'block'; }
    //Place la fenêtre au milieu de l'écran (permet le responsive)
    windowDiv.style.top = '50vh';
    windowDiv.style.left = '50vw';
    //Permet de réellement centrer la fenêtre
    windowDiv.style.transform = 'translate(-50%, -50%)';
    //Permet d'afficher la fenêtre au dessus des autres déjà ouvertes
    windowDiv.style.zIndex = globalIndex;
    globalIndex++;
  };

  // --- Permet de fermer la fenêtre ---
  closeBtn.addEventListener('click', () => {
    windowDiv.style.display = 'none';
  });

  // --- Rend la page "draggable" (dragHandle = le window header dans html + i) ---
  dragHandle.addEventListener('mousedown', (e) => {
    //empêche de sélectionner du texte lorsqu'on déplace la page
    e.preventDefault();

    // La fenêtre actuelle se voit appliqué un css z-index qui évolue continuellement, la mettant par dessus les autres
    windowDiv.style.zIndex = globalIndex;
    globalIndex++;

    // pos3 = position en X & pos4 = position en Y 
    let pos3 = e.clientX;
    let pos4 = e.clientY;

    const onMouseMove = (e) => {
      // pos1 & 2 = la nouvelle position de la souris (ancienne position - position actuelle)
      const pos1 = pos3 - e.clientX; //Calcule la différence de position en X depuis le dernier mouvement (pos3 étant la dernière positionX)
      const pos2 = pos4 - e.clientY; //Calcule la différence de position en Y depuis le dernier mouvement (pos4 étant la dernière positionY)
      pos3 = e.clientX; // Remet Pos3 comme étant la position X du curseur actuel
      pos4 = e.clientY; // Remet Pos4 comme étant la position Y du curseur actuel
      windowDiv.style.top = (windowDiv.offsetTop - pos2) + "px";
      windowDiv.style.left = (windowDiv.offsetLeft - pos1) + "px";
    };

    const onMouseUp = () => {
      //lorsque le clic est relâché, arrête le déplacement de la fenêtre
      document.removeEventListener('mousemove', onMouseMove);
      //empêche un conflit avec le prochain OnMouseMove
      document.removeEventListener('mouseup', onMouseUp);
    };

    //déclenche l'écoute des fonctions lorsque la souris est appuyée ou relâchée
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
}


