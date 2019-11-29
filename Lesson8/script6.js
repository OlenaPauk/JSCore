console.log('Task6');
function checkEmail(email) {
    let re = /^[a-zA-Z0-9]+([-]?\w+)*@[a-z]{3,5}\.[a-z]{2,3}$/;
    let result = re.test(email);
    if(result){
        console.log(`${email} email is correct!`)
    }
    else{
        console.log(`${email} email is not correct!`)
    }
}
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('-my_mail@gmail.com');
