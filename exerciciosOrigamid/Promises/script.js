// const promessa = new Promise(function(resolve, reject){
//     let condicao = true;
//     if(condicao){
//         setTimeout(() => {
//             resolve({nome: 'Diego Aquino', idade: 28});
//         }, 1000)
        
//     }
//     else{
//         reject(Error('Ocorreu um erro hahah'));
//     }
    
// });

// promessa.then((resolucao) => {
//     console.log(resolucao);
// })

const tp = new Promise((resolve) =>{
    console.log('5');
});

tp.then((x) =>{
    console.log('4');
    return 1;
}).then((x) =>{
    console.log('3');
    return 2;
}).then((x) =>{
    console.log('2');
    return 3;
}).then((x) =>{
    console.log('1');
    return 4;
});