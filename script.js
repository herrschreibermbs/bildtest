// Bild-Elemente aus dem HTML-Dokument auswählen
var bilder = document.querySelectorAll('.bild');

// Variablen initialisieren
var isDragging = false;
var startX = 0;
var startY = 0;
var currentX = 0;
var currentY = 0;

// Event-Listener hinzufügen
bilder.forEach(function(bild) {
    bild.addEventListener('mousedown', dragStart);
    bild.addEventListener('touchstart', dragStart);
    bild.addEventListener('mouseup', dragEnd);
    bild.addEventListener('touchend', dragEnd);
    bild.addEventListener('mousemove', drag);
    bild.addEventListener('touchmove', drag);
});

// Funktion, die aufgerufen wird, wenn das Dragging startet
function dragStart(event) {
	event.preventDefault();
	if (event.type === 'touchstart') {
		startX = event.touches[0].clientX - this.offsetLeft;
		startY = event.touches[0].clientY - this.offsetTop;
	} else {
		startX = event.clientX - this.offsetLeft;
		startY = event.clientY - this.offsetTop;
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
		this.style.left = currentX + 'px';
		this.style.top = currentY + 'px';
	}
}
