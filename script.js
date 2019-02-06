function updateSum() {
    for (let i = 1; i <= 4; i++) {

        let listNum = document.getElementsByClassName("player" + i + "_roll");

        var sum = 0;

        for (let i = 0; i < listNum.length; i++) {

            if (listNum[i].value != "") {
                sum = sum + parseInt(listNum[i].value);
            }
        }
        document.getElementById("sum" + i).value = sum;
    }
    console.log("awd");
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
    if ($("#turn").val() <= 4 && $("#rollsLeft").val() > 0){
        for (let i = 1; i <= 5; i++) {
            if (!document.getElementById("checkbox" + i).checked == true) {
                document.getElementById("diceroll" + i).value = Math.floor(Math.random() * 6) + 1;
            }
        }
        $("#rollsLeft").val(parseInt($("#rollsLeft").val()) - 1);
        if ($("#rollsLeft").val() == 0 && $("#turn").val() != 4) {
            $("#rollsLeft").val(3);
            $("#turn").val(parseInt($("#turn").val()) + 1);
            for (let i = 1; i <= 5; i++) {
                document.getElementById("checkbox" + i).checked = false;
            }
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

