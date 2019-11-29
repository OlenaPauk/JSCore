function repl(str) {
    let re = /(\w+)\s(\w+)/;
    let newStr = str.replace(re, "$2, $1");
    console.log(`Task4 - ${newStr}`);
};
 repl('Java Script');