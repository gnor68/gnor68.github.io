function inputokba() {
    let datumStr = "";
    let idoStr = "";
    let days = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "vasárnap"];

    most = new Date();

    year = most.getFullYear();
    month = most.getMonth();
    day = most.getDate();
    nameOfDay = most.getDay();

    hour = most.getHours();
    minute = most.getMinutes();
    sec = most.getSeconds();

    month = (1 + month) < 10 ? "0" + (1 + month) : (1 + month);
    day = day < 10 ? "0" + day : day;
    nameOfDay = days[nameOfDay];
    datumStr = year + "." + month + "." + day + ".";

    minute = minute < 10 ? "0" + minute : minute;
    sec = sec < 10 ? "0" + sec : sec;
    idoStr = hour + ":" + minute + ":" + sec + " ";

    strToDisplay = datumStr + "\n" + idoStr + "\n" + nameOfDay
    document.ora.di.value = strToDisplay;


    Timer = setTimeout("inputokba()", 1000);
}

function a(x, y, z) {
    let eredmény = x + y * z;  //--nem jó
    alert(eredmény);
}


function belépés() {
    let emailInput = document.querySelector("input[name='E-mail']");
    let sendemail = emailInput;
    let nameInput = document.querySelector("input[name='név']");
    let sendname = nameInput;

    let pwdInput = document.querySelector("input[name='pwd']");
    let sendpwd = pwdInput;

    let minInput = document.querySelector("input[name='min']");
    let sendmin = minInput;


    if (sendpwd.value != "") {

        let msg = ("a kódja:  " + sendpwd.value)
        let a = sendemail.value;
        let b = sendname.value;
        let c = sendpwd.value;
        let d = sendmin.value;

        let alertText = msg + "\n" + "\n" + a + "\n" + "\n" + b + "\n" + "\n" + c + "\n" + "\n" + d;

        alert(alertText);

        emailInput.value = "";
        nameInput.value = "";
        pwdInput.value = "";
        minInput.value = "";

    } else {
        alert("Nem adta meg a kódját!")
        emailInput.value = "";
        nameInput.value = "";
        pwdInput.value = "";
        minInput.value = "";
        return;
    }

}
 function massModify(selector, attr, val) {     
     let nodeList = document.querySelectorAll(selector);
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i][attr] = val;
    }
}
