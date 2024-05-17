// Mantenha uma lista de todos os cartões criados inicialmente
let allCards = [];

function createCards(data) {
    const cardsContainer = document.getElementById('container');
    // const classes = ['box-verde', 'box-vermelho', 'box-amarelo'];

    data.forEach(function (item, index) {
        var card = document.createElement('div');
        card.classList.add('box');
        switch (item.tipo) {
            case 'saúde':
                card.classList.add('box-verde');
                break;
            case 'assistência financeira':
                card.classList.add('box-azul');
                break;
            case 'segunda via':
                card.classList.add('box-cinza');
                break;
            case 'reformas':
                card.classList.add('box-amarelo');
                break;
            case 'seguros':
                card.classList.add('box-vermelho');
                break;
        }

        var square = document.createElement('div');
        square.classList.add('square');
        card.appendChild(square);

        var content = document.createElement('div');
        content.classList.add('card-content'); // Adicione uma classe para estilização
        card.appendChild(content);

        var title = document.createElement('h3');
        title.textContent = item.titulo;
        content.appendChild(title);

        var description = document.createElement('p');
        description.textContent = item.descricao;
        content.appendChild(description);

        var link = document.createElement('a');
        link.classList.add('ver-mais');
        link.textContent = 'Saiba mais';
        link.href = item.link;
        link.target = '_blank';
        content.appendChild(link);

        allCards.push(card); // Adicione o cartão à lista
        cardsContainer.appendChild(card);
    });
}

function createCardsType(tipo) {
    const cardsContainer = document.getElementById('container');
    const classes = ['box-verde', 'box-vermelho', 'box-amarelo'];
    
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            cardsContainer.innerHTML = ''; // Limpa apenas os cartões, mantendo os quadrados
            let i = 0; // Inicialize o contador fora do loop
            data.forEach(function (item) {
                if (item.tipo && item.tipo.toLowerCase() === tipo.toLowerCase()) {
                    const card = document.createElement('div');
                    card.classList.add('box');
                    switch (item.tipo) {
                        case 'saúde':
                            card.classList.add('box-verde');
                            break;
                        case 'assistência financeira':
                            card.classList.add('box-azul');
                            break;
                        case 'segunda via':
                            card.classList.add('box-cinza');
                            break;
                        case 'reformas':
                            card.classList.add('box-amarelo');
                            break;
                        case 'seguros':
                            card.classList.add('box-vermelho');
                            break;
                    }
                    var square = document.createElement('div');
                    square.classList.add('square');
                    card.appendChild(square);
                    card.innerHTML += `
                        <h3>${item.titulo}</h3>
                        <p>${item.descricao}</p>
                        <a class="ver-mais" target="_blank" href="${item.link}">Saiba mais</a>
                    `;
                    cardsContainer.appendChild(card);
                    i++;
                }
            });
        });
}

// Caminho do arquivo JSON
const jsonFilePath = 'dados.json';

function createAll(){
    const cardsContainer = document.getElementById('container');
    cardsContainer.innerHTML = ''; // Limpa o container antes de adicionar novos cartões
    allCards.forEach(card => cardsContainer.appendChild(card)); // Exibe os cartões da lista
}

// Chamada da função para buscar o arquivo JSON e criar os cartões inicialmente
fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => createCards(data));
