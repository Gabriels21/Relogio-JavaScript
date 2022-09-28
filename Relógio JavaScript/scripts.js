/* Seleciona os ponteiros*/
const hoursHand = document.querySelector('.hand.hours');
const minutesHand = document.querySelector('.hand.minutes');
const secondsHand = document.querySelector('.hand.seconds');

    /* Função que vai alterar a rotation dos ponteiros*/
const setRotation = (element, rotationPercentage) => {
    /* Define a propriedade do elemento --rotation*/
    element.style.setProperty("--rotation", rotationPercentage * 360);
};

/* Função que define os horas minutos e segundos*/

const setClock = () => {
    const currentDate = new Date(); /* Pega a data atual*/

    const secondsPercentage = currentDate.getSeconds() / 60; /* Pega os segundos da data atual (dividimos por 60 para pegar a porcentagem dos segundos para rotacionar o ponteiro dos segundos*/

    const  minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60; /* Pega os minutos da data atual (dividimos por 60 para pegar a porcentagem dos minutos para rotacionar o ponteiro dos minutos*/

    const  hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12; /* Pega a hora da data atual (dividimos por 60 para pegar a porcentagem da hora para rotacionar o ponteiro da hora*/

    setRotation(secondsHand, secondsPercentage);
    setRotation(minutesHand, minutesPercentage);
    setRotation(hoursHand, hoursPercentage);
};

setClock();

/* chama o setClock a cada 1 segundo*/
setInterval(setClock, 1000);