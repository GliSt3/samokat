let isname = document.querySelector(".name");//получаем поле Имя по селектору в скобках в переменную
let surname = document.querySelector(".surname");//получаем поле Фамилия по селектору в скобках в переменную
let patronymic = document.querySelector(".patronymic");//получаем поле Отчество по селектору в скобках в переменную
let login = document.querySelector(".login");//получаем поле Логин по селектору в скобках в переменную
let phone = document.querySelector(".phone");//получаем поле Телефон по селектору в скобках в переменную
let email = document.querySelector(".email");//получаем поле Email по селектору в скобках в переменную
let password = document.querySelector(".pass");//получаем поле Пароль по селектору в скобках в переменную
let passwordRepete = document.querySelector(".passR");//получаем поле Повтор пороля по селектору в скобках в переменную

const submitReg = document.querySelector('.sub'); //получаем кнопку отправки формы по селектору в скобках в переменную
submitReg.addEventListener('click', function (event) { //вызов функции после нажатия на кнопку отправки формы

  let pName1 = document.querySelector("#pName1");/*получаем переменную pName1 по id в скобках в переменную в которой текст ошибки для поля Имя*/
let pName2 = document.querySelector("#pName2");/*получаем переменную pName2 по id в скобках в переменную в которой текст ошибки для поля Имя*/

let pSurname1 = document.querySelector("#pSurname1");/*получаем переменную pSurname1 по id в скобках в переменную в которой текст ошибки для поля Имя*/
let pSurname2 = document.querySelector("#pSurname2");/*получаем переменную pSurname2 по id в скобках в переменную в которой текст ошибки для поля Имя*/

let pPatronymic = document.querySelector("#pPatronymic");/*получаем переменную pPatronymic по id в скобках в переменную в которой текст ошибки для поля Имя*/

let pLogin1 = document.querySelector("#pLogin1");/*получаем переменную pLogin1 по id в скобках в переменную в которой текст ошибки для поля Имя*/
let pLogin2 = document.querySelector("#pLogin2");/*получаем переменную pLogin2 по id в скобках в переменную в которой текст ошибки для поля Имя*/

let pPhone1 = document.querySelector("#pPhone1");/*получаем переменную pPhone1 по id в скобках в переменную в которой текст ошибки для поля Имя*/
let pPhone2 = document.querySelector("#pPhone2");/*получаем переменную pPhone2 по id в скобках в переменную в которой текст ошибки для поля Имя*/

let pEmail1 = document.querySelector("#pEmail1");/*получаем переменную pEmail1 по id в скобках в переменную в которой текст ошибки для поля Имя*/
let pEmail2 = document.querySelector("#pEmail2");/*получаем переменную pEmail2 по id в скобках в переменную в которой текст ошибки для поля Имя*/

let pPassword1 = document.querySelector("#pPassword1");/*получаем переменную pPassword1 по id в скобках в переменную в которой текст ошибки для поля Имя*/
let spanPassword2 = document.querySelector("#spanPassword2");/*получаем переменную spanPassword2 по id в скобках в переменную в которой текст ошибки для поля Имя*/

let pPasswordRepete1 = document.querySelector("#pPasswordRepete1");/*получаем переменную pPasswordRepete1 по id в скобках в переменную в которой текст ошибки для поля Имя*/
let pPasswordRepete2 = document.querySelector("#pPasswordRepete2");/*получаем переменную pPasswordRepete2 по id в скобках в переменную в которой текст ошибки для поля Повтор пароля*/

if(isname.value == ""){//проверка поля Имя на заполнение
   pName1.style.display = 'block';//если поле пустое, появится 1 ошибка
   isname.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
  } else if(!/([A-Za-zА-Яа-яЁё]{2,})+(-[a-zA-Zа-яёА-ЯЁ]+)?$/.test(isname.value)){ //проверка на формат, в котором должно быть написано имя
    pName1.style.display = 'none';//1 ошибка исчезнет
    pName2.style.display = 'block';//появится 2 ошибка
    isname.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
  } else {//если поле не пустое и соответствует формату
    isname.style.border = '2px solid #20a314';
    pName1.style.display = 'none';//1 ошибка исчезнет
    pName2.style.display = 'none';//2 ошибка исчезнет
  }

  if(surname.value == ""){//проверка поля Фамилия на заполнение
    pSurname1.style.display = 'block';//если поле пустое, появится 1 ошибка
    surname.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
  } else if(!/[A-Za-zА-Яа-яЁё]+(-[a-zA-Zа-яёА-ЯЁ]+)?$/.test(surname.value)){//проверка на формат, в котором должна быть написана фамилия
    surname.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
    pSurname1.style.display = 'none';//1 ошибка исчезнет
    pSurname2.style.display = 'block';//появится 2 ошибка
  } else {//если поле не пустое и соответствует формату
    surname.style.border = '2px solid #20a314';
    pSurname1.style.display = 'none';//1 ошибка исчезнет
    pSurname2.style.display = 'none';//2 ошибка исчезнет
  }

  if(patronymic.value != "" && !/[A-Za-zА-Яа-яЁё]/.test(patronymic.value)){//если поле Отчество заполнено и прошло проверку на формат
    patronymic.style.border = '2px solid rgb(255, 0, 0)';//если поле пустое, появится ошибка
    pPatronymic.style.display = 'block';//граница поля станет красной
  } else {//если поле не пустое и соответствует формату
    patronymic.style.border = '2px solid #20a314';
    pPatronymic.style.display = 'none';//ошибка исчезнет
  }

  if(login.value == ""){//проверка поля Логин на заполнение
    pLogin1.style.display = 'block';//если поле пустое, появится 1 ошибка
    login.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
  } else if(!/[A-Za-zА-Яа-яЁё0-9-_.,]+$/.test(login.value)){//проверка на формат, в котором должен быть написан логин
    login.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
    pLogin1.style.display = 'none';//1 ошибка исчезнет
    pLogin2.style.display = 'block';//появится 2 ошибка
  } else {//если поле не пустое и соответствует формату
    login.style.border = '2px solid #20a314';
    pLogin1.style.display = 'none';//1 ошибка исчезнет
    pLogin2.style.display = 'none';//2 ошибка исчезнет
  }

  if(phone.value == ""){//проверка поля Телефон на заполнение
    pPhone1.style.display = 'block';//если поле пустое, появится 1 ошибка
    phone.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
  } else if(!/([+]?)(\d{11})/.test(phone.value)){//если вписанное в поле не соответствует формату
    phone.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
    pPhone1.style.display = 'none';//1 ошибка исчезнет
    pPhone2.style.display = 'block';//появится 2 ошибка
  } else {//если поле не пустое и соответствует формату
    phone.style.border = '2px solid #20a314';//граница поля станет зеленой
    pPhone1.style.display = 'none';//1 ошибка исчезнет
    pPhone2.style.display = 'none';//2 ошибка исчезнет
  }

  if(email.value == ""){//проверка поля Email на заполнение
    pEmail1.style.display = 'block';//если поле пустое, появится 1 ошибка
    email.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
  } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email.value)){//если вписанное в поле не соответствует формату
    email.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
    pEmail1.style.display = 'none';//1 ошибка исчезнет
    pEmail2.style.display = 'block';//появится 2 ошибка
  } else {//если поле не пустое и соответствует формату
    email.style.border = '2px solid #20a314';
    pEmail1.style.display = 'none';//1 ошибка исчезнет
    pEmail2.style.display = 'none';//2 ошибка исчезнет
  }

  if(password.value == ""){//проверка поля Пароль на заполнение
    pPassword1.style.display = 'block';//если поле пустое, появится 1 ошибка
    password.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
  } else if(!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/.test(password.value)){//если вписанное в поле не соответствует формату
    password.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
    pPassword1.style.display = 'none';//1 ошибка исчезнет
    spanPassword2.style.display = 'block';//появится 2 ошибка
  } else {//если поле не пустое и соответствует формату
    password.style.border = '2px solid #20a314';
    pPassword1.style.display = 'none';//1 ошибка исчезнет
    spanPassword2.style.display = 'none';//2 ошибка исчезнет
  }

  if(password.value == ""){//проверка поля Повтор пароля на заполнение
    pPasswordRepete1.style.display = 'block';//если поле пустое, появится 1 ошибка
    passwordRepete.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
  } else if(password.value != passwordRepete.value){//если вписанное в поле не соответствует формату
    passwordRepete.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
    pPasswordRepete1.style.display = 'none';//1 ошибка исчезнет
    pPasswordRepete2.style.display = 'block';//появится 2 ошибка
  } else {//если поле не пустое и соответствует формату
    passwordRepete.style.border = '2px solid #20a314';
    pPasswordRepete1.style.display = 'none';//1 ошибка исчезнет
    pPasswordRepete2.style.display = 'none';//2 ошибка исчезнет
  }

});

let modal = document.getElementById("modal"); //получаем элемент обращением к тегу
let close = document.querySelector("close"); //возвращает элемент по селектору в скобках
function termsOfUse(){//функция кнопки, которая открывавет модальное окно
  modal.style.display = "block";//отображает элемент
}


window.onclick = function(event) { //функция по закрытию модального окна нажатием вне этого окна
  if (event.target == modal) {
    modal.style.display = "none";//скрывает элемент
  }
}
