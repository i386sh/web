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
