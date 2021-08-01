let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

const draggableElements = document.querySelectorAll('.draggable');

draggableElements.forEach(draggableElement => {
    console.log(draggableElement);

    const draggableHeader = draggableElement.querySelector('.draggable__header');

    const onDrag = (e) => {
        let getStyle = window.getComputedStyle(draggableElement),
        left = parseInt(getStyle.left),
        top = parseInt(getStyle.top);
        if (!isMobile.any()) {
            let movementX = e.movementX,
                movementY = e.movementY;
            draggableElement.style.left = `${left + movementX}px`;
            draggableElement.style.top = `${top + movementY}px`;
        } else {
            let pageX = e.pageX,
            pageY = e.pageY;
            draggableElement.style.left = `${left + pageX}px`;
            draggableElement.style.top = `${top + pageY}px`;
            
        }

    };

    draggableHeader.addEventListener('mousedown', () => {
        draggableHeader.classList.add('active');
        draggableHeader.addEventListener('mousemove', onDrag);
    });
    document.addEventListener('mouseup', () => {
        draggableHeader.classList.remove('active');
        draggableHeader.removeEventListener('mousemove', onDrag);
    });

    draggableHeader.addEventListener('touchstart', (e) => {
        draggableHeader.classList.add('active');
        draggableHeader.addEventListener('tauchmove', onDrag);
        console.log(e);

    });
    document.addEventListener('touchend', () => {
        draggableHeader.classList.remove('active');
        draggableHeader.removeEventListener('tauchmove', onDrag);
    });
});

