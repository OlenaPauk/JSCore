console.log('Task3');
function searchLetter() {
    let req = 'cdbBdbsbz'
    let re = /d(b+)(d)/gi;
    let result = re.exec(req);
    console.log(result);
}
searchLetter();

