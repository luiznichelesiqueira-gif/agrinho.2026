// ===== FUNCIONALIDADES DE ACESSIBILIDADE =====

// 1. Alternar menu de acessibilidade
const btnAcessibilidade = document.getElementById('btnAcessibilidade');
const menuAcessibilidade = document.getElementById('menuAcessibilidade');

btnAcessibilidade.addEventListener('click', () => {
    if (menuAcessibilidade.style.display === 'flex') {
        menuAcessibilidade.style.display = 'none';
    } else {
        menuAcessibilidade.style.display = 'flex';
    }
});

// 2. Aumentar fonte
const aumentarFonte = document.getElementById('aumentarFonte');
aumentarFonte.addEventListener('click', () => {
    document.body.classList.remove('fonte-pequena', 'fonte-normal');
    document.body.classList.add('fonte-grande');
});

// 3. Diminuir fonte
const diminuirFonte = document.getElementById('diminuirFonte');
diminuirFonte.addEventListener('click', () => {
    document.body.classList.remove('fonte-grande', 'fonte-normal');
    document.body.classList.add('fonte-pequena');
});

// Opcional: reset de fonte (pode ser melhorado, mas para iniciante, vamos deixar um tamanho padrão se clicar duas vezes? 
// Vou adicionar um clique duplo no botão de fonte normal? Melhor: ao clicar no alto contraste, mantém fonte.
// Vou adicionar uma melhoria: se clicar em aumentar e já estiver grande, fica normal?
// Simples: ao clicar em diminuir, se estiver pequena, mantém. Mas iniciante: ok assim.

// 4. Alto Contraste
const altoContrasteBtn = document.getElementById('altoContraste');
altoContrasteBtn.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
});

// ===== FUNCIONALIDADE PRINCIPAL: CALCULADORA DE GASTO DE ÁGUA =====
const culturaSelect = document.getElementById('cultura');
const quantidadeInput = document.getElementById('quantidade');
const calcularBtn = document.getElementById('calcularBtn');
const resultadoDiv = document.getElementById('resultadoCalc');

calcularBtn.addEventListener('click', () => {
    // Obtém o valor do consumo por kg da opção selecionada
    const consumoPorKg = parseFloat(culturaSelect.value);
    const quantidadeKg = parseFloat(quantidadeInput.value);
    
    // Validação
    if (isNaN(quantidadeKg) || quantidadeKg <= 0) {
        resultadoDiv.innerHTML = '⚠️ Por favor, insira uma quantidade válida (maior que zero).';
        resultadoDiv.style.backgroundColor = "#ffebee";
        return;
    }
    
    // Cálculo do consumo total
    const consumoTotalLitros = consumoPorKg * quantidadeKg;
    
    // Exibe resultado
    resultadoDiv.innerHTML = `
        💧 <strong>Consumo estimado:</strong> ${consumoTotalLitros.toLocaleString('pt-BR')} litros de água<br>
        🚜 Para produzir ${quantidadeKg.toLocaleString('pt-BR')} kg da cultura selecionada.
    `;
    resultadoDiv.style.backgroundColor = "#e8f5e9";
});

// ===== FUNCIONALIDADE EXTRA: DICAS SUSTENTÁVEIS =====
const dicas = [
    "Utilize irrigação por gotejamento: economia de até 60% de água!",
    "Capture água da chuva para usar na irrigação.",
    "Planeje o plantio conforme a estação chuvosa da sua região.",
    "Mantenha o solo coberto com palha para reduzir evaporação.",
    "Reutilize a água da lavagem de equipamentos.",
    "Invista em sensores de umidade do solo."
];

function atualizarDica() {
    const dicaElement = document.getElementById('dicaSustentavel');
    if (dicaElement) {
        const indiceAleatorio = Math.floor(Math.random() * dicas.length);
        dicaElement.textContent = dicas[indiceAleatorio];
    }
}

// Troca a dica a cada 15 segundos
setInterval(atualizarDica, 15000);
// Mostra uma dica ao carregar a página
atualizarDica();

// ===== AJUSTES INICIAIS =====
// Garantir que ao carregar, o menu de acessibilidade fique fechado
menuAcessibilidade.style.display = 'none';
// Definir fonte padrão como tamanho normal
document.body.classList.add('fonte-normal');

// Mensagem no console para indicar que o JS carregou
console.log("Site Agrofort carregado com sucesso!");
