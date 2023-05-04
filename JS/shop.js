let varukorg = [];
let summa = 0;

function addpackage(pris, namn){
    
    console.log("namn: "+namn+" pris:"+pris)
    let table = document.querySelector(".items");

        let item = {
            v_pris: pris,
            v_namn: namn
        }

        varukorg.push(item);
        console.log(varukorg);

    var row1 = document.createElement("tr");
    var cell1_1 = document.createElement("td");
    var cell1_2 = document.createElement("td");
    cell1_1.innerHTML = namn;
    cell1_2.innerHTML = pris;

        summa = summa + pris;

    row1.appendChild(cell1_1);
    row1.appendChild(cell1_2);
    table.appendChild(row1);

    let payment = document.querySelector("#sum");
    payment.innerHTML = summa;
    if(varukorg.length != 0){
        let item_register = document.querySelector("#item-list");
        item_register.style.display = "flex";
    
    }
    }

    
 
