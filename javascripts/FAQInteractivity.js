function main() {
    "use strict";
    
    //Get customer's name
    var customerName = document.getElementById("name").submit();
     alert ("Hi " + customerName);
    
    //Display the customer status
    if(document.getElementById('firstYes').checked){
        alert ("Hi " + customerName + ", welcome to Amazeriffic!");
    }
    else if (document.getElementById('firstNo').checked){
        alert ("Hi " + customerName + ", thanks for using our service!");
    }
}
$(document).ready(main);    