let cardNum = document.getElementById('cardNumber');
let cardSub = document.getElementById('cardSubmit');

cardSub.addEventListener('click',function(){
    let number = cardNum.value;
    let re = /\d{4}\-\d{4}\-\d{4}\-\d{4}/;
    let result = re.test(number);
    console.log(`Task5 - ${number} is ${result}`);
})

