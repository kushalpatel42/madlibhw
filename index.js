function createParagraph(){
    var wordOne = document.getElementById('wordOne').value;
    // var wordTwo = document.getElementById("wordTwo").value;


var paragraph = "<p> Today, every student has a computer small enough to fit into his  " + wordOne +" .</p>" ;


document.getElementById("answer").innerHTML = paragraph;
}

