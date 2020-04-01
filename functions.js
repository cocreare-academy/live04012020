function sendForm() {
    var form = document.forms["formulario-exemplo"];
    var msgBox = document.querySelector('.mensagem');
    msgBox.classList.remove('error')
    msgBox.innerHTML = "";

    if (form["nome"].value == "") {
        msgBox.innerHTML = "Preencha seu nome no formulário.";
        msgBox.classList.add('error')
    }
    
    if (form["email"].value == "" || !validateEmail(form["email"].value)) {
        msgBox.innerHTML += "\nPreencha seu email corretamente no formulário.";
        msgBox.classList.add('error')
    }
    
    console.log('Formulario correto')
    return false;
}

function validateEmail(email) {
    console.log(email)
    var re = /\w+@\w+\.\w+/;
    return re.test(email.toLowerCase());
}


function validatePhone(phone) {
    console.log(phone)
    var re = /\w/;
    return !re.test(email.toLowerCase());
}

function mascaraTelefone(e) {
    console.log(document.querySelector('#phone').value.slice(0, -1))
    console.log(document.querySelector('#phone').value)
    
    var re = /[abcdefghijklmnopqrstuvwxyz]/;
    console.log(re.test(e.key));

    var phone = document.querySelector('#phone')
    if (re.test(e.key)) {
        phone.value = phone.value.substr(0, phone.value.length - 1);
    }

    if (phone.value.length > 5 && !(/\-/).test(phone.value)) {
        let part1 = phone.value.slice(0, 5);
        let part2 = phone.value.slice(5,9);
        phone.value = part1 + '-' + part2;
    }
    

}