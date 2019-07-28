/ TODO: add Akin link http://spacecraft.ssl.umd.edu/akins_laws.html
// TODO: add better transitioning

var quotes = [

  {
    "quote": "No es difícil encontrar el paraíso en la oscuridad.",
    "author": "",
    "note": ""
  },
  {
    "quote": "La curva más hermosa de una mujer es su sonrisa.",
    "author": "",
    "note": ""
  },
  {
    "quote": "Eres el resultado de tus errores, pero también de tus aciertos.",
    "author": "",
    "note": ""
  },
  {
    "quote": "Si no estás dispuesta a intentarlo, antes de enamorarme prefiero dejarlo.",
    "author": "",
    "note": ""
  },
  {
    "quote": "¿Dónde está el amor en este planeta?",
    "author": "",
    "note": ""
  },
  {
    "quote": "Deja de mirar el suelo si lo que quieres es tocar el cielo.",
    "author": "",
    "note": ""
  },
  {
    "quote": "Deja de mirar el suelo si lo que quieres es tocar el cielo.",
    "author": "",
    "note": ""
  },
  {
    "quote": "No intentes enamorarme, con eso sólo conseguirás distanciarme.",
    "author": "",
    "note": ""
  },	
  {
    "quote": "Todos los días sale el sol, chipirón.",
    "author": "",
    "note": ""
  },
  {
    "quote": "De la misma condición no es un pueblo ni un señor, ellos tienen el clero y nosotros nuestro sudor.",
    "author": "",
    "note": ""
  },
  {
    "quote": "La vida es como un juego en el que hay que apostar si quieres ganar.",
    "author": "",
    "note": ""
  },
  {
    "quote": "No te dirán que en la vida te moverás como una bala disparada al azar.",
    "author": "",
    "note": ""
  },
  {
    "quote": "No voy a cambiar la forma en la que miro en la que siento para conformarme a algo. Siempre he sido raro, por lo que seré raro el resto de mi vida y tengo que vivir por ello. Soy una de esas personas.",
    "author": "",
    "note": ""
  },
  {
    "quote": "Si la vida te pasa factura, aprovecha cada gota de felicidad.",
    "author": "",
    "note": ""
  },
  {
    "quote": "Siete mil millones de personas enfrentándose entre sí...",
    "author": "",
    "note": ""
  },
  {
    "quote": "Hay quien hace de todo menos disfrutar del momento.",
    "author": "",
    "note": ""
  },
  {
    "quote": "Me lanza una sonrisa cuando la euforia le engaña.",
    "author": "",
    "note": ""
  },
  {
    "quote": "No hay ni una sola historia de amor real que tenga un final feliz. Si es amor, no tendrá final. Y si lo tiene, no será feliz.",
    "author": "",
    "note": ""
  },

  {
    "quote": "Prometo ver la alegría y escarmentar de la experiencia, pero nunca, nunca más usar la violencia.",
    "author": "",
    "note": ""
  },
  {
    "quote": "Hay que cambiar las espadas por rosas.",
    "author": "",
    "note": ""
  },
  {
    "quote": "Libre, como el sol cuando amanece yo soy libre, como el mar.",
    "author": "",
    "note": ""
  },
/*  {
    "quote": "\"Better\" is the enemy of \"good\".",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #14"
  },*/
  {
    "quote": "Tan grande que es el universo y a tu alma le queda grande.",
    "author": "",
    "note": ""
  },

];

var quoteMachine = document.getElementById('quote-machine');
var quote = document.getElementById('quote-text');
var author = document.getElementById('quote-author');
//var note = document.getElementById('quote-note');
var theButton = document.getElementById('the-button');
var twit = document.getElementById('twit');
var mesen = document.getElementById('mesen');
var was = document.getElementById('was');
var tweetLength = 100;

function randomQuote() {
  // super not working
  quoteMachine.classList.remove('that-opacity');
  
  // get random number for quote object in quotes var
  var randomNum = Math.floor(Math.random() * quotes.length);
  
  // random quote
  var quoteText = quotes[randomNum]['quote'];
  
  // empty variable
  var trimmedQuote;
  
  // measure quote length and trim if necessary
  if (quoteText.length >= 116) {
    trimmedQuote = quoteText.substring(0, tweetLength) + '...';
  } else {
    trimmedQuote = quoteText;
  }
  
  
  // build href for tweeting
  var href1 = 'https://\ttwitter.com/intent/tweet?text=' + '"' + trimmedQuote +  '"';
	
  var href3 = 'external://\twhatsapp://send?text=' + '"' + trimmedQuote +  '"';
	
  var href2 = 'external://\tfb-messenger://share/?link=' + '"' + trimmedQuote +  '"';

  // output awesome quote elements individually
  quote.innerHTML = quoteText;
 // author.innerHTML = quotes[randomNum]['author'];
 // note.innerHTML = quotes[randomNum]['note'];
  twit.href = href1;
  was.href = href2;
  mesen.href = href3;
  
  // super not working
  quoteMachine.classList.add('that-opacity');
};
// run the machine on load
window.addEventListener('load', function() {
  randomQuote();
}, false);

// run the machine on button click
theButton.addEventListener('click', function() {
  randomQuote();
}, false);




// setTimeout(function() {
//   quoteMachine.style.opacity = 0;
// }, 3000);



