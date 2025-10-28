// --- PARTE 1: PEGAR OS ELEMENTOS DO HTML ---
// O JS precisa saber com quais partes do HTML ele vai trabalhar.
// Vamos "guardar" as duas páginas (divs) em variáveis.

const paginaCultos = document.getElementById('pagina-cultos');
const paginaEnsaios = document.getElementById('pagina-ensaios');


// --- PARTE 2: FUNÇÕES PARA MOSTRAR E ESCONDER AS PÁGINAS ---
// Estas são as funções que os botões (com onclick) vão chamar.

// Função que mostra a página de CULTOS
function mostrarCultos() {
    console.log("Botão 'Cultos' clicado!");
    
    // 1. Mostra a página de cultos (removendo a classe que a esconde)
    paginaCultos.classList.remove('hidden');
    
    // 2. Esconde a página de ensaios (adicionando a classe que a esconde)
    paginaEnsaios.classList.add('hidden');
}

// Função que mostra a página de ENSAIOS
function mostrarEnsaios() {
    console.log("Botão 'Ensaios' clicado!");

    // 1. Esconde a página de cultos
    paginaCultos.classList.add('hidden');
    
    // 2. Mostra a página de ensaios
    paginaEnsaios.classList.remove('hidden');
}


// --- PARTE 3: A LÓGICA DA BARRA DE BUSCA ---

// BUSCA DE CULTOS
const inputBuscaCultos = document.getElementById('busca-cultos');
const listaCultos = document.getElementById('lista-cultos').getElementsByTagName('li');

// Isso diz: "Fique escutando o que acontece no campo de busca de cultos"
inputBuscaCultos.addEventListener('input', function() {
    
    // Pega o que o usuário digitou e converte para minúsculas
    const termoBuscado = inputBuscaCultos.value.toLowerCase();

    // Agora, vamos olhar cada item da lista de cultos, um por um
    for (const item of listaCultos) {
        
        // Pega o texto do item da lista e converte para minúsculas
        const textoItem = item.textContent.toLowerCase();

        // Se o texto do item INCLUI o texto digitado...
        if (textoItem.includes(termoBuscado)) {
            // ...então o item deve aparecer (garantimos que ele não tem a classe 'hidden')
            item.classList.remove('hidden');
        } else {
            // ...senão, o item deve SUMIR (adicionamos a classe 'hidden')
            item.classList.add('hidden');
        }
    }
});


// BUSCA DE ENSAIOS (a lógica é EXATAMENTE a mesma!)
const inputBuscaEnsaios = document.getElementById('busca-ensaios');
const listaEnsaios = document.getElementById('lista-ensaios').getElementsByTagName('li');

inputBuscaEnsaios.addEventListener('input', function() {
    const termoBuscado = inputBuscaEnsaios.value.toLowerCase();

    for (const item of listaEnsaios) {
        const textoItem = item.textContent.toLowerCase();

        if (textoItem.includes(termoBuscado)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    }
});