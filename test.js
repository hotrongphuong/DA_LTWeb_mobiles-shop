const md5 = require('md5');

const admin1 = {
    name: "Ho Trong Phuong",
    username: "admin",
    password: "0393421914"
}

const admin2 = {
    name: "Roronoa Zoro",
    username: "htp2001",
    password: "onepiece"
}

const admin3 = {
    name: "Ho Pham Hoang Thuong",
    username: "katakuri",
    password: "mochi"
}

const test1 = md5('onepiece');
const test3 = md5('mochi');
const test2 = md5('0393421914');

console.log(test1);
console.log(test2);
console.log(test3);