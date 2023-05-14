////////////LINKS TO SOCIAL MEDIA////////////////////

const githubBtn = document.getElementById('github');

githubBtn.addEventListener('click', function() {
window.open('https://github.com/edeercm', '_blank');
});

githubBtn.addEventListener('touchstart', function() {
window.open('https://github.com/edeercm', '_blank');
});


const linkedinBtn = document.getElementById('linkedin');

linkedinBtn.addEventListener('click', function() {
window.open('https://www.linkedin.com/in/edeercm/', '_blank');
});

linkedinBtn.addEventListener('touchstart', function() {
window.open('https://www.linkedin.com/in/edeercm/', '_blank');
});

////////////////////////////////////////////////////////////////

function noMayus() {

    var texto = document.getElementById("texto").value;
    var contieneMayusculas = /[A-Z]/.test(texto);
    var contieneCaracteresEspeciales = /[^a-zñáéíóúü\d\s]/i.test(texto);
    var contieneAcentos = /[áéíóúü]/i.test(texto);

    if (contieneMayusculas && contieneCaracteresEspeciales && contieneAcentos) {
        ingresa.textContent = "";
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1350,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon: 'error',
            title: 'Formato de texto no compatible.'
        });
        return false;
    } else if (contieneMayusculas && contieneCaracteresEspeciales) {
        ingresa.textContent = "";
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1350,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon: 'error',
            title: 'No se aceptan mayúsculas ni caracteres especiales.'
        });
        return false;
    } else if (contieneMayusculas && contieneAcentos) {
        ingresa.textContent = "";
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1350,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon: 'error',
            title: 'No se aceptan mayúsculas ni acentos.'
        });
        return false;
    } else if (contieneAcentos && contieneCaracteresEspeciales) {
        ingresa.textContent = "";
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1350,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon: 'error',
            title: 'No se aceptan acentos ni caracteres especiales.'
        });
        return false;
    } else if (contieneMayusculas) {
        ingresa.textContent = "";
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1350,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon: 'error',
            title: 'No se aceptan mayúsculas.'
        });
        return false;
    } else if (contieneCaracteresEspeciales) {
        ingresa.textContent = "";
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1350,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon: 'error',
            title: 'No se aceptan caracteres especiales.'
        });
        return false;
    } else if (contieneAcentos) {
        ingresa.textContent = "";
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1350,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon: 'error',
            title: 'No se aceptan acentos.'
        });
        return false;
    } else if (texto.trim() === "") {
        ingresa.textContent = "";
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1350,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon: 'error',
            title: 'Ingresa texto...'
        });
        return false;
    }
    return true;
}

let textoEncriptado = '';

function encriptar() {

    let texto = document.getElementById("texto").value;
    let ingresa = document.getElementById("ingresa");
    // let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat");

    if (!noMayus()) {
        return;
    }
        
    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        ingresa.textContent = "";
        // parrafo.textContent = "";
        muneco.src = "./imagenes/encriptado.png";
        textoEncriptado = textoCifrado;
    } 
    else {
        muneco.src = "./imagenes/muneco.png";
        ingresa.textContent = "";
        // parrafo.textContent = "";
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1350,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon: 'error',
            title: 'Ingresa texto...'
        });
    }
}

function desencriptar() {

    let texto = document.getElementById("texto").value;
    let ingresa = document.getElementById("ingresa");
    // let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    if (!noMayus()) {
        return;
    }
    
    if (texto === textoEncriptado && texto.length !== 0) {
        let textoCifrado = texto
            .replace(/enter/gi,"e")
            .replace(/imes/gi,"i")
            .replace(/ai/gi,"a")
            .replace(/ober/gi,"o")
            .replace(/ufat/gi,"u");

        document.getElementById("texto").value = textoCifrado;
        ingresa.textContent = "";
        // parrafo.textContent = "";
        muneco.src = "./imagenes/desencriptado.png";
    } 
    else if (texto.length !== 0) {
        ingresa.textContent = "";
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1350,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon: 'error',
            title: 'Ingresa texto encriptado...'
        });
    } 
    else {
        muneco.src = "./imagenes/muneco.png";
        ingresa.textContent = "";
        // parrafo.textContent = "";
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1350,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon: 'error',
            title: 'Ingresa texto...'
        });
    }
}

function copiar() {

    const textarea = document.getElementById('texto');

    if (textarea.value.trim() !== '') {
        ingresa.textContent = "";
        // parrafo.textContent="";
        navigator.clipboard.writeText(textarea.value).then(() => { 
            const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 1350,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            });
            Toast.fire({
                icon: 'success',
                title: 'Texto copiado...'
            });
            textarea.value = ''; // Borra el texto del textarea
        }); 
    } 
    else {
        ingresa.textContent = "";
        // parrafo.textContent="";
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1350,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon: 'error',
            title: 'Ingresa texto...'
        });
    }
}


