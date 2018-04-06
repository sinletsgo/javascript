function exif (){

  var num = prompt("나이를 입력하세요");
  number =Number(num)


  if ( (number > 20) &&
    (number <60) )  {
    alert("중년입니다!")
  }else if (number < 20) {
    alert("학생입니다")
  }else {
    alert("노인입니다")
  }
};



function getNameOfDay() {


  var week = new Array('일', '월', '화', '수', '목', '금','토');
  var today = new Date();
  var year = today.getFullYear();
  console.log(year);
  var month = today.getMonth() +1;
  console.log("월:" + month);
  var day = today.getDate();
  console.log("일:" + day);
  var nameIndex = today.getDay();
  console.log("nameIndex:" + nameIndex);
  var dayName = week[nameIndex];
  console.log("dayName" + dayName);

  switch (nameIndex) {
    case 0:
        today = "일요일"
        break;
    case 1:
        today = "월요일"
        break;
    case 2:
        today = "화요일"
      break;
    case 3:
        today = "수요일"
      break;
    case 4:
        today = "목요일"
      break;
    case 5:
        today = "금요일"
      break;
    case 6:
        today = "토요일"
      break;
    }
    alert(today)
}



  //
  // switch (nameIndex) {
  //     case 0:
  //         today = "일요일";
  //         break;
  //     case 1:
  //         today = "월요일";
  //         break;
  //     case 2:
  //         today = "화요일";
  //         break;
  //     case 3:
  //         today = "수요일";
  //         break;
  //     case 4:
  //         today = "목요일";
  //         break;
  //     case 5:
  //         today = "금요일";
  //         break;
  //     case 6:
  //         today = "토요일";
  //         break;
  // }
  // alert(today)
