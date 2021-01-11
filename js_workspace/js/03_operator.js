// 연산자
// 1. 산술 연산자 : + , - , * , / , %
let x=10;
let y=20;

console.log(`${x}+${y}=${x+y}`);
console.log(`${x}-${y}=${x-y}`);
console.log(`${y}-${x}=${y-x}`);
console.log(`${x}*${y}=${x*y}`);
console.log(`${x}/${y}=${x/y}`);
console.log(`${y}%${x}=${y%x}`);

// 2. 대입 연산자 : = , += , -= , ...
const z = x+y;
var result = 0;
result += x;
console.log(result);

// 3. 비교 연산자 : > , < , >= , <= , == , != , === , !==
for(let i=1;i<x;i++){
    if(i%2 == 0) console.log(`${i}는 짝수입니다.`);
    else console.log(`${i}는 홀수입니다.`);
}
if(x < y) console.log(`${x}는 ${y}보다 작은 수 입니다.`);
if(x > y) console.log(`${x}는 ${y}보다 큰 수 입니다.`);
if(x != y) console.log(`${x}는 ${y}보다 다른 수 입니다.`);
if(x == y) console.log(`${x}는 ${y}보다 같은 수 입니다.`);
if(x === 10) console.log(`===`); //타입까지 일치.
if(x !== "10") console.log(`!==`); //타입or값 중 하나 불일치

// 4. 논리 연산자 : && , || , ~
if((x<y) && x!=0) console.log(`${x}는 ${y}보다 작은 양수 입니다.`);

// 5. 비트 연산자 : & , | , ^ , ~ , >> , <<
var bit = 1 & 3;
console.log(bit);

// 6. 삼항 연산자 : 조건 ? 참 : 거짓
x == y ? console.log(`${x} == ${y}`) : console.log(`${x} != ${y}`)