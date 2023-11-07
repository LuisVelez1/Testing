function concatenateStrings(msg, msg2){
    if(typeof msg != 'string' || typeof msg2 != 'string'){
        throw new Error('Ambos argumentos deben ser cadenas de texto');
    }
    return msg + msg2;
}
module.exports={concatenateStrings};