// --- PARTE 1: PEGAR OS ELEMENTOS DO HTML ---
// Guardamos as duas seções (divs) em variáveis para poder manipulá-las.
// Esta parte não precisa ser alterada.
var paginaCultos = document.getElementById('pagina-cultos');
var paginaEnsaios = document.getElementById('pagina-ensaios');


// --- PARTE 2: FUNÇÕES PARA MOSTRAR E ESCONDER AS PÁGINAS ---
// Estas funções são chamadas pelos botões no HTML.
// Esta parte também não precisa ser alterada.

// Função que mostra a página de CULTOS
function mostrarCultos() {
    // Tira a classe 'hidden' da página de cultos, fazendo ela APARECER.
    paginaCultos.classList.remove('hidden');
    // Adiciona a classe 'hidden' na página de ensaios, fazendo ela SUMIR.
    paginaEnsaios.classList.add('hidden');
}

// Função que mostra a página de ENSAIOS
function mostrarEnsaios() {
    // Esconde a página de cultos.
    paginaCultos.classList.add('hidden');
    // Mostra a página de ensaios.
    paginaEnsaios.classList.remove('hidden');
}


// --- PARTE 3: A FUNÇÃO DE BUSCA INTELIGENTE E REUTILIZÁVEL ---
// Esta é a função que faz a mágica da pesquisa.

/**
 * Configura a lógica de filtro para um campo de busca e uma lista.
 * @param {string} idInput - O ID do campo <input> de busca.
 * @param {string} idLista - O ID da lista <ul> que será filtrada.
 */
function configurarBusca(idInput, idLista) {
    // 1. Pega os elementos do HTML com base nos IDs recebidos.
    var input = document.getElementById(idInput);
    var listaItens = document.getElementById(idLista).getElementsByTagName('li');

    // 2. Fica "escutando" o que o usuário digita no campo de busca.
    // O código dentro desta função vai rodar toda vez que uma tecla for pressionada.
    input.addEventListener('input', function() {
        
        // Pega o que o usuário digitou e converte para letras minúsculas.
        var termoBuscado = input.value.toLowerCase();
        
        // =====================================================================
        // AQUI COMEÇA A NOVA LÓGICA DE BUSCA POR PALAVRAS
        // =====================================================================

        // A. Quebramos o que o usuário digitou em palavras separadas.
        // Exemplo: se a busca for "central terça", isso vira uma lista ["central", "terça"].
        var palavrasBuscadas = termoBuscado.split(' ');

        // B. Agora, vamos verificar cada item da lista (cada <li>) um por um.
        for (var item of listaItens) {
            
            // Pega o texto do item da lista e converte para minúsculas também.
            var textoItem = item.textContent.toLowerCase();
            
            // C. Criamos uma variável de controle, um "checklist".
            // Começamos assumindo que o item da lista é um resultado válido.
            var ehUmResultadoValido = true; 
            
            // D. Verificamos CADA PALAVRA da busca contra o texto do item da lista.
            for (var palavra of palavrasBuscadas) {
                // Se o texto do item NÃO INCLUIR uma das palavras da busca...
                if (!textoItem.includes(palavra)) {
                    // ...nós "reprovamos" o item, marcando-o como inválido.
                    ehUmResultadoValido = false; 
                    // Como ele já falhou, não precisamos verificar as outras palavras. Paramos aqui.
                    break; 
                }
            }
            
            // E. No final da verificação, tomamos a decisão de mostrar ou esconder o item.
            if (ehUmResultadoValido) {
                // Se o item passou em todos os testes (continuou 'true'), ele APARECE.
                item.classList.remove('hidden');
            } else {
                // Se ele falhou em algum teste (virou 'false'), ele SOME.
                item.classList.add('hidden');
            }
        }
        // =====================================================================
        // FIM DA NOVA LÓGICA
        // =====================================================================
    });
}


// --- PARTE 4: ATIVANDO AS BUSCAS ---
// Aqui nós "ligamos" a função de busca para cada par de input/lista.
// Esta parte não precisa ser alterada.

// Conecta a barra 'busca-cultos' com a lista 'lista-cultos'.
configurarBusca('busca-cultos', 'lista-cultos');

// Conecta a barra 'busca-ensaios' com a lista 'lista-ensaios'.
configurarBusca('busca-ensaios', 'lista-ensaios');