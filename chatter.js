window.onload = pageLoad;

var timer = null;
var username= "";
var count_state = 0
var state_text = ""
function pageLoad(){
	var x = document.getElementById("submitmsg");
	x.onclick = sendMsg;
	var x = document.getElementById("clickok")
	x.onclick = setUsername;
	
}

function setUsername(){
	//add your code here
	//get username and show username
	var userInput = document.getElementById("userInput").value
	document.getElementById("username").innerHTML = userInput
	username = userInput
	timer = setInterval (loadLog, 3000);//Reload file every 3000 ms
	document.getElementById("submitmsg").disabled = false;
	document.getElementById("clickok").disabled = true;
}

function loadLog(){
	readLog();
}

function sendMsg(){
	//get msg
	var text = document.getElementById("userMsg").value;
	document.getElementById("userMsg").value = "";
	writeLog(text);
}

function writeLog(msg){
	//add your code here
	var x = document.getElementById("chatbox")
	var http = new XMLHttpRequest(); 
	url = "writeLog.php?data=" + msg + "&name=" + username + "&msg=" + msg
	http.open("GET", url)
	http.onload = () =>{
		postMsg(http.responseText)
	}
	http.onerror = () => alert("Error")
	http.send()
}

function readLog(){
	//add your code here
	var http = new XMLHttpRequest(); 
	http.open("GET", "readLog.php")
	http.onload = () =>{
		postMsg(http.responseText)
	}
	http.onerror = () => alert("Error")
	http.send()
}

function postMsg(msg){
	var x = document.getElementById("chatbox");
	count_state += 1
	if(count_state == 1){
		var data = document.createElement("p")
		state_text = msg
		data.innerHTML = msg
		x.appendChild(data)
	}
	if(msg != state_text){
		count_state = 0
	}
	checkScroll();
}

function checkScroll(){
	var chatbox = document.getElementById('chatbox');
	var scroll = chatbox.scrollTop+chatbox.clientHeight === chatbox.scrollHeight;
	if (!scroll) {
    	chatbox.scrollTop = chatbox.scrollHeight;
  	}
}
