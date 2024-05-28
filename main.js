const moments = [
  {
    moment: 'Law VS Kurohige',
    anime: 'One Piece',
    characters: [
      {
        first: 'Trafalgar D. Water Law',
        second: 'Kurohige Marshall D. Teach',
      },
    ],
    episodes: 2,
    duration: 48,
    description:
      'Law se enfrenta a Kurohige después de salir del país de Wano y de terminar su alianza con los Sombrero de Paja.',
    image: 'assets/Lawcard.jpg',
    links: [
      {
        first:
          'https://www.crunchyroll.com/es-es/watch/GPWUKVW2E/bonneys-lamentation-darkness-lurking-on-the-future-island',
        second: 'https://www.crunchyroll.com/es-es/watch/G8WUN19Q8/the-winner-takes-all-law-vs-blackbeard',
      },
    ],
  },
  {
    moment: 'Law VS Kurohige',
    anime: 'One Piece',
    characters: [
      {
        first: 'Trafalgar D. Water Law',
        second: 'Kurohige Marshall D. Teach',
      },
    ],
    episodes: 2,
    duration: 48,
    description:
      'Law se enfrenta a Kurohige después de salir del país de Wano y de terminar su alianza con los Sombrero de Paja.',
    image: 'assets/Lawcard.jpg',
    links: [
      {
        first:
          'https://www.crunchyroll.com/es-es/watch/GPWUKVW2E/bonneys-lamentation-darkness-lurking-on-the-future-island',
        second: 'https://www.crunchyroll.com/es-es/watch/G8WUN19Q8/the-winner-takes-all-law-vs-blackbeard',
      },
    ],
  },
];

for (const moment of moments) {
  //Me traigo los datos y creo contenedores
  let momentName = document.createTextNode(moment.moment);
  let anime = document.createTextNode(moment.anime);
  let card = document.createElement('article');
  let background = document.createElement('img');
  background.src = moment.image;
  let cardsDiv = document.querySelector('div.cards');
  let cardH3 = document.createElement('h3');
  let cardH4 = document.createElement('h4');
  card.classList.add('moment');
  //Pinto los datos
  cardsDiv.appendChild(card);
  card.appendChild(background);
  cardH3.appendChild(momentName);
  cardH4.appendChild(anime);
  card.appendChild(cardH3);
  card.appendChild(cardH4);
}
