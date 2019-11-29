console.log('Task7');
function checkLogin(login){
let re = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
let reqNumber = /[0-9\.]+/g;
let resultNumber = login.match(reqNumber);
let result = re.test(login);
console.log(`${login} is ${result} - ${resultNumber}`);
}
checkLogin('e1.88ret3');
checkLogin('ee1*1ret3');
checkLogin('1.1e1ret3');