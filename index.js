
const inputAmount = document.querySelector('.input-amount');
const inputAmountPeople = document.querySelector('.input-amount-people');
const btn5 = document.querySelector('.btn-5');
const btn10 = document.querySelector('.btn-10');
const btn15 = document.querySelector('.btn-15');
const btn25 = document.querySelector('.btn-25');
const btn50 = document.querySelector('.btn-50');
const btnCustom = document.querySelector('.btn-custom');

const dialogo = document.querySelector('.dialogo');
const btnCustomClose = document.getElementById('btn-custom-close');

const amountPereson = document.querySelector('.amount__preson');
const amountResult = document.querySelector('.amount');

const btnReset = document.querySelector('.btn-reset');


btn5.addEventListener('click' , () => {
    let amount = inputAmount.value;
    let people = inputAmountPeople.value;
    if(people  == ''){
        people = 1;
    }
    const resultTip = parseInt(amount) * 0.05;
    const result = resultTip / parseInt(people);

    amountResult.textContent = `$ ${resultTip}`;
    amountPereson.textContent = `$ ${result}`;
});
btn10.addEventListener('click' , () => {
    const amount= inputAmount.value;
    let people = inputAmountPeople.value;
    if(people  == ''){
        people = 1;
    }
    const resultTip = parseInt(amount) * 0.10;
    const result = resultTip / parseInt(people) ;
    
    amountResult.textContent = `$ ${resultTip}`;
    amountPereson.textContent = `$ ${result}`;
});
btn15.addEventListener('click' , () => {
    const amount= inputAmount.value;
    let people = inputAmountPeople.value;
    if(people  == ''){
        people = 1;
    }
    const resultTip = parseInt(amount) * 0.15;
    const result = resultTip / parseInt(people) ;
    
    amountResult.textContent = `$ ${resultTip}`;
    amountPereson.textContent = `$ ${result}`;
});
btn25.addEventListener('click' , () => {
    const amount= inputAmount.value;
    let people = inputAmountPeople.value;
    if(people  == ''){
        people = 1;
    }
    const resultTip = parseInt(amount) * 0.25;
    const result = resultTip / parseInt(people) ;
    
    amountResult.textContent = `$ ${resultTip}`;
    amountPereson.textContent = `$ ${result}`;
});
btn50.addEventListener('click' , () => {
    const amount= inputAmount.value;
    let people = inputAmountPeople.value;
    if(people  == ''){
        people = 1;
    }
    const resultTip = parseInt(amount) * 0.50;
    const result = resultTip / parseInt(people) ;

    amountResult.textContent = `$ ${resultTip}`;
    amountPereson.textContent = `$ ${result}`;
});
btnCustom.addEventListener('click' , () => {
    dialogo.showModal();
    dialogo.classList.remove('hidden');
    const amount= inputAmount.value;
    let people = inputAmountPeople.value;
    if(people  == ''){
        people = 1;
    }
    const resultTip = parseInt(amount) * 0.15;
    const result = (parseInt(amount) * 0.5) / inputAmountPeople ;
    
    amountResult.textContent = `$ ${resultTip}`;
    amountPereson.textContent = `$ ${result}`;
});

btnReset.addEventListener('click' , () => {
    amountResult.textContent = '$ 0';
    amountPereson.textContent = '$ 0';

    inputAmount.value = '0';
    inputAmountPeople.value = '0';
});