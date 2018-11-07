var datasend = document.querySelector(".send");
var usersend = document.querySelector(".usersend");

datasend.addEventListener("click",signup,false);
usersend.addEventListener("click",checkmail,false);

function signup(){
  var emaildata = document.querySelector(".mail").value;
  var pwdata = document.querySelector(".pw").value;
  var account = {};
  account.email = emaildata;
  account.password = pwdata;
  
  var signupData = new XMLHttpRequest();
  signupData.open("post","https://hexschool-tutorial.herokuapp.com/api/signup",true);
  signupData.setRequestHeader("Content-type","application/json");
  var datas = JSON.stringify(account);
  signupData.send(datas);
  signupData.onload = function(){
    var checked = JSON.parse(signupData.responseText);
    if(checked.message == "帳號註冊成功"){
      alert('帳號已註冊成功：）')
    }else{
      alert('帳號註冊失敗>""<')
    }
  }   
  
  // alert出現後再清空input
  setTimeout(function(){
    document.querySelector(".mail").value = "";
    document.querySelector(".pw").value = "";   
    
  // 直接用emaildata、pwdata沒有作用 ？？？
  // emaildata = "";
  // pwdata = "";    
      
  },500)
}

function checkmail(){
  var emaildata = document.querySelector(".mail").value;
  var pwdata = document.querySelector(".pw").value;
  var useraccount = {};
  useraccount.email = emaildata;
  useraccount.password = pwdata;
  
  var checkdata = new XMLHttpRequest();
  checkdata.open("post","https://hexschool-tutorial.herokuapp.com/api/signin",true);
  checkdata.setRequestHeader("Content-type","application/json");
  var datalist = JSON.stringify(useraccount);
  checkdata.send(datalist);
  
  checkdata.onload = function(){
    var datalist = JSON.parse(checkdata.responseText);
    if(datalist.message == "登入成功"){
      alert("登入成功！！！")
    }else{
      alert("登入失敗！請再次確認")
    }
  }
  
  setTimeout(function(){
    document.querySelector(".mail").value = "";
    document.querySelector(".pw").value = "";        
  },500)
}