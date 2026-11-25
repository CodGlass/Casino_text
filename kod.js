const table = ["🍒", "7", "🍋", "🍉", "🍇", "🍌", "💀"];
let money = 2000.00;
let money_zmiena = 0;
let monye_powone = 0;

function start() {
    const body = document.getElementById("body");
    body.innerHTML = 
    "<section>"+
        "<header></header>"+
        "<main>"+
            "<footer></footer>"+
            "<div>"+
                "<h1 id='1_slot_h1'></h1>"+
                "<h1 id='2_slot_h1'></h1>"+
                "<h1 id='3_slot_h1'></h1>"+
            "</div>"+
            "<aside><button onclick='graj()'>Garj</button></aside>"+
        "</main>"+
        "<footer></footer>"+
    "</section>"+
    "<table>"+
        "<tr>"+
            "<th colspan='3'><header></header></th>"+
        "</tr>"+
        "<tr id='tr'>"+
            "<td>Money: " + money + " zl</td>"+
            "<td>Money zmienia sie: " + money_zmiena + " zl</td>"+
            "<td>Ty powinien: " + monye_powone + " zl</td>"+
        "</tr>"+
        "<tr>"+
            "<td colspan='3'><button onclick='dodaj()'>dodaj 100.00 zl</button></td>"
        "</tr>"+
    "</table>";
}

function graj() {
    for(let i = 1; i < 4; i++){
        document.getElementById(i + "_slot_h1").innerHTML = table[Math.floor(Math.random() * table.length)];
    }
    if(document.getElementById("1_slot_h1").textContent == document.getElementById("2_slot_h1").textContent && document.getElementById("2_slot_h1").textContent == document.getElementById("3_slot_h1").textContent){
        if(document.getElementById("1_slot_h1").textContent == table[6]){
            money_zmiena = -(money);
            money += money_zmiena;
            alert("Smierc");
        }else{
            money_zmiena = 100.00;
            money += 100.00;
            alert(document.getElementById("1_slot_h1").textContent + document.getElementById("2_slot_h1").textContent + document.getElementById("2_slot_h1").textContent)
        }
    }else{
        money_zmiena = -10.50;
        money += money_zmiena;
    }
    update()
}

function dodaj() {
    money_zmiena = 100.00;
    money += money_zmiena;
    monye_powone += money_zmiena;
    update()
}

function update() {
    const tr = document.getElementById("tr");
    tr.innerHTML = 
    "<td>Money: " + money + " zl</td>"+
    "<td>Monye zmienia sie: " + money_zmiena + " zl</td>"+
    "<td>Ty powinien: " + monye_powone + " zl</td>";
}