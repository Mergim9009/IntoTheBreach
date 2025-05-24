var programmingLanguages = ['javscript','php','java'];

console.log(programmingLanguages[2]);

programmingLanguages.push('Python');

programmingLanguages.pop();

programmingLanguages.unshift('c#');

programmingLanguages.shift();

console.log(programmingLanguages);

var programmingLanguages1 = ['javscript','php','java','Python','c#'];

programmingLanguages1.splice(1,2, 'Ruby');

console.log(programmingLanguages1);

console.log(Math.floor(Math.random()*10));

var students = ['student 1', 'student 2']

var [s1,s2] = students;

console.log(s1);
console.log(s2);

var city = ['Prishtina', 'Peja' , 'Podujeva','Prizreni']

var [city1, ,city3,city4] = city;

console.log(city1)
console.log(city3)
console.log(city4)

var numbers = [1,2,3,4,5,6,7,8,9,10];

var[first,second, ...otherNumbers]=numbers;

console.log(first);
console.log(second);
console.log(otherNumbers.toString());