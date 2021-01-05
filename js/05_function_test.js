// 1. JavaScript는 일급함수
// 함수 정의, 함수 호출해서 사용.
// 정의 : function 함수명([parameter, parameter, ...]){ 구현; [return data;]} // 생략가능[]
// 호출 : let data = 함수명([parameter, parameter, ...]);
// parameter에 function이 와도 되고, return 또한 function이 가능.
//
// let functionV = function([parameter, parameter, ...]){ 구현; [return data;]};
// functionV : 함수 객체
//
// arrow function : ([parameter, parameter, ...])=>{구현; [return data;]}  //일회용 함수.

// 함수 정의
function add(x,y){
    return x+y;
}

// 함수 사용 - 함수의 위치! 중요
let sum = add(10,20);
console.log("add(10,20) = ", sum);
console.log(add(10,"20"));

// 익명 함수
let substract = function(x,y){
    return x-y;
}
console.log(substract(20,10) , typeof substract , substract);


// arrow function (아래의 두개는 함수 변수(객체)는 함수를 의미.)
let divide = (x,y)=>console.log(x/y);
divide(10,20); // 함수()를 console.log를 return하는 경우 

let divide2 = (x,y)=>{ return x/y; }; 
console.log(divide2(300,100)); // 값을 return하는 경우 함수()를 console.log안에 넣어주기.

// 함수 선언과 동시에 실행
let multiply = ((x,y)=>{ return x*y; })(20,10); // 함수의 자체적 실행.
console.log(multiply); // 함수 객체를 console.log에 넣어줌. (함수() X, 함수 객체가 결과 값을 가짐).


//클로져 -> 라이브 스팬이 끝나도 로컬변수를 사용해서 계산해야 할 경우에 사용된다.
//함수에서 다른 함수 리턴
function makeAdder(x){
    let y = 1; //makeAdder function local variable
    return function(z){
        y=100; // 외부함수 local variable 사용
        return x+y+z;
    }
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);
console.log(add5(2),add5);
console.log(add10(2),add10);

function multi(n){
    return function(){
        // let n=200; -> 가까운 지역변수가 우선.
        return n*=n;
    }
}

let multi5 = multi(5); // function의 형태
let multi10 = multi(10); // furction의 형태
console.log(multi5, multi5());
console.log(multi10, multi10());

//재귀함수 -> 교재!! 복습하면서 보기