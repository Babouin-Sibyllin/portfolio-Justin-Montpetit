
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





const AppclickOnce = document.querySelectorAll('.icon');
let activeIcon = null;
const openBtn1 = document.getElementsByClassName('icon1')
const windowDiv1 = document.getElementById('computerWindow1');
const closeBtn1 = document.getElementById('closeBtn1');
const windowDiv2 = document.getElementById('computerWindow2');
const closeBtn2 = document.getElementById('closeBtn2');
let WindowScreen = document.getElementById('screenID');


AppclickOnce.forEach(element => {
  element.addEventListener('click', () => {
    if (activeIcon && activeIcon !== element) {
      /* vérifie si active icon contient une donnée, & si cette donnée n'est pas la même que la précédente*/
      activeIcon.style.backgroundColor = ''; /* si l'icone cliqué n'est pas le même, enlever le fond bleu */
    }

    element.style.backgroundColor = 'rgba(0, 0, 255, 0.2)'; /* Ajouter le fond bleu sur l'icone actuellement sélectionné */

    activeIcon = element;

  });
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

function openPage1() {
  windowDiv1.style.display = 'block';
  windowDiv1.style.top = '50vh';
  windowDiv1.style.left = '50vw';
  windowDiv1.style.transform = 'translate(-50%, -50%)';
}

closeBtn1.addEventListener('click', () => {
  windowDiv1.style.display = 'none';
});


function screenClick() {
  AppclickOnce.forEach((app) => {
    app.style.backgroundColor = "";
  });
}


dragElement(windowDiv1);

function dragElement(elmnt) {
  const header = document.getElementById("dragHandle1");
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  if (header) {
    header.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement1;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement1() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
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



  //window 2

  //fonction utilisée pour afficher la page
  function openPage2() {
    windowDiv2.style.display = 'block';
    windowDiv2.style.top = '50vh';
    windowDiv2.style.left = '50vw';
    windowDiv2.style.transform = 'translate(-50%, -50%)';
  }
  
  //bouton rouge pour fermer la page
  closeBtn2.addEventListener('click', () => {
    windowDiv2.style.display = 'none';
  });
  
  
  function screenClick2() {
    AppclickOnce.forEach((app) => {
      app.style.backgroundColor = "";
    });
  }
  
  //fonction pour que la page suive la souris
  
  dragElement2(windowDiv2);
  
  function dragElement2(elmnt) {
    const header = document.getElementById("dragHandle2");
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
  
    if (header) {
      header.onmousedown = dragMouseDown2;
    }
  
    //fonction pour que la page suive la souris
    function dragMouseDown2(e) {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement2;
      document.onmousemove = elementDrag2;
    }
  
    //fonction pour que la page suive la souris
    function elementDrag2(e) {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    //fonction pour arrêter que la souris suive
    function closeDragElement2() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }