const myInformation = require("./information.js");

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${myInformation.name} from ${myInformation.campus} Campus!`,
    e : "oO",
    T : "U"
}));