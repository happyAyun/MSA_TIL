
// var dateObj = new Date(2022, 9, 30, 10, 30);
let dateObj = new Date();        
    var dateInfo = {
        year: dateObj.getFullYear(),
        month: dateObj.getMonth() + 1, // month는 0부터 시작.
        date: dateObj.getDate(),
        hours: dateObj.getHours(),
        minutes: dateObj.getMinutes(),
        nowDate : dateObj.toUTCString(), // 협정세계시간.
        localDate : dateObj.toLocaleDateString(),
        isDate : dateObj.toISOString(), // 국제 표준화 기구 표기법
    }
    for(var i in dateInfo) {
        console.log(i + ':' + dateInfo[i]);
    }        