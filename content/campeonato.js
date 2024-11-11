// Função para mostrar ou ocultar informações detalhadas ao clicar na linha do campeonato
function toggleDetails(row) {
    const nextRow = row.nextElementSibling;  // A linha de detalhes vem logo após a linha do campeonato

    // Verifica se a linha seguinte é a linha de detalhes
    if (nextRow && nextRow.classList.contains('expanded-info')) {
        // Alterna a visibilidade da linha expandida
        nextRow.style.display = (nextRow.style.display === 'none' || nextRow.style.display === '') ? 'table-row' : 'none';
    }
}
