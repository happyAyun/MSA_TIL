// class VS object
// class : object를 생성하기 위한 template, type (현실세계의 요구사항을 추상화해서 속성과 기능을 표현한 템플릿)
// object : class type으로 생성된 객체 (클래스 new(->메모리확보) 생성자(->초기화)를 통해 인스터스화된 개체)
// 1. class 선언(ECMA6 - class)
// class 클래스 이름{
//     변수;
//     생성자
//     메소드;
// }

class Person{
    name="";
    age=0;

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    print(){
        console.log(`이름 : ${this.name}  나이 : ${this.age}`);
    }

    // 백엔드와 같은 개념이 아님을 주의해서 익혀 사용하자.
    // computed
    get birthYear(){ // 멤버 변수가 로직에 의해서 계산되어야 할 필요가 있을 경우.
        return this.age;
    }
    // action
    set birthYear(year){ // action 간접 접근으로 값을 필터링하고 싶을 때.
        this.age = 2021-year+1;
    }
}

let p = new Person("심아윤",26);
p.print();

// JS의 get,set의 사용법
let p2 = new Person("아윤",0);
p2.birthYear=1996; // p.birthYear(1997) - not a function error
console.log(`${p2.name}님의 현재 나이는 ${p2.birthYear} 입니다.`); //p.birthYear() X


// 2. function 객체로 선언
function Student(name, age, major){
    this.name = name;
    this.age = age;
    this.major = major;

    this.print = function(){
        console.log(`이름 : ${this.name} 나이 : ${this.age} 전공 : ${this.major}`);
    }
}

let s = new Student("심아윤",26,"컴퓨터정보공학부").print();
let s2 = new Student("심아윤",26,"컴퓨터정보공학부");
s2.print();

// 3. JSON(JavaScript Object Notation) - object를 표현해주는 표현법.
// 데이터를 가지는 객체. 
// 데이터를 주고 받는 형태로 데이터의 교환을 위해 사용됨.
let e = {person : {name:'심아윤', age:26}, department:'연구소', array:[1,2,3,4,5], female:'true'}; // object 방식
//object, string, array, true/false/null
console.log(e);
let array = [{name:"심아윤",age:26}, 1, [1, 2, 3, 4], "name", "false", "null"]; // array 방식
console.log(array[2]);
