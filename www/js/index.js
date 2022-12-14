/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

const credentials = {
    "ismael":{"password": "hola","email": "hola"},
    "bruce": {"password": "bruce","email": "bruce"}
};

function fer_login(){
    let username = document.getElementById("login_user").value;
    let password = document.getElementById("login_pwd").value;
    
    if (Object.keys(credentials).includes(username) && credentials[username].password === password ) {
        alert("You are logged in")
    } else {
        alert("Incorrect username or password")
        document.getElementById("login_user").value = "";
        document.getElementById("login_pwd").value = "";
    }
}

function registra(){
    let username = document.getElementById("register_user").value;
    let password = document.getElementById("register_pwd").value;
    let re_password = document.getElementById("re_pwd").value;
    let email = document.getElementById("register_email").value;

    console.log(credentials)

    if (Object.keys(credentials).includes(username)){
        alert("Username already exists")
        document.getElementById("register_user").value = "";
    } else {
        if(password !== re_password){
            alert("Passwords do not match")
            document.getElementById("register_pwd").value = "";
            document.getElementById("re_pwd").value = "";
        } else {
            credentials[username] = {"password": password, "email": email}
            localStorage.setItem('credentials', JSON.stringify(credentials));
            alert("You registered successfully")
            document.getElementById("register_user").value = "";
            document.getElementById("register_pwd").value = "";
            document.getElementById("re_pwd").value = "";
            document.getElementById("register_email").value = "";
        }    
    }
    

    
}

