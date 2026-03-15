const  name = "robin";

const  repocount = "06";

// console.log(name + repocount + " i am from uttarakhand");


// instead of above we use backticks and ${} for interpolation which means we inject the value of variable in string

console.log(`hello my name is ${name} and my repocount is ${repocount}`);


const newName = new String(" robinsingh");

console.log(newName);

console.log(newName.length);

console.log(newName.toUpperCase());

console.log(newName.charAt(4));


console.log(newName.indexOf('n'));


const anotherName = newName.slice(0,5);

console.log(anotherName);

const newAnotherName = newName.trim();

console.log(newAnotherName);


const url = "https://www.youtube.com/robin%20singh";

console.log(url.replace("%20","-"));

console.log(url.includes("robin"));

const text = "robin-singh-rawat";

// split method is used to split the string into an array based on the separator provided as an argument 

console.log(text.split('-'));
