/*setTimeout(function(){
    console.log('Execultando callback');
    
    setTimeout(function() {
        console.log('Execultando callback');
        
        setTimeout(function() {
            console.log('Execultando callback');
        }, 2000)   
    }, 2000)
},2000);*/

function esperarPor(tempo = 2000){
    return new Promise(function(resolve) {
        setTimeout(function(){
            console.log('Executado promise...');
            resolve('Vish');
        },tempo)
    })
}
esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor)