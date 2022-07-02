let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let page3 = document.querySelector(".cadastro-quizz");


function screenChange(page) {

    switch (page) {
        case 'page1':
            page1.classList.remove('hide')
            page2.classList.add('hide')
            page3.classList.add('hide')
            break;
        case 'page2':
            page1.classList.add('hide')
            page2.classList.remove('hide')
            page3.classList.add('hide')
            break;
        case 'page3':
            page1.classList.add('hide')
            page2.classList.add('hide')
            page3.classList.remove('hide')
            break;
    }
}