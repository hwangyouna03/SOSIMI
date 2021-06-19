var type;
var bread;
var toasting;
var cheese;
var topping = [];
var vegetable = [];
var sauce = [];
var cookie;
var drink;


function chooseSandwich(){
  type = document.querySelector('input[name="sandwich"]:checked').value;
  localStorage.setItem('type', type);
}
function chooseBread(){
  bread = document.querySelector('input[name="bread"]:checked').value;
  toasting = document.querySelector('input[name="toasting"]:checked').value;
  localStorage.setItem('bread', bread);
  localStorage.setItem('toasting', toasting);
}
function chooseCheese(){
  cheese = document.querySelector('input[name="cheese"]:checked').value;
  localStorage.setItem('cheese', cheese);
}
function chooseTopping(){
  topping = check("topping");
  if(topping[0] == null){
    topping = "추가 재료 없음";
  }else{ topping += " 추가"}
  localStorage.setItem('topping', topping);
}
function chooseVegetable(){
  vegetable = check("vegetable");
  if(vegetable[0] == null){
    vegetable = " 전부";
  }else{
    vegetable += " 제외"
  }
  localStorage.setItem('vegetable', vegetable);
}
function chooseSauce(){
  sauce = check("sauce");
  localStorage.setItem('sauce', sauce);
}
function chooseCookie(){
  cookie = document.querySelector('input[name="cookie"]:checked').value;
  localStorage.setItem('cookie', cookie);
}
function chooseDrink(){
  drink = document.querySelector('input[name="drink"]:checked').value;
  localStorage.setItem('drink', drink);
}

function result(){
  //샌드위치
  document.getElementById("sandwich").innerText = localStorage.getItem('type');
  document.getElementById("sandwich").innerText += ","
  //빵
  document.getElementById("bread").innerText = "빵:";
  document.getElementById("bread").innerText += localStorage.getItem('bread');
  document.getElementById("bread").innerText += "/"
  document.getElementById("bread").innerText += localStorage.getItem('toasting');
  //치즈
  document.getElementById("cheese").innerText = "치즈: ";
  document.getElementById("cheese").innerText += localStorage.getItem('cheese');
  document.getElementById("cheese").innerText += ",";
  //추가재료
  document.getElementById("topping").innerText = "추가재료:"
  document.getElementById("topping").innerText += localStorage.getItem('topping');
  document.getElementById("topping").innerText += ","
  //야채
  document.getElementById("vegetable").innerText = "야채: "
  document.getElementById("vegetable").innerText += localStorage.getItem('vegetable');
  document.getElementById("vegetable").innerText += ","
  //소스
  document.getElementById("sauce").innerText == localStorage.getItem('sauce');
  //쿠키
  document.getElementById("cookie").innerText = "쿠키: "
  document.getElementById("cookie").innerText += localStorage.getItem('cookie');
  document.getElementById("cookie").innerText += ","
  //음료
  document.getElementById("drink").innerText = "음료: "
  document.getElementById("drink").innerText += localStorage.getItem('drink');

  //이미지변경
  var sandwichType;
  var selectedType = localStorage.getItem('type');
  
  if(selectedType == "이탈리안 비엠티"){
    sandwichType = "img/이탈리안_비엠티.png";
  }else if(selectedType == "에그마요"){
    sandwichType = "img/에그마요.png";
  }else if(selectedType == "스테이크&치즈"){
    sandwichType = "img/스테이크&치즈.png";
  }else if(selectedType == "써브웨이 클럽"){
    sandwichType = "img/써브웨이_클럽.png";
  }else if(selectedType == "폴드포크 바비큐"){
    sandwichType = "img/폴드포크_바비큐.png";
  }else{
    sandwichType = "로티세리_바비큐_치킨.png";
  }
  document.getElementById("productImg").src = sandwichType;

  document.getElementById('breadInfo').innerText = "────";
  document.getElementById("breadInfo").innerText += localStorage.getItem('bread');
  document.getElementById('cheeseInfo').innerText = "────";
  document.getElementById('cheeseInfo').innerText += localStorage.getItem('cheese');
  document.getElementById('toppingInfo').innerText = "────";
  document.getElementById('toppingInfo').innerText += localStorage.getItem('topping');
  document.getElementById('sauceInfo').innerText = "────";
  document.getElementById('sauceInfo').innerText += localStorage.getItem('sauce');
  document.getElementById('vegetableInfo').innerText = "────";
  document.getElementById('vegetableInfo').innerText += localStorage.getItem('vegetable');
}

function check(name) {
  var len = document.getElementsByName(name).length;
  var array = [];
  var count = 0;

  for (var i=0; i<len; i++) {
      if (document.getElementsByName(name)[i].checked == true) {
        array[i-count] = " " + document.getElementsByName(name)[i].value;
      }else{
        count++;
      }
  }
  return array;
}