let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');
let string = '';
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let val = e.target.textContent;
        switch (val){
            case "=":
                input.value = eval(string);
                string = '';
            break;
            case "AC":
                string = '';
                input.value = 0;
            break;
            case "DEL":
                string = string.slice(0, -1);
                input.value = string;
                if (string.length == 0){
                    input.value = 0;
                }
            break;
            default:
                string += val;
                input.value = string;
        }
    });
});   


