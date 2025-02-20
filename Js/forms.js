document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const cpf = document.getElementById('cpf').value;
    const checkInDate = document.getElementById('check-in-date').value;
    const checkOutDate = document.getElementById('check-out-date').value;

    if (!isValidCPF(cpf)) {
        alert('CPF inválido. Por favor, insira um CPF válido.');
        return;
    }

    if (new Date(checkInDate) >= new Date(checkOutDate)) {
        alert('A data de saída deve ser posterior à data de entrada.');
        return;
    }

    alert('Reserva realizada com sucesso!');
    // Aqui você pode adicionar o código para enviar os dados do formulário
});

function isValidCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]+/g, '');
    
    if (cpf.length !== 11 ||
        /^(\d)\1+$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}