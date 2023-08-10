let compara = function (param){
    console.log(this ===  param);
}

compara(global);

const obj = {};
compara = (compara.bind(obj));
compara(global);

let comparaArrow = param => console.log(this === param);
comparaArrow(global);
comparaArrow(module.exports);


comparaArrow = comparaArrow.bind(obj);
comparaArrow(obj);
comparaArrow(module.exports);