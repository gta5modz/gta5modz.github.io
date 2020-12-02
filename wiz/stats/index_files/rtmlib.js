function isString(o) {
    return typeof o == "string" || (typeof o == "object" && o.constructor === String);
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

var RTMKey = "";
function getRTMKey() {
	return RTMKey;
}
function setRTMKey(val) {
	RTMKey = val;
}
function sendDataResponse(text) {
	alert(text);
}
function sendData(text) {
	//var call = "/server/RTMAPI.php?rtmkey=" + RTMKey + "&rtmdata=" + text;
	var call = "/server/gtartm.php?setData=true&RTMKey=" + RTMKey + "&RTMData=" + text; 
	httpGetAsync(call,sendDataResponse);
}


function executeFunction(functionid, ...parameters) {
	var text = "" + functionid + ";";
	for (let i=0; i<parameters.length; i++) {
		var o = parameters[i];
		if (isString(o)) {
			var str = o.replace(/ /g, ',').replace(/;/g, ',');//replace spaces with commas so they can be sent in a get statement. Commas are converted to spaces when the server receives them. Also, ';' needs to be removed so any ';' in strings are just converted to spaces
			text = text + str + ";";
		}
		else {
			text = text + o + ";";
		}
	}
	sendData(text);
}

function nullFunction() {
	executeFunction(0);
}

function dialog( text) {
	executeFunction(1, text);
}

function teleportPlayer( name,  x,  y,  z) {
	executeFunction(2, name, x, y, z);
}

function spawnVehicle( name,  vehicleName) {
	executeFunction(3, name, vehicleName);
}

function killPlayerAnonymous( name) {
	executeFunction(4, name);
}

function killPlayer( name,  killer) {
	//makes killer kill name
	executeFunction(5, name, killer);
}

function moneyDrop( name, mode) {
	//mode:
	//0: off
	//1: on
	//2: toggle
	executeFunction(6, name, mode);
}

function spawnObjectXYZ( objectName,  x,  y,  z) {
	executeFunction(7, objectName, x, y, z);
}

function spawnObjectOnPlayerWithOffset( objectName,  x,  y,  z,  playerName) {
	executeFunction(8, objectName, x, y, z, playerName);
}

function teleportPlayerToPlayer( name,  playerToTeleportTo) {
	executeFunction(9, name, playerToTeleportTo);
}

function setPlayerRank( name, rank) {
	executeFunction(10, name, rank);
}

function playerAnimation( name,  animationDictionary,  animationName) {
	executeFunction(11, name, animationDictionary, animationName);
}

function clearTask( name) {
	executeFunction(12, name);
}

function setStat( name, statHash, value) {
	executeFunction(14, name, statHash, value);
}

function removeWantedLevel( name) {
	executeFunction(15, name);
}

function sendText(name, message) {
	executeFunction(16, name, message);
}

function kickPlayer(name) {
	executeFunction(17, name);
}
