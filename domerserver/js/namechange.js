var text = ["f","fr","fra","fran","franc","francy","francyz","francyzn","francyzne","francyzneu","francyzneur","francyzneur.github.io","francyzneur","francyzneu","francyzneu","francyzne","francyzn","francyz","francy","franc","fran","fra","fr","f"];
var counter = 0;
var inst = setInterval(change, 350);

function change() {
document.title = text[counter];
counter++;
if (counter >= text.length) {
counter = 0;
}
}