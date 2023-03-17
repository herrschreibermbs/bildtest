// Bild-Element aus dem HTML-Dokument auswählen
var bild = document.getElementById('bild');

// Variablen initialisieren
var isDragging = false;
var startX = 0;
var startY = 0;
var currentX = 0;
var currentY = 0;

// Event-Listener hinzufügen
bild.addEventListener('mousedown', dragStart);
bild.addEventListener('touchstart', dragStart);
bild.addEventListener('mouseup', dragEnd);
bild.addEventListener('touchend', dragEnd);
bild.addEventListener('mousemove', drag);
bild.addEventListener('touchmove', drag);

// Funktion, die aufgerufen wird, wenn das Dragging startet
function dragStart(event) {
	event.preventDefault();
	if (event.type === 'touchstart') {
		startX = event.touches[0].clientX - bild.offsetLeft;
		startY = event.touches[0].clientY - bild.offsetTop;
	} else {
		startX = event.clientX - bild.offsetLeft;
		startY = event.clientY - bild.offsetTop;
	}
	isDragging = true;
}

// Funktion, die aufgerufen wird, wenn das Dragging endet
function dragEnd(event) {
	event.preventDefault();
	isDragging = false;
}

// Funktion, die aufgerufen wird, während das Dragging stattfindet
function drag(event) {
	event.preventDefault();
	if (isDragging) {
		if (event.type === 'touchmove') {
			currentX = event.touches[0].clientX - startX;
			currentY = event.touches[0].clientY - startY;
		} else {
			currentX = event.clientX - startX;
			currentY = event.clientY - startY;
		}
		bild.style.left = currentX + 'px';
		bild.style.top = currentY + 'px';
	}
}
