const name = "suresh";
const repoCount = 50;

// console.log(typeof name);//string

//console.log("my name is " + name + " and my repo count is " + repoCount);
console.log(`my name is ${name} and my repo count is ${repoCount}`); //string interpolation

let gameName = new String("Player-Unknown's-Battlegrounds");
console.log(typeof gameName); //object

console.log(gameName[2]); //a
console.log(gameName.__proto__);
console.log(gameName.length); //30
console.log(gameName.toUpperCase()); //PLAYER-UNKNOWN'S-BATTLEGROUNDS
console.log(gameName.toString()); //Player-Unknown's-Battlegrounds
console.log(gameName.charAt(3)); //y
console.log(gameName.indexOf("y")); //3
console.log(gameName.indexOf("r")); //5
console.log(gameName.lastIndexOf("r")); //24

let newString = gameName.substring(0, 6);
// console.log(newString); //player

let anotherString1 = gameName.slice(-7, -1);
// console.log(anotherString1); //ground
let anotherString2 = gameName.slice(-60, 6);
// console.log(anotherString2); //player

let userName = "   manish    ";
console.log(userName);
console.log(userName.trim());

let url = "https://spring.io/projects/spring%20restdocs#samples";

console.log(url.replace("%20", "-")); //https://spring.io/projects/spring-restdocs#samples
console.log(url.includes("spring")); //true
console.log(url.split("/")); //[ 'https:', '', 'spring.io', 'projects', 'spring%20restdocs#samples' ]
