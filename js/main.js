let otherLinks = document.querySelector('.nav li.other-links');
let megaMenu = document.querySelector('.mega-menu');


document.addEventListener("click", function handleClick(event){
    if (event.target.parentNode.closest('.other-links')) {
        megaMenu.classList.toggle('show');
        console.log(event.target);
    }else{
        megaMenu.classList.remove('show');
        }
});
