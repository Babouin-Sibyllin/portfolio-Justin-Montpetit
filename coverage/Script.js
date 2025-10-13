//JAVASCRIPT VUE

const { createApp } = Vue;


createApp({
  data() {
    return {
      puceau: "puceau",
      projects: []
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

  },

})


  .mount('#app');

//FIN DU JAVASCRIPT VUE


// DÉBUT DU JAVASCRIPT NORMAL

const AppclickOnce = document.querySelectorAll('.icon');
let activeIcon = null;
const openBtn1 = document.getElementsByClassName('icon1')
let WindowScreen = document.getElementById('screenID');
const windowDivs = {};
const closeBtns = {};
let globalIndex = 1;


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



function background1() {
  document.getElementById("screenID").style.backgroundImage = "url(./images/BaseBackground.jpg)"
}

function background2() {
  document.getElementById("screenID").style.backgroundImage = "url(./images/PlageBackground.jpg)"
}

function background3() {
  document.getElementById("screenID").style.backgroundImage = "url(./images/LionWallpaper.jpg)"
}





let OpenIntro = gsap.timeline();

OpenIntro.to({}, {
  duration: 0.5
})
  .to(".intro", {
    duration: 1,
    opacity: 0,
    display: "none"
  });

//SYSTÈME FAUSSES FENÊTRE WINDOWS

// Loop through all your windows (1–10)
for (let i = 1; i <= 10; i++) {
  const windowDiv = document.getElementById(`computerWindow${i}`);
  const closeBtn = document.getElementById(`closeBtn${i}`);
  const dragHandle = document.getElementById(`dragHandle${i}`);

  // Skip if this window doesn’t exist in the HTML
  if (!windowDiv || !closeBtn || !dragHandle) continue;

  // Store them for later access
  windowDivs[i] = windowDiv;
  closeBtns[i] = closeBtn;

  // --- Open Function ---
  window[`openPage${i}`] = function () {
    windowDiv.style.display = 'block';
    windowDiv.style.top = '50vh';
    windowDiv.style.left = '50vw';
    windowDiv.style.transform = 'translate(-50%, -50%)';
    windowDiv.style.zIndex = globalIndex;
    globalIndex++;
  };

  // --- Close Button Function ---
  closeBtn.addEventListener('click', () => {
    windowDiv.style.display = 'none';
  });

  // --- Make Window Draggable ---
  dragHandle.addEventListener('mousedown', (e) => {
    e.preventDefault();

    // La fenêtre actuelle se voit appliqué un css z-index qui évolue continuellement, la mettant par dessus les autres
    windowDiv.style.zIndex = globalIndex;
    globalIndex++;

    let pos3 = e.clientX;
    let pos4 = e.clientY;

    const onMouseMove = (e) => {
      const pos1 = pos3 - e.clientX;
      const pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      windowDiv.style.top = (windowDiv.offsetTop - pos2) + "px";
      windowDiv.style.left = (windowDiv.offsetLeft - pos1) + "px";
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
}


