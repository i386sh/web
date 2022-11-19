// this is the laziest way i could have swapped to jquery for toggling elements. do not care it works lol
function toggle(btn,element,avoidScroll) {
    $(element).toggle({
        duration:150,
        easing:"swing",
        done: function() {
            if(!avoidScroll || $(element).css("display") !== "none") btn.scrollIntoView()
        }
    })
}
