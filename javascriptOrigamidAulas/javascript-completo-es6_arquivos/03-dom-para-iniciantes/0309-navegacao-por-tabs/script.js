const selecao = document.querySelectorAll('.js-tabmenu li');
const conteudo = document.querySelectorAll('.js-tabcontent section');

function funcaoAtiva(index)
{
  conteudo.forEach((secao) => {
    secao.classList.remove('ativo');
    //debugger;
  });
  conteudo[index].classList.add('ativo');
}

selecao.forEach((item, index) => {
  item.addEventListener('click', () => {
    funcaoAtiva(index);
  });
});

// const tabMenu = document.querySelectorAll('.js-tabmenu li');
// const tabContent = document.querySelectorAll('.js-tabcontent section');

// function activeTab(index){
//   tabContent.forEach((section) => {
//     section.classList.remove('ativo');
//   });
//   tabContent[index].classList.add('ativo');
// }

// tabMenu.forEach((itemMenu, index) =>{
//   itemMenu.addEventListener('click', () => {
//     activeTab(index);
//   })
// });

