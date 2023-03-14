
window.addEventListener('DOMContentLoaded', () => {
//Star Rating


const star = document.querySelectorAll('.misc__star');
const rating = document.querySelector('.misc__rate');
star.forEach(item => {
    item.addEventListener('click', () => rating.textContent = `${item.value}.0`);
});         
          
});         
          




