// let i = prompt("월 입력: ","");
    // if(i<=7){
    //     if(i%2) alert("31일까지입니다.");
    //     else {
    //         if(i==2) alert("28일까지입니다.");
    //         else alert("30일까지입니다.");
    //     }
    // }
    // else{
    //     if(i%2) alert("30일까지입니다.");
    //     else alert("31일까지입니다.");
    // } //문자열 방지가 없음.

    let month = prompt("월 입력 :", "");

    if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
        console.log(`${month}월은 31일까지 있습니다.`);
    }else if(month==2){
        console.log(`${month}월은 28일까지 있습니다.`);
    }else if(month==4 || month==6 || month==9 || month ==11){
        console.log(`${month}월은 30일까지 있습니다.`);
    }else{
        console.log(`${month}월이 맞는지 확인하세요`);  
    }


    // switch(parseInt(i)){ //i가 문자로 인식됨으로 case에서 숫자이기에 parseInt()를 이용하여 숫자형으로 바꿔준다.
    //     case 1: //혹은 parseInt()를 하지 않으면 case '1': 로 문자형으로 바꿔준다.
    //     case 3:
    //     case 5:
    //     case 7:
    //     case 8:
    //     case 10:
    //     case 12: alert(i+"월은 31일까지입니다."); // alert(i + "");
    //             break;
    //     case 4:
    //     case 6:
    //     case 9:
    //     case 11: alert(i+"월은 30일까지입니다.`");
    //             break;
    //     case 2 : alert(i+"월은 28일까지입니다.`");
    //             break;
    // }

    // 반복문
    // 초기값;                           초기값;                         
    // while(조건식){                    do{
    //    참일 때 실행문;                   실행문; //무조건 한번은 실행.
    //    증감식;                           증감식;
    // }                                 }while(조건식);

    // for(초기값;조건식;증감식){
    //     실행문;
    // }
    // for(데이터 in|of 리스트데이터){      //in : index 
    //     실행문;                         //of : 배열의 값. 
    // }

    let index = 0;
    let sum=0;
    while(index < 11){
        sum += index;
        index++;
    }
    console.log(`1~10 합 : ${sum}`);
    
    index = 0; // 다시 초기화.
    sum=0;
    do{
        sum += index;
        index++;
    }while(index < 11);
    console.log(`1~10 합 : ${sum}`);

    let arr = [2,3,4,5,6,7,8,9];
    let arr2 = [1,2,3,4,5,6,7,8,9];
    for(let a of arr){ // of : 배열의 값 , in : 인덱스 값.
        for(let b of arr2){
            console.log(`${a} * ${b} = a*b 입니다.`);
        }
    }