export default function initDropDownMenu(){
    const dropdownMenus = document.querySelectorAll('[data-drodown]');

dropdownMenus.forEach(menu =>{
    ['touchstart', 'click'].forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick);
    })
    
});

function handleClick(event){
    event.preventDefault();
    this.classList.add('active')

}
}

