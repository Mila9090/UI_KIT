window.addEventListener('DOMContentLoaded', () => {

    // Dropdown with JQuery library on second page

    function select(item){
        $(item).select2(
            {
                minimumResultsForSearch: Infinity,
                dropdownCssClass: 'form__drop',
                selectionCssClass: ':all:',
                placeholder: "Dropdown",
            }
        );
    };
    select('.form__select1');
    select('.form__select2');
    select('.form__select3');
    
    //Range
    
    $(".form__range").slider({
        range: "min",
        min: 0,
        max: 100,
        value: 60
    });
    
    $(".disable").slider({
        value: 20,
        disabled: true
    });


    //Counter

    const minus = document.querySelectorAll('.form__minus');
    const plus = document.querySelectorAll('.form__plus');
    const value = document.querySelector('.form__value');
    let count = +value.textContent;
    const counter = (n) => {
        count += n;
        if(count < 10 && count > 0){
            return value.textContent = '0' + count;
        } else{
            return value.textContent = count;
        }
    }
    
    plus.forEach((item, i) => {
        item.addEventListener('click', function(){
            counter(1);
            if (value.textContent > 99){
                item.setAttribute("disabled", "disabled");
            }
            if (minus[i].hasAttribute("disabled")) {
                minus[i].removeAttribute("disabled");
            }
        });
    });

    minus.forEach((item, i) => {
        item.addEventListener('click', function(){
            counter(-1);
            if (value.textContent == 0){
                item.setAttribute("disabled", "disabled");
            }
            if (plus[i].hasAttribute("disabled")) {
                plus[i].removeAttribute("disabled");
            }
        });
    });
});