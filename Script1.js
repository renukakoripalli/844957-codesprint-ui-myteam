// JavaScript source code
function save() {

    orders = [];

    if (localStorage.getItem("orders")) {

        orders = JSON.parse(localStorage.getItem("orders"));
    }



    let buyer_name = document.getElementById("t9").value + " " + document.getElementById("t10").value;
    let address = document.getElementById("t5").value + "\n" + document.getElementById("t6").value + "\n" +
        document.getElementById("t7").value + "\n" + document.getElementById("t8").value + "\n" + document.getElementById("pin").value;
    let city = document.getElementById("t6").value;
    let cost = document.getElementById("t1").value + "." + document.getElementById("t2").value;
    let phone = document.getElementById("t11").value + "" + document.getElementById("t12").value + "" + document.getElementById("t13").value + "" +
        document.getElementById("t14").value + "" + document.getElementById("t15").value + "" + document.getElementById("t16").value + "" +
        document.getElementById("t17").value + "" + document.getElementById("t18").value + "" + document.getElementById("t19").value + "" +
        document.getElementById("t20").value + "" + document.getElementById("t21").value;
    //alert("test")
    //console.log(buyer_name)
    //console.log(address)
    //console.log(city)
    //console.log(cost)
    //console.log(phone)

    let obj = {
        bname: buyer_name,
        shipaddr: address,
        shipcity: city,
        giftcost: cost,
        mobile: phone

    };

    orders.push(obj);

    localStorage.setItem("orders", JSON.stringify(orders));


}

function get() {
    //var orders = [];
    let orders = JSON.parse(localStorage.getItem("orders"));

    var table = document.getElementById("mybody");
    for (let i = 0; i < orders.length; i++) {
        var row = '<tr> <td>' +
            (i + 1) +
            '</td> <td>' +
            orders[i].bname +
            '</td> <td>' +
            orders[i].shipaddr +
            ' </td><td>' +
            orders[i].shipcity +
            '</td><td>' +
            orders[i].giftcost +
            '</td><td>' +
            orders[i].mobile +
            ' </td></tr>';
        table.innerHTML += row;
    }

}




