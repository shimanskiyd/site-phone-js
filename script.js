function offset(param) {
    let rect = param.getBoundingClientRect();
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
}

function myAnimScroll(elem, myActiveClass) {
    let elemHeight = elem.offsetHeight;
    let elemPosition = offset(elem);
    let startAnim = window.innerHeight - elemHeight / 2;

    if (elemHeight > window.innerHeight) {
        startAnim = window.innerHeight - window.innerHeight / 2;
    }
    if ((pageYOffset > elemPosition - startAnim) && pageYOffset < (elemPosition + elemHeight)) {
        elem.classList.add(myActiveClass);
    }
    else {
        if (!elem.classList.contains('no-anim-again')) {
            elem.classList.remove(myActiveClass);
        }
    }
}
let animRight = document.querySelectorAll('.my-anim-right');
if (animRight.length > 0){
    for (let i = 0; i < animRight.length; i++) {
    myAnimScroll(animRight[i],"my-active-right");
    window.addEventListener('scroll', () => {myAnimScroll(animRight[i], "my-active-right")});
    }
}

document.getElementById("la").style.fontSize ="27px";
document.getElementById("lal").style.fontFamily ="cursive";
document.getElementById("lam").style.fontSize ="27px";
document.getElementById("las").style.fontSize ="27px";
document.getElementById("lall").style.fontFamily ="cursive";