function proibidoSeguir() {
    var confirmacao = confirm("Realize as etapas anteriores, seguindo a sequência recomendada!");

    if (!confirmacao) {
        event.preventDefault(); // Impede o comportamento padrão do link
    }
}