// I also really want to mention that this sucks ass, and I know it does. Didn't really want to use jQuery. Sorry.
function toggle(btn, element, avoidScroll) {
    let _x = element.style.display;
    if(_x == "none") {
        element.style.removeProperty("display");
        if(!avoidScroll)setTimeout(()=>{btn.scrollIntoView({behavior: "auto", block: "start"});},1)
    } else {
        element.style.setProperty("display","none");
        if(!avoidScroll)setTimeout(()=>{btn.scrollIntoView({behavior: "auto", block: "start"});},1)
    }
}
