var display = document.getElementById('display1');
var element = document.getElementsByClassName('btn');
var show = document.getElementById('display');
window.addEventListener('load', function() {
    display.value = '';
});
for (i = 0; i < element.length; i++) {
    element[i].addEventListener('mousedown', function(){
            this.classList.add('click');
        });
        element[i].addEventListener('mouseup', function(){
            this.classList.remove('click');
        });
    }
for (i = 0; i < element.length; i++) {
    element[i].addEventListener('click', function() {
        show.innerHTML = '';
        this.addEventListener('mousedown', function(){
            this.classList.add('click');
        });
        this.addEventListener('mouseup', function(){
            this.classList.remove('click');
        });

        switch (this.value) {
            case '=':
                if (display.value == '') {
                    display.value = '';
                } else {

                    var result = display.value;
                    var res = result.replace(/x/g, '*').replace(/%/g, '/100');
                    show.innerHTML = eval(res);
                    
                }
                break;
            case 'clear':
                display.value = '';
                show.innerHTML = '';
                break;
            case '<':
                var displayVal = display.value;
                display.value = displayVal.slice(0, displayVal.length - 1);

                break;
            default:
                if (display.value == '') {
                    switch (this.value) {
                        case '+':
                        case '-':
                        case '/':
                        case 'x':
                        case '%':
                            display.value = '';
                            return '';
                        default:

                    }
                    
                } else {
                    disp = display.value;
                    var operators = ['+', '-', '/', 'x', '%'];
                    for (i = 0; i < operators.length; i++) {
                        if (disp.endsWith(operators[i])) {
                            switch (this.value) {
                                case '-':
                                case '+':
                                case 'x':
                                case '/':
                                case '%':
                                    var re = display.value;
                                    var displayLength = re.length;
                                    var newDisplay = re.slice(0, displayLength - 1);
                                    display.value = newDisplay;
                                    break;
                                
                            }
                        }

                    }
                    
                }
                val = this.innerHTML;
                display.value += val;

                



        }
    });
    
}