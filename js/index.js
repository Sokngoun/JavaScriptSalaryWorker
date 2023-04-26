
   for(var i=0;i<100;i++){
      document.write("<p>Dara</p>");
   }
    document.getElementById('display').innerText = "Dara";


    function PostIt(){
        var status = document.getElementById('status').value;
        // var oldst = document.getElementById('display_status').innerHTML;
        document.getElementById("display_status").innerHTML = status + "<br/>";
        document.getElementById('status').value = "";
    }
    function Copy(){
        var copy = document.getElementById('data1').value;
        document.getElementById('data2').value = copy;

    }
    const buttonPrintOrSaveDocument = document.querySelector(
  ".button-print-or-save-document"
)
var getClass =document.getElementsByClassName("example");
getClass[0].innerHTML ="Dara";
getClass[1].innerHTML ="Dara"

function printOrSave() {
  window.print()
}

buttonPrintOrSaveDocument.addEventListener("click", printOrSave);