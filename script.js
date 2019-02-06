function updateSum() {
    for (i = 1; i <= 4; i++) {
        listNum = document.getElementsByClassName("player" + i + "_roll");

        console.log("Player " + i)
        console.log([...listNum][i].value);

        var sum = [...listNum].reduce((acc, currValue, currIndex, array) => {
            console.log(currValue.value);

            return parseInt(acc) + parseInt(currValue.value);

        }, 0);

        console.log(sum);

        document.getElementById("sum" + i).value = sum;
    }
}




for (let i = 1; i <= 4; i++) {
    let listNum = document.getElementsByClassName("player" + i + "_roll");
    for (let j = 0; j < listNum.length; j++) {
        listNum[j].addEventListener("blur", updateSum);
    }
}


window.onload = function () {
    document.getElementById("rolldicebutton").addEventListener("click", rolldice);

}

function rolldice() {
    for (let i = 1; i <= 5; i++) {
        if (!document.getElementById("checkbox" + i).checked == true) {
            document.getElementById("diceroll" + i).value = Math.floor(Math.random() * 6) + 1;
        }
    }
}

$(document).ready(function () {
    $("#apibutton").click(function () {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                addAPIinfo(data);

            }
        });
    });
});

