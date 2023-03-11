import _ from 'underscore';
import { crearNuevoDeck, pedirCarta, obtenerValorCarta, turnoComputadora, crearCartaHTML } from './usecases'


const miModulo = (() => {
  //'use strict'
  let deck          = [];
  const tipos       = ['C','D','H','S'],
        especiales  = ['A','J','Q','k'];

  let puntosJugador = 0;
    //puntosMinimos = 0;
  
  let puntosJugadores = [];

  //REferencias del HtML
  const btnPedir             = document.querySelector('#btnPedir'),
        btnDetener           = document.querySelector('#btnDetener'),
        btnNuevoJuego        = document.querySelector('#btnNuevo');

  const divCartasJugador       = document.querySelector('#jugador-cartas'),
        divCartasComputadora   = document.querySelector('#computadora-cartas'),
        puntosHTML             = document.querySelectorAll('small');


//Cra un nuevo deck
deck = crearNuevoDeck(tipos, especiales);
  //console.log(deck);
btnPedir.addEventListener('click', () => {
      
    const carta = pedirCarta(deck);
    
    //const puntosMinimos = acumularPuntos(carta , 0);
    
    puntosJugador = puntosJugador + obtenerValorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    //console.log(puntosJugador);
    //crearCarta(carta, 0);
    //  const imgCarta = document.createElement('img');
    //  imgCarta.src= `assets/cartas/${ carta }.png`;
    //  imgCarta.classList.add('carta');
    const imgCarta = crearCartaHTML( carta );
     divCartasJugador.append(imgCarta);
    
    if( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, te pasaste')
        btnPedir.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1],divCartasComputadora,deck );
    } else  if ( puntosJugador=== 21 ) {
        console.warn('21, genial ganaste Rey')
        btnPedir.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1],divCartasComputadora,deck  );
    }

   // return puntosMinimos;
});








  //Esta Funcion me permite tomar una carta
const carta = pedirCarta(deck);

//Obtiene el valor de la carta
const valor = obtenerValorCarta(carta);


//const turnoComputadora = turnoComputadora(puntosJugadores, deck);


  
  //crearDeak(); Inicializa el juego
// const inicializarJuego = ( numJugadores = 2) => {
//       //deck = crearDeak();
//       puntosJugadores = [];
//       for( let i = 0; i< numJugadores; i ++){
//           puntosJugadores.push(0);
//          // punstosJugadores [0] como que lo inicializa en 0
      
//       }
//       puntosHTML[0].innerText = 0;
//       puntosHTML[1].innerText = 0;
//       puntosHTML.forEach( elem => elem.innerText = 0 );
//       divCartasJugadores.forEach ( elem => elem.innerHTML = '');
//       btnPedir.disabled = false;
//       btnDetener.disabled = false;
//       console.log({ puntosJugadores });
//       return puntosHTML;
//   }

  btnDetener.addEventListener('click', () =>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugador, puntosHTML[1] , divCartasComputadora,deck );
 
 });



  





  //Turno: 0 = primer jugador y el ultimo sera la computadora
  const acumularPuntos = ( carta, turno) => {
      //puntosJugadores es la cantidad de jugadores y el turno es el parametro qie le pasa
      puntosJugadores[turno] = puntosJugadores[turno] + obtenerValorCarta ( carta );
      puntosHTML[turno].innerText = puntosJugadores[turno];
      return puntosJugadores[turno];
      console.log(puntosJugadores[0]);
      //console.log(puntosMinimos);

  }

  // const crearCarta = (carta , turno) => {
  //      const imgCarta = document.createElement('img');
  //      imgCarta.src= `assets/cartas/${ carta }.png`;
  //      imgCarta.classList.add('carta');
  //      divCartasJugadores[turno].append( imgCarta );
  // }

  const determinarGanador = () => {
      const [ puntosMinimos, puntosComputadora ] = puntosJugadores;
     

    

  }





      determinarGanador();

      


          // let nombre = prompt('¿Cuál es tu nombre?');
          // console.log( nombre );
          // console.log( '****' + nombre + '****' ); // ''

          // const seleccion = confirm('¿Está seguro de borrar esto?');
          // console.log( seleccion );
  

  //const valor = valorCarta( pedirCarta() );
  //console.log({ valor });

  //Eventos

 







   btnNuevoJuego.addEventListener('click', () => {

     //console.clear();
       inicializarJuego();
//       //crearDeak();
//       // btnPedir.disabled = false;
//       // btnDetener.disabled = false;
     
//       // divCartasComputadora.innerHTML = '';
//       // divCartasJugador.innerHTML = '';


  });

//   return {

//       nuevoJuego : inicializarJuego
//   };

})();

//ES lo mismo que arriba Funciones anonimas autoinvocadas.....
//(function() {
//
//})();








