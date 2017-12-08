let keys = Object.keys(db);
let tableDiv = document.getElementById("tableDiv");

keys.sort();

function getBgColor(val) {
    if(val) {
        return "green";
    } else {
        return "red";
    }
}

tableDiv.innerHTML += "<tr> <th>Name</th> <th>Format</th> <th>Halloween Special</th> <th>Christmas Special</th> <th>Played</th> </tr>";

for(i=0; i!=keys.length; i++) {
    tableDiv.innerHTML += "<tr>" + "<td>" + db[keys[i]].tapeName + "</td>" + "<td>" + db[keys[i]].format + "</td>" + "<td bgcolor=\"" + getBgColor(db[keys[i]].isHorror) + "\">" + db[keys[i]].isHorror + "</td>" + "<td bgcolor=\"" + getBgColor(db[keys[i]].isXmas) + "\">" + db[keys[i]].isXmas + "</td>" + "<td bgcolor=\"" + getBgColor(db[keys[i]].played) + "\">" + db[keys[i]].played + "</td>" + "</tr>";
}