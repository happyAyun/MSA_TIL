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
//주석정리해요~

// map ( callback(currentValue[]))
// map : array data 조작
// 한줄일 경우는 {}를 생략해도 됨. but 한줄이 아니라면 X -> 함께 코딩 가이드를 적용해야 함. 

// fillter : array data filtering new Array 생성

// slice(startindex, [ deletecount, appenddate ])

// find 는 조건을 줘서 검색.