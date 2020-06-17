for (var i = 1; i <= 10; i++) {
    for (var ii = 1; ii <= 10; ii++) {
        console.log(i + " X " + ii + " = " + i * ii);
    }
}
setTimeout(function () {
    for (var i = 1; i <= 10; i++) {
        document.write("Test Test<br>");
    }
}, 5000);
var names = ['Zumrut', 'Pauli', 'Test'];
for (var index in names) {
    console.log(index);
}
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(index + name_1);
}
for (i = 0; i < names.length; i++) {
    console.log("index:   " + i + " " + names[i]);
}
