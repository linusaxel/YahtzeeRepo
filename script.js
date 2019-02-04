document.addEventListener("DOMContentLoaded", function(event) {

    var message = document.getElementById("message-text");

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
    }


    });