//Obtener el valor de la carta
  /**
   * 
   * @param {String} carta 
   * @returns {Number} valor de la carta
   */
  
  //pedirCarta();

  export const valorCarta = (carta) =>{
    const valor = carta.substring(0, carta.length - 1);
    //console.log({ valor });
    //let puntos = 0;
    //if ( isNaN( valor ) ){
        //console.log('No es un numero')
    //}
    //else{
        //console.log('Es un numero')
    //}
    return ( isNaN( valor ) ) ?
            ( valor === 'A') ? 11 : 10 
            : valor * 1;

        //console.log('No es un numero');
        

    //else {
        //console.log('Es un numero')
        //puntos es un string y lo multiplico por 1
    
    //console.log(puntos);

}