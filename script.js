
/*var message = document.getElementById("message-text");

console.log(message);

var oldText = message.innerHTML;
var bla = oldText;
console.log(oldText);

message.innerHTML="This is another message";
message.style.color = "004301";
 
document.body.style.backgroundColor = "#b8fcc7";

var input = document.getElementById("input-box").value;

console.log(input);

var person = {
    name: "Linus",
    age: "24",
    profession: "Software Developer"
}

console.log(person);

console.log(areaRectangle(5, 6));

function areaRectangle (width, height) {
    return width*height;
}*/


/*for (i = 1; i <= 4; i++) {
    let playerRolls = document.getElementsByClassName("player" + i +"_roll");
    
}*/

function updateSum() {
    for (i = 1; i <= 4; i++) {
        listNum = document.getElementsByClassName("player" + i +"_roll");
        console.log("abc");
        var sum = 0;
        for (i = 0; i < listNum.length; i++) {
        if (listNum[i].value != "") {

            sum = sum + parseInt(listNum[i].value);
        }

        }
        document.getElementById("sum1").value = sum;
    }
    console.log("awd");
}

for (let i = 1; i <= 4; i++) {
    let listNum = document.getElementsByClassName("player" + i +"_roll");

    for (let j = 0; j < listNum.length; j++) {
        listNum[j].addEventListener("blur", updateSum);
    }
}
   
