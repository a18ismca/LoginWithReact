import './Login.css';
import React from 'react';

function Login(){

    return(
        <React.Fragment>
            <h1 id="header">Welcome to quiz login!</h1>

                 <div id='loginTable'>
                    <label for="username">Username</label><br></br>
                      <input id="username" type="text" placeholder='Enter username here!'></input>
                      <br></br>
                     <label for="pwd">Password</label>
                     <br></br>
                         <input id="pwd" type="text" placeholder='Enter password here!'></input>
                        <br></br>
                        <button id="loginBtn" onClick={loginAttemptHardcode}>Login!</button>
                  </div>

                  <br></br>

                  <div id='infoTable'>
                    <p id='statement'>
                        Welcome to the login site!
                        Please enter username and password.
                    </p>
                  </div>
        </React.Fragment>
    );
}

var accounts = [
    {
        username: "a18ismca",
        password: "Syp9393",
    },
    {
        username: "root",
        password: "root",
    },
    {
        username: "iscat",
        password: "iscat",
    },
    {
        username: "admin",
        password: "password",
    },
    {
        username: "windows",
        password: "xp2001",
    },
]

var loginAttempts = 3;

function checkAttemptWithAccounts(){
    var getUsername = document.getElementById("username").value;
    var getPassword = document.getElementById("pwd").value;
    var i;
    for(i = 0; i < accounts.length; i++){
    if(getUsername === accounts[i].username && getPassword === accounts[i].password){
      return enterMenu();
    } else if (getUsername === null & getPassword === null){
        document.getElementById("statement").innerHTML = "Enter username and password before attempting to log in!"
    }
    
    else {

        if(loginAttempts == 1){
         return noAttemptsLeft();
        }
        else{
            loginAttempts=loginAttempts-1;
        }
        document.getElementById("statement").innerHTML = "Wrong username or password. Login attempts left: " + loginAttempts;
        document.getElementById("statement").style.color = "red";

    }
}
}

function loginAttemptHardcode(){
    var getUsername = document.getElementById("username").value;
    var getPassword = document.getElementById("pwd").value;
    if(getUsername === "a18ismca" && getPassword === "Syp9393"){
      return enterMenu();
    } 
    // If password AND username are empty, make a statement.
    else if (getUsername === "" && getPassword === ""){
        document.getElementById("statement").innerHTML = "Enter username and password before attempting to log in!"
    } 
    // If password is empty, make a statement.
    else if (getUsername.length > 0 && getPassword === ""){
        document.getElementById("statement").innerHTML = "Enter password before attempting to log in!"
    } 
    // If username is empty, make a statement.
    else if (getUsername === "" && getPassword.length !== ""){
        document.getElementById("statement").innerHTML = "Enter username before attempting to log in!"
    }  else{

        if(loginAttempts == 1){
         return noAttemptsLeft();
        }

        loginAttempts=loginAttempts-1;
        document.getElementById("statement").innerHTML = "Wrong username or password! Login attempts: " + loginAttempts;
        document.getElementById("statement").style.color = "#8b0000";
    }
}

function enterMenu(){
    document.getElementById("statement").innerHTML = "Redirecting you to the quiz menu..."
    document.getElementById("statement").style.color = "green";
    //location.replace("menu.html");
}

function noAttemptsLeft(){
    document.getElementById("statement").innerHTML = "No more attempts left to login!";
    
    var count = 59;
    var timer = setInterval(function(){
        if(count <= 0){
            clearInterval(timer);
            window.location.reload();
        }
        document.getElementById("statement").innerHTML = "No more attempts left to login! Retry in " + count + " seconds... ";
        count -=1;
    }, 1000);
    removeObjectsOnScreen();

}




function removeObjectsOnScreen(){
    document.getElementById("loginTable").remove();
    document.getElementById("header").remove();
}

export default Login;
