function botondeexcusa() {
    let excuse = document.getElementById('excuse');
    excuse.innerHTML = excuseGenerator();
}

let excuseGenerator = () => {
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let numeroramdomquien = (Math.floor(Math.random() * 4));
    let numeroramdonacion = (Math.floor(Math.random() * 4));
    let numeroramdonque = (Math.floor(Math.random() * 3));
    let numeroramdoncuando = (Math.floor(Math.random() * 5));

    return who[numeroramdomquien] + ' ' + action[numeroramdonacion] + ' ' + what[numeroramdonque] + ' ' + when[numeroramdoncuando];
}