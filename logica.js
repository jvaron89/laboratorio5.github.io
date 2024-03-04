

let formacion_btn = document.getElementById('formacion_btn');
let formacion = document.getElementById('formacion');
let experiencia_btn = document.getElementById('experiencia_btn');
let experiencia = document.getElementById('experiencia');
let habilidad_btn = document.getElementById('habilidad_btn');
let habilidad = document.getElementById('habilidad');
let certificacion_btn = document.getElementById('certificacion_btn');
let certificacion = document.getElementById('certificacion');
let contacto_btn = document.getElementById('contacto_btn');
let contacto = document.getElementById('contacto');


formacion_btn.addEventListener('click', toggleText);
experiencia_btn.addEventListener('click', toggleText1);
habilidad_btn.addEventListener('click', toggleText2);
certificacion_btn.addEventListener('click', toggleText3);
contacto_btn.addEventListener('click', toggleText4)

function toggleText() {
    formacion.classList.toggle('show');
}

function toggleText1() {
    experiencia.classList.toggle('show1');
}

function toggleText2() {
    habilidad.classList.toggle('show2');
}

function toggleText3() {
    certificacion.classList.toggle('show3');
}

function toggleText4() {
    contacto.classList.toggle('show4');
}