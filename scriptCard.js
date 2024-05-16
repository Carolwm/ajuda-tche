function createCards(data) {
    const cardsContainer = document.getElementById('container');
    const classes = ['box-verde', 'box-vermelho', 'box-amarelo'];
    data.forEach(function (item, index) {
        var card = document.createElement('div');
        card.classList.add('box', classes[index % 3]);


        card.innerHTML = `
            <h3>${item.titulo}</h3>
            <p>${item.descricao}</p>
            <a class="ver-mais" target="_blank" href="${item.link}">Saiba mais</a>
        `;

        cardsContainer.appendChild(card);
    });
}

function createCardsType(tipo) {
    const cardsContainer = document.getElementById('container');
    cardsContainer.innerHTML = ''; // Limpa o container antes de adicionar novos cartões
    console.log(tipo)
    const classes = ['box-verde', 'box-vermelho', 'box-amarelo'];
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            let i = 1
            data.forEach(function (item, index) {
                // Verifica se o item tem o tipo especificado
                if (item.tipo && item.tipo.toLowerCase() === tipo.toLowerCase()) {
                    const card = document.createElement('div');
                    card.classList.add('box', classes[i % 3]);
                    i++;
                    card.innerHTML = `
                    <h3>${item.titulo}</h3>
                    <p>${item.descricao}</p>
                    <a class="ver-mais" target="_blank" href="${item.link}">Saiba mais</a>
                `;

                    cardsContainer.appendChild(card);
                }
            });
        });
}

// Caminho do arquivo JSON
var jsonFilePath = 'dados.json';
const cards = []
// Chamada da função para buscar o arquivo JSON e criar os cartões
fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => createCards(data));