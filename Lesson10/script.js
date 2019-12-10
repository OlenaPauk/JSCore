// 1
console.log('Task1');
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

// 2
console.log('Task2');
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26


// 3
console.log('Task3');
function mul(...num) {
    let result = 1;
    let count = 0;

    for (let i = 0; i < num.length; i++) {
        if (Number.isInteger(num[i])) {
            result *= num[i];
        }
        else {
            count++;
        }
    }

    return num.length == count ? 0 : result;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

// 4
console.log('Task4');
let server = {
    data: 0,
    convertToString: function (callback) {
        selfServer = this;
        callback(() => {
            return selfServer.data + "";
        });
    }
};

let client = {
    server: server,
    result: "",
    calc: function (data) {
        selfClient = this;
        selfClient.server.data = data;
        selfClient.server.convertToString(selfClient.notification());
    },
    notification: function () {
        selfClient = this;
        return callback => {
            selfClient.result = callback();
        };
    }
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

// 5. 
// 5.1
console.log('Task5');
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = new Map();
keys.forEach((key, i) => map.set(key, values[i]));
console.log(map);
console.log(map.size); // 4
console.log(map.get(2)); // "span"

// 5.2
function mapBuilder(keysArray, valuesArrays) {
    let map1 = new Map();
    for (let i = 0; i < keysArray.length; i++) {
        map1.set(keysArray[i], valuesArrays[i]);
    }
    return map1;
}
let map2 = mapBuilder(keys, values);
console.log(map2.size); // 4
console.log(map2.get(2)); // "span"
