let testdiv = document.getElementById("testdiv");

var xmlhttp = new XMLHttpRequest();
var url = "movies.json";

let data;

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

console.log(data);
