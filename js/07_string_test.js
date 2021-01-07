var str = 'Javascript'
// charAt(num)
// 해당 인덱스의 문자를 반환.
console.log(str.charAt(0)); 

// indexOf('')
// 해당 문자의 인덱스 번호 반환. 일치하는 문자가 없으면 -1 반환.
console.log(str.indexOf('a')); 

// lastIndexOf('')
// 해당 문자를 오른쪽부터 검색하여 일치하는 인덱스 반환. 일치하는 문자가 없으면 -1 반환.
console.log(str.lastIndexOf('a'));

// includes('')
// 해당 문자열과 일치하면 true, 일치하지 않으면 false 반환.
// 대소문자 구별함.
console.log(str.includes('java')); // 대소문자의 구별로 false가 출력됨.

// substring(num1,num2) or substring(num)
// index num1 ~ num2-1 까지의 문자를 반환. or index num부터 끝까지의 문자를 반환.
// 할당을 한 후에 하면 변경되고, 그렇지 않으면 원래의 문자열 자체를 변경하지 않음.
console.log(str.substring(3,7));
console.log(str.substring(3));
// str 자체를 바꿔서 할당하고 싶다면.
str = str.substring(2);
console.log(str); // str = vascript

// substr(num1, num2)
// index num1부터 num2개의 문자를 반환. 
console.log(str.substr(2,5));

// split('') 
// ''를 기준으로 문자열을 분할함.
// '' 가 공백인 경우 공백을 기준으로 문자열을 분할. 
// 분할되어진 결과는 배열의 형태로 나누어져 들어감.
str = 'No pain No gain';  
var div = str.split(' ');
console.log(div.length);
for(i of div){
    console.log(i);
}
console.log(div[0]+','+ div[1] +',' + div[2] +',' + div[3]);

// replace('a','b')
// 위의 경우는 앞의 한개의 a의 문자를 b로 변경함
// 전체 str 문자열에서 모든 a의 문자를 b로 변경하고 싶을 때는
// replaceAll('a','b') 를 이용함.
console.log(str.replace('No','Happy'));
console.log(str.replaceAll('No','Happy'));

// concat() - 문자열을 연결해 줌.
var s1 = 'hi ';
var s2 = ':-)';
console.log(s1.concat(s2)); // 변수 이름도 가능
console.log(s1.concat('^^')); // 문자열도 가능
console.log(s1.concat(1)); // 숫자도 가능

// trim()
//문자열의 앞 뒤 공백을 제거함.
s1=s1.trim();
console.log(s1.concat('~'));

// toLowerCase() , toUpperCase()
// 소문자로 변경, 대문자로 변경
console.log(s1.toUpperCase());
console.log(s1.toLowerCase());