document.getElementById('lvl1').innerHTML = `A heading stating "Rules for naming JS variables"`
let massage = `Variable names can only contain number, $, and _. For example: $my_1stVariable.<br>
Variables must begin with a letter, $ or _. For example: $name, _name or nameg.<br>
Variable names are case sensitive.<br>
Variable names should not be JS keywords.<br>`
document.getElementById('mainContent').innerHTML = massage