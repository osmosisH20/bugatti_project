const pointer = document.getElementById("pointer");

const getClass = type => {
    switch(type) {
        case "video":
            return "fa-solid fa-play";
        default:
            return "fa-solid fa-up-right-from-square";
    }
}

const animatePointer = (e,imging) => {
    const x = e.clientX - pointer.offsetWidth / 2,
          y = e.clientY - pointer.offsetHeight / 2;

    const keyframes = {
        transform: `translate( ${x}px, ${y}px ) scale(${imging ? 7 : 1})`
    }

    pointer.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    });
}



window.onmousemove = e => {
    const imgable = e.target.closest(".point"),
          imging = imgable !== null;
          
    const icon = document.getElementById("icon");
    
    animatePointer(e , imging);

    pointer.dataset.type = imging ? imgable.dataset.type: "";

    if(imging) {
        icon.className = getClass(imgable.dataset.type);
    }
}