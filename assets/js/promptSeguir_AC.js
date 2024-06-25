
function confirmarSeguir() {
    var confirmacao = confirm("Tem certeza de que deseja prosseguir? Os dados não poderão ser mais alterados.");

    if (!confirmacao) {
        event.preventDefault(); // Impede o comportamento padrão do link
    }
}