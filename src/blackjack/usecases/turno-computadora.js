import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
import { crearCartaHTML } from "./crearCarta.html";
  /**
   * 
   * 
   * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
   * @param {Array<String>} deck 
   */
  //Turno de la computadora
  export const turnoComputadora = ( puntosMinimos, puntosHTML , divCartasComputadora,deck) => {
     
    console.log(`Hola ${puntosMinimos}`);
    //console.log(deck);
    if ( !puntosMinimos ) throw new Error('Puntos minimos son necesarios');
    
    //console.log(puntosJugadores);

    let puntosComputadora = 0;
    
    do{

        

        const carta = pedirCarta( deck );
        //puntosComputadora = puntosComputadora + valorCarta ( carta );
        
        const imgCarta = crearCartaHTML( carta );


        puntosComputadora = puntosComputadora + valorCarta(carta);
        console.log(`Estos son los puntos de la Jugadores ${puntosMinimos}`);
        console.log(`Estos son los puntos de la computadora ${puntosComputadora}`);
        puntosHTML.innerText = puntosComputadora;
        
        //crearCarta(carta, puntosJugadores.length - 1);
        
        divCartasComputadora.append( imgCarta );
        
        if( puntosMinimos > 21 ){
            break;
        }

    }while( ( puntosComputadora < puntosMinimos) && (puntosMinimos <= 21 ) );
    
    //console.log( puntosComputadora );
    setTimeout(() => {
      if( puntosComputadora === puntosMinimos ) {
          alert('Nadie gana');
      }  else if ( puntosMinimos > 21) {
          alert('Computadora Gano');
      } else if( puntosComputadora > 21) {
          alert('Jugador Gano');
      } else {
          alert('Computadora Gana')
      }
  }, 100 );

}