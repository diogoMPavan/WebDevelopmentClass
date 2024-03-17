function mascaraCPF(campo) {
    campo.value = campo.value.replace(/\D/g, ''); // Remove tudo o que não é dígito
    campo.value = campo.value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
    campo.value = campo.value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o sexto e o sétimo dígitos
    campo.value = campo.value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen depois do bloco de quatro dígitos
}

function validaCPF() {
    // Recupera o valor do campo CPF
    let cpf = document.getElementById('cpf').value.replace(/[^\d]/g, '');

    // Valida o formato do CPF
    if (cpf.length !== 11) {
        alert('CPF inválido! O CPF deve conter 11 dígitos.');
        return;
    }

    // Verifica se todos os dígitos do CPF são iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
        alert('CPF inválido!')
        return false;
    }

    // Validação do CPF usando algoritmo
    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.substring(9, 10))) {
        alert('CPF inválido!');
        return;
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.substring(10, 11))) {
        alert('CPF inválido!');
        return;
    }

    alert('CPF válido!');
}

function cadastrar() {
    if (document.getElementById("nome1").value == "" || document.getElementById("nome2").value == ""
        || document.getElementById("cpf").value == "" || document.getElementById("email").value == "") {
        alert('Complete o cadastro!')
        return false;
    }
    else {
        alert('Pessoa cadastrada!')
        return true;
    }
}