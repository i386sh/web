// lighttype by notzer0
// super light typing animation with js.
// feel free to use it if you want.

// \b is the escape character for breaks.
function type(element, _text, _delay, _scroll) {
    console.log("[lighttype] started.")
    let _textLength = _text.length;
    var i = 0;
    var _handle = setInterval(()=>{
        console.log("[lighttype] running.")
        if(i>_text.length) {
            clearInterval(_handle);
            console.log("[lighttype] finished.")
            return;
        }
        if(_text.charAt(i) == "\\" && _text.charAt(i+1) == "b") { element.innerHTML += "<br/>"; i++ } else element.innerHTML += _text.charAt(i); // break escape character handling
        if(_scroll == true) element.scrollIntoView(false);
        i++;
    }, _delay);
}