import _ from 'underscore';
/**
 * 
 * @param {Array<string>} deck 
 * @returns Retorna una carta
 */

export const pedirCarta = ( deck ) => {
     console.log(deck);
    if( deck.length === 0 ){
        throw 'No hay mas cartas';
    }
    const carta = deck.pop();
    return carta;

}
   