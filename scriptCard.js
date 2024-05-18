// Mantenha uma lista de todos os cartões criados inicialmente
let allCards = [];

function createCards(data) {
    const cardsContainer = document.getElementById('container');
    // const classes = ['box-verde', 'box-vermelho', 'box-amarelo'];
    let icon = '';
    data.forEach(function (item, index) {
        var card = document.createElement('div');
        card.classList.add('box');
        switch (item.tipo) {
            case 'saúde':
                card.classList.add('box-verde');
                icon = 'saude2'
                break;
            case 'assistência financeira':
                card.classList.add('box-azul');
                icon = 'money'
                break;
            case 'segunda via':
                card.classList.add('box-cinza');
                icon = 'doc'
                break;
            case 'reformas':
                card.classList.add('box-amarelo');
                icon = 'ref'
                break;
            case 'seguros':
                card.classList.add('box-vermelho');
                icon = 'seguro'
                break;
        }

        card.innerHTML += `
        <div class="square">
        <img src="./imagens/${icon}.png">
        </div>

        <h3>${item.titulo}</h3>
        <p>${item.descricao}</p>
        <a class="ver-mais" target="_blank" href="${item.link}">Saiba mais</a>
    `;

        cardsContainer.appendChild(card);

        // var square = document.createElement('div');
        // square.classList.add('square');
        // card.appendChild(square);

        // var content = document.createElement('div');
        // content.classList.add('card-content'); // Adicione uma classe para estilização
        // card.appendChild(content);

        // var title = document.createElement('h3');
        // title.textContent = item.titulo;
        // content.appendChild(title);

        // var description = document.createElement('p');
        // description.textContent = item.descricao;
        // content.appendChild(description);

        // var link = document.createElement('a');
        // link.classList.add('ver-mais');
        // link.textContent = 'Saiba mais';
        // link.href = item.link;
        // link.target = '_blank';
        // content.appendChild(link);

        // allCards.push(card); // Adicione o cartão à lista
        // cardsContainer.appendChild(card);
    });
}

function createCardsType(tipo) {
    const cardsContainer = document.getElementById('container');
    // const classes = ['box-verde', 'box-vermelho', 'box-amarelo'];

    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            cardsContainer.innerHTML = ''; // Limpa apenas os cartões, mantendo os quadrados
            let icon = ''
            data.forEach(function (item) {
                if (item.tipo && item.tipo.toLowerCase() === tipo.toLowerCase()) {
                    const card = document.createElement('div');
                    card.classList.add('box');
                    switch (item.tipo) {
                        case 'saúde':
                            card.classList.add('box-verde');
                            icon = 'saude2'
                            break;
                        case 'assistência financeira':
                            card.classList.add('box-azul');
                            icon = 'money'
                            break;
                        case 'segunda via':
                            card.classList.add('box-cinza');
                            icon = 'doc'
                            break;
                        case 'reformas':
                            card.classList.add('box-amarelo');
                            icon = 'ref'
                            break;
                        case 'seguros':
                            card.classList.add('box-vermelho');
                            icon = 'seguro'
                            break;
                    }
                    // var square = document.createElement('div');
                    // square.classList.add('square');

                    // var icon = document.createElement('i');
                    // icon.classList.add('fa-solid', 'fa-user-nurse');

                    // square.appendChild(icon);
                    // card.appendChild(square);

                    card.innerHTML += `
                        <div class="square">
                        <img src="./imagens/${icon}.png">
                        </div>

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
const jsonFilePath = 'dados.json';

function createAll() {
    const cardsContainer = document.getElementById('container');
    cardsContainer.innerHTML = ''; // Limpa o container antes de adicionar novos cartões
    allCards.forEach(card => cardsContainer.appendChild(card)); // Exibe os cartões da lista
}

// Chamada da função para buscar o arquivo JSON e criar os cartões inicialmente
fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => createCards(data));
