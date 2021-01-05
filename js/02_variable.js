// var x; //변수선언 > 주석 처리하여도 에러가 나지 않음.
x = 6; //값 할당
x="6"; // 에러 안남. 문자타입으로 변환되어 들어감.
document.getElementById("data").innerHTML = "<h3> variable x = " + x + "</h3>";

// 1.var : 변수의 유효범위 구분 안됨.
// 2.ECMA6때 출현 => let : (지역)변수의 유효범위 구분 가능 (let을 사용하기)
//                => const : 값이 할당되고 변화되지 않는 상수
const constVariable = 10; // 상수
let globalVariable=5; // 전역
{
    let localVariable=5; // 지역
    var y=5;
    console.log("localVariable ", localVariable);
    console.log("globalVariable ", globalVariable);
    console.log("var x", x);
    console.log("var x", y);
    console.log("const ", constVariable);
}
// constVariable = 100; - 에러 : 상수는 값 할당이 안됨.
// console.log("localVariable ", localVariable); - 지역변수를 호출함으로 에러.
console.log("globalVariable ", globalVariable);
console.log("var x", x);
console.log("var y", y);


// 2. DataType - Primitive(int, float, string, boolean), Reference(Class, Array)
let intV = 10;
let floatV = 10.5;
let stringV = "10";
let booleanV = true;
console.log("data type ", intV, floatV, stringV, booleanV);

