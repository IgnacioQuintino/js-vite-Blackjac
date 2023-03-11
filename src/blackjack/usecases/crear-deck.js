  import _ from 'underscore';
  
  /**
   * Esta funcion crea un nuevo deck
   * @param {Array<string>} tiposDeCarta 
   * @param {array} tiposEspeciales 
   * @returns {array} retorna un nuevo arreglo del deck
   */

  //Esta funcion crea una nueva baraja
  export const crearDeak = (tiposDeCarta, tiposEspeciales) => {
    
    if( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error( 'TiposDeCarta es obligatorio' );
    
    
    let deck = [];

    for ( let i =2; i <= 10; i++ ){
        for ( let tipo of tiposDeCarta){
            deck.push( i + tipo );
        }
    }

    for ( let especial of tiposEspeciales){
        for ( let tipo of tiposDeCarta){
            deck.push( especial + tipo );
        }
    }

    deck = _.shuffle( deck )
    //Devuelve el deck mezclado
    return deck;
}