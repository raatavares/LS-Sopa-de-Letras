window.onload = function randomLeter () {
    for(let node of document.querySelectorAll("td")) {
        if(node.textContent != "") continue;
        let charcode = Math.round(65 + Math.random() * 25)
        node.textContent = String.fromCharCode(charcode)
    }
}
