
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



   // sum_upperhalf("sumuppercolumn1")
    function sum_upperhalf(){
        let listNum = document.getElementsByClassName("sumuppercolumn1");
        var sum=0;
        for(i=0;i<listNum.length;i++) {
            if (listNum[i].value != ""){
                sum = sum + parseInt(listNum[i].value);
            }
        }     
        document.getElementById("sum1").value = sum;
        
    }

    
    let listNum = document.getElementsByClassName("sumuppercolumn1");
    for(i=0;i<listNum.length;i++) {
        listNum[i].addEventListener("blur", sum_upperhalf);
    }     
    //sum_upperhalf("sumuppercolumn1"); 
