
const AppclickOnce = document.querySelectorAll('.icon');
let activeIcon = null;
const openBtn1 = document.getElementsByClassName('icon1')
const windowDiv1 = document.getElementById('computerWindow1');
const closeBtn1 = document.getElementById('closeBtn1');


AppclickOnce.forEach(element => {
    element.addEventListener('click', () => {
        if (activeIcon && activeIcon !== element) { /* vérifie si active icon contient une donnée, & si cette donnée n'est pas la même que la précédente*/
            activeIcon.style.backgroundColor = ''; /* si l'icone cliqué n'est pas le même, enlever le fond bleu */
        }

        element.style.backgroundColor = 'rgba(0, 0, 255, 0.2)'; /* Ajouter le fond bleu sur l'icone actuellement sélectionné */

        activeIcon = element;
    });
});

function openPage() {
    windowDiv1.style.display = 'block';
    windowDiv1.style.top = '50%';
    windowDiv1.style.left = '50%';
}

closeBtn1.addEventListener('click', () => {
      windowDiv1.style.display = 'none';
    });



    dragElement(windowDiv1);
 
    function dragElement(elmnt) {
      const header = document.getElementById("dragHandle1");
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 
      if (header) {
        header.onmousedown = dragMouseDown;
      }
 
      function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
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
 
      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }