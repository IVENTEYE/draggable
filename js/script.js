const draggableElements = document.querySelectorAll('.draggable');

draggableElements.forEach(draggableElement => {
    console.log(draggableElement);
    
    const draggableHeader = draggableElement.querySelector('.draggable__header');

    const onDrag = ({movementX, movementY}) => {
        let getStyle = window.getComputedStyle(draggableElement),
            left = parseInt(getStyle.left),
            top = parseInt(getStyle.top);

        draggableElement.style.left = `${left + movementX}px`;
        draggableElement.style.top = `${top + movementY}px`;
    };

    draggableHeader.addEventListener('mousedown', () => {
        draggableHeader.classList.add('active');
        draggableHeader.addEventListener('mousemove', onDrag);
    });
    document.addEventListener('mouseup', () => {
        draggableHeader.classList.remove('active');
        draggableHeader.removeEventListener('mousemove', onDrag);
    });

    draggableHeader.addEventListener('touchstart', () => {
        draggableHeader.classList.add('active');
        draggableHeader.addEventListener('tauchmove', onDrag);
    });
    document.addEventListener('touchend', () => {
        draggableHeader.classList.remove('active');
        draggableHeader.removeEventListener('tauchmove', onDrag);
    });
});

