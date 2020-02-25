// JavaScript source code
function validate() {
    var a = document.getElementById("t1").value;
    if (a == "") {
        alert("plz enterthe amount"); document.getElementById("t1").focus();
        return false;
    }
    var b = document.getElementById("t2").value;
    if (b == "" || b > 0 && b > 100) {
        alert("plz enterthe amount or if u enter it the paisa range should be 0 to 100"); document.getElementById("t2").focus();
        return false;
    }
    var b = document.getElementById("t3").value;
    if (b == "") { alert("please enter  your  first name"); document.details.t3.focus(); return false; }
    if (!/^[a-zA-Z]*$/g.test(document.details.t3.value)) {
        alert("Invalid characters");
        document.details.t3.focus();
        return false;
    }
    var b = document.getElementById("t4").value;
    if (b == "") { alert("please enter your last name"); document.details.t4.focus(); return false; }
    if (!/^[a-zA-Z]*$/g.test(document.details.t4.value)) {
        alert("Invalid characters");
        document.details.t4.focus();
        return false;
    }

    var b = document.getElementById("t5").value;
    if (b == "") {
        alert("please Enter your street address");
        document.getElementById("t5").focus();
        return false;
    }

    var b = document.getElementById("t6").value;
    if (b == "") {
        alert("please Enter your city");
        document.details.t6.focus();
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.details.t6.value)) {
        alert("Invalid characters");
        document.details.t6.focus();
        return false;
    }
    var b = document.getElementById("t7").value;
    if (b == "") {
        alert("please Enter your state");
        document.details.t7.focus();
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.details.t7.value)) {
        alert("Invalid characters");
        document.details.t7.focus();
        return false;
    }
    var b = document.getElementById("cntry");
    var country = b.options[b.selectedIndex].value;
    if (country == 0) {
        alert("Please select your country");
        document.getElementById("cntry").focus();
        return false;
    }

    var b = document.getElementById("t8").value;
    if (b == "") { alert("please enter your pincode"); }
    if (b.length < 6) {
        alert("Enter 6 digit number only");
        document.getElementById("t8").focus();
        return false;
    }

    var b = document.getElementById("t9").value;
    if (b == "") { alert("please enter your first name"); document.details.t9.focus(); return false; }
    if (!/^[a-zA-Z]*$/g.test(document.details.t9.value)) {
        alert("Invalid characters");
        document.details.t9.focus();
        return false;
    }
    var b = document.getElementById("t10").value;
    if (b == "") { alert("please enter your last name"); document.details.t10.focus(); return false; }
    if (!/^[a-zA-Z]*$/g.test(document.details.t10.value)) {
        alert("Invalid characters");
        document.details.t10.focus();
        return false;
    }
    var b = document.getElementById("t23").value;
    if (b == "") { alert("please enter your emailid"); }
    if (!isNaN(b)) {
        alert("Enter the emailid in correct format");
        document.getElementById("t23").focus();
        return false;
    }

}
function focus() {
    document.getElementById("t1").focus();
}
function movetoNext(current, nextFieldID) {
    if (current.value.length >= current.maxLength) {
        document.getElementById(nextFieldID).focus();
    }
    else {
        alert("please enter the 10 digit number in range of 0 to 9");
    }
}