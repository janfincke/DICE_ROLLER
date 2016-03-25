    array = [];
    
    /*random number generator*/
    function roll() {           
      var total	= 0;
      var dieSides = parseInt(document.object.onedice.value, 10);
      var numberOfDice = parseInt(document.object.manydice.value, 10);
      var bonus	= parseInt(document.object.bonus.value, 10) || 0;
	    
      for (var i = 0; i < numberOfDice; i++){
		    total += Math.ceil(Math.random() * dieSides);
	    }
      
    /*ring buffer*/      
      var input = total + bonus; 
      
      if (array.length<10)            /*if less than 10, add a roll to array*/
      {
        array.push(input);            
      }    
      else                           /*else remove last value and add next roll to array*/
      {
        array.push(input);
        array.shift();
      }
      
      if (document.getElementById("onedice").value == "" || document.getElementById("onedice") == isNaN || document.getElementById("manydice").value == "" || document.getElementById("manydice") == isNaN) {
        alert("Please enter numerical values!");
      }
      else
        document.getElementById("history").innerHTML = array;
	      document.getElementById("result").innerHTML = total + bonus;
               
    }
    
    /*insert values to text fields by pressing a button*/
    function roll2() {
      document.getElementById("manydice").value = "1";
      document.getElementById("onedice").value = "2"; 
    }
    function roll3() {
      document.getElementById("manydice").value = "1";
      document.getElementById("onedice").value = "3"; 
    }
    function roll4() {
      document.getElementById("manydice").value = "1";
      document.getElementById("onedice").value = "4"; 
    }
    
    function roll6() {
      document.getElementById("manydice").value = "1";
      document.getElementById("onedice").value = "6"; 
    }
    function roll10() {
      document.getElementById("manydice").value = "1";
      document.getElementById("onedice").value = "10"; 
    }
    function roll12() {
      document.getElementById("manydice").value = "1";
      document.getElementById("onedice").value = "12"; 
    }
    function roll20() {
      document.getElementById("manydice").value = "1";
      document.getElementById("onedice").value = "20"; 
    }
    function roll100() {
      document.getElementById("manydice").value = "1";
      document.getElementById("onedice").value = "100"; 
    }

  /*clears text and result fields*/    
    function clean() {
      document.getElementById("bonus").value = "";
      document.getElementById("result").innerHTML = "";
      document.getElementById("manydice").value = "";
      document.getElementById("onedice").value = "";
      
    }
    


