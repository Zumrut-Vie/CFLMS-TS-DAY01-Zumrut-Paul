for (let i = 1; i <= 10; i++) {
    for (let ii = 1; ii <= 10; ii++) {
        console.log(`${i} X ${ii} = ${i*ii}`)
    }
}

setTimeout(() => {
for (let i = 1; i <= 10; i++) {
    document.write("Test Test<br>")
}
}, 5000);



var names : Array<string>=['Zumrut','Pauli','Test'];

for (let index in names) {
    console.log(index)
}

for (let name of names) {
    console.log(index + name)
}

for (i = 0; i < names.length; i++) {
    console.log("index:   "+ i + " " + names[i]); 
}
