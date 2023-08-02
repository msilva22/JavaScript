function tratar(erro){
   // throw new Error('Ocorreu um erro...');
   //throw 10;
   //throw false;
   throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date
   }
}


function imprimir(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    }catch (e){
        tratar(e);
    } finally{
        console.log('final');
    }
    
}

const obj = { nome: 'Roberto'}
imprimir(obj);