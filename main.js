let testdiv = document.getElementById("testdiv");

let jsonData;

//let jsonFile = "http://moodyssbm.github.io/movies.json";
let jsonFile = "movies.json";

function loadJSON(callback) {
	let xobj = new XMLHttpRequest();

	xobj.overrideMimeType("application/json");
	xobj.open("GET", jsonFile, true);
	xobj.onseadystatechange = function () {
		if(xobj.readyState == 4 && xobj.status == "200") {
			callback(xobj.responseText);
		}
	};

	xobj.send(null);
}

window.onload = function() {
	loadJSON(function(response) {
		jsonData = JSON.parse(response);
	});

	testdiv.innertext = jsonData;
};
