var mycol = document.querySelectorAll('.mycol');
var comcol = document.querySelectorAll('.comcol');

mycol.forEach(m => {
    m.addEventListener('click', () => {
        m.classList.add('red');
        var myRes = m.innerHTML;
        var comPos = Math.floor(Math.random() * 3);
        comcol[comPos].classList.add('red');
        var comRes = comcol[comPos].innerHTML;
        document.querySelector('.result').classList.add('view');

        switch(myRes) {

            case 'камень':
                switch(comRes) {
                    case 'камень':
                        document.querySelector('.result_text').innerHTML = "Ничья";
                        break;
                    case 'ножницы':
                        document.querySelector('.result_text').innerHTML = "Выиграл игрок";
                        break;
                    case 'бумага':
                        document.querySelector('.result_text').innerHTML = "Выиграл компьютер";
                        break;
                };
                break;

            case 'ножницы':
                switch(comRes) {
                    case 'камень':
                        document.querySelector('.result_text').innerHTML = "Выиграл компьютер";
                        break;
                    case 'ножницы':
                        document.querySelector('.result_text').innerHTML = "Ничья";
                        break;
                    case 'бумага':
                        document.querySelector('.result_text').innerHTML = "Выиграл игрок";
                        break;
                };
                break;

            case 'бумага':
                switch(comRes) {
                    case 'камень':
                        document.querySelector('.result_text').innerHTML = "Выиграл игрок";
                        break;
                    case 'ножницы':
                        document.querySelector('.result_text').innerHTML = "Выиграл компьютер";
                        break;
                    case 'бумага':
                        document.querySelector('.result_text').innerHTML = "Ничья";
                        break;
                };
                break;
        }
    })
})

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.result').classList.remove('view');
    mycol.forEach(m => {
        m.classList.remove('red');
    })
    comcol.forEach(c => {
        c.classList.remove('red');
    })
})