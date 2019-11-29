// 1
console.log('Task1');
function upperCase(reg) {
    let re = /^[A-Z]/;
    let test = re.test(reg);
    if (test) {
        console.log(`${reg}  Strings starts with uppercase character`);
    }
    else {
        console.log(`${reg}  Strings not starts with uppercase character `);
    }
}
upperCase('reqexp');
upperCase('ReqExp');
//