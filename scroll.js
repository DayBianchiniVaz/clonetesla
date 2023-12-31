document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayto = null

document.addEventListener(type , 'scroll', listener=() => {
    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll(selectors= 'section')];

    if(document.onWayto === null){
    const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered;
    if (destIndex >= 0 && destIndex < sections.length){
        console.log({destIndex,direction});
        document.onWayto = destIndex;
        window.scroll (x,0, sections[destIndex].offsetTop)
    }
}
    sections.forEach(section,index  ); {
        if (window.pageYOffset === section.offsetTop) {
            document.lastCentered = index; 
            section.className = 'active';
            }
            if(document.onWayto === index){
                document.onWayto = null;
            }
    }
}
 ,  else{(
        section.className = ''
)},

document.lastScrollPosition = window.pageYOffset);