//Array
var info = [24, 11, 7, 2, 54];

//sort
info.sort(function(a,b) { // 오름차순 정렬.
    return a - b;
});
console.log(info.toString());

info.sort(function(a,b) { // 내림차순 정렬.
    return b - a;
});
console.log(info.toString());

//mdn을 참조해서 다 정리해놓기!!! 

var arr = ['a','b','c'];

// Array.length - 배열의 길이
console.log(arr.length);

// Array.from()
console.log(Array.from(arr));
console.log(Array.from([1,2,3],x=>x*x));

// Array.isArray() - 배열의 확인 
// 배열은 []
console.log(Array.isArray(arr));

// Array.of() - 배열의 요소
console.log(Array.of(1)); // [ 1 ]

var arr2 = [1, 2, 3];

// arr1.concat(arr2) // arr1에 arr2를 붙인다.
console.log(arr.concat(arr2));

// arr.copyWithin(a,b,c) - a자리에 b부터 c-1까지의 값을 넣는다.
// arr.copyWithin(a,b) - a자리에 "b의 값부터 끝까지의" 값을 넣는다.
console.log(arr.copyWithin(0,1)); // ['b', 'c', 'c'] - 배열이 바뀜.

arr = ['a','b','c'];

// arr.entries() - 배열의 각 인덱스에 대한 키/값 쌍을 가지는 Array Iterator 객체를 반환.
const iterator = arr.entries();
console.log(iterator.next().value); // [0, 'a']

// arr.every() - 배열의 모든 요소가 주어진 판별 함수를 통과하는지. true/false 반환.
const func = (value) => value < 5;
console.log(arr2.every(func));

// arr.fill(a,b,c) - 배열의 인덱스 b부터 c-1까지 a의 값으로 채운다.
// arr.fill(a,b) - 배열의 인덱스 b부터 끝까지 a의 값으로 채운다.
// arr.fill(a) - 배열의 모든 인덱스 값을 a의 값으로 채운다.
console.log(arr.fill(3)); // [3, 3, 3]

// arr.filter() - filter의 조건을 통과하는 요소들을 새로운 배열로 만들어 반환.
const result = arr2.filter(num => num < 3);
console.log(result); // [1, 2]

// arr.find() - 배열에서 해당 조건을 만족하는 첫번째 요소 값을 반환.
console.log(arr2.find(num => num < 3)); // 1

// arr.findIndex() - 주어진 판별 함수를 만족하는 첫번째 요소의 인덱스를 반환.
console.log(arr2.findIndex(num => num < 3)); // 0

// arr.flat() - 모든 하위 배열 요소를 지정한 깊이까지 이어붙여 새로운 배열을 생성.
// 공백도 제거함.
const arr4 = [1, 2, , [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(2)); // [ 1, 2, 3, 4, 5, 6, [ 7, 8, [ 9, 10 ] ] ]







// map : array data 조작
// 한줄일 경우는 {}를 생략해도 됨. but 한줄이 아니라면 X -> 함께 코딩 가이드를 적용해야 함. 

// fillter : array data filtering new Array 생성

// slice(startindex, [ deletecount, appenddate ])

// find 는 조건을 줘서 검색.