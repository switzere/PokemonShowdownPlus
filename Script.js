//document.body.textContent = "";

var m1,m2,m3,m4;
//var div = document.createElement('div');



var observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    
	
	var oldWord = word;
	
	try{
		var noMax = document.getElementsByClassName('movebuttons-nomax')[0].querySelectorAll("button");
		m1 = noMax[0].getAttribute("data-move");
		m2 = noMax[1].getAttribute("data-move");
		m3 = noMax[2].getAttribute("data-move");
		m4 = noMax[3].getAttribute("data-move");
	//tempWord = noMax.querySelectorAll("button")[0].getAttribute("data-move");
	}
	catch(err){
		try{
			var cantMax = document.getElementsByClassName('movemenu')[0].querySelectorAll("button");
			m1 = cantMax[0].getAttribute("data-move");
			m2 = cantMax[1].getAttribute("data-move");
			m3 = cantMax[2].getAttribute("data-move");
			m4 = cantMax[3].getAttribute("data-move");
		}
		catch(err){}
	}
	
	word = m1 + m2 + m3 + m4;
	console.log(oldWord + " - " + word);
	
	if( oldWord !== word && word){
	
		var OBbattleControls = document.getElementsByClassName('battle-log')[0];
		var OBcalc = document.createTextNode(word);
		OBbattleControls.appendChild(OBcalc);
		var div = document.createElement("div"); 
		document.getElementsByClassName('controls')[0].appendChild(div); 
		div.innerText = "test123";
	
	//document.body.appendChild(newDiv);
	//div.innerText = "testing";

	}
	
	
  });
});
observer.observe(document.getElementsByClassName('battle-controls')[0], {
  childList: true,
  subtree: true
});


var tempWord = "t";

try{
	var noMax = document.getElementsByClassName('movebuttons-nomax')[0].querySelectorAll("button");
	m1 = noMax[0].getAttribute("data-move");
	m2 = noMax[1].getAttribute("data-move");
	m3 = noMax[2].getAttribute("data-move");
	m4 = noMax[3].getAttribute("data-move");
	//tempWord = noMax.querySelectorAll("button")[0].getAttribute("data-move");
	
	
}
catch(err){}


var x,y;
var word = "test";
try{
	if(x = document.getElementsByClassName('type-Flying has-tooltip')){
		//x[0].'data-move' = "Garbage";
		//var temp = x[0];
		//temp['data-move'] = 'test';
		x[0].value = 2;
		word = x[0].getAttribute("data-move");
		//word = x[0].setAttribute("data-move","Dumb");
	}	
}
catch(err){}

//word = word + tempWord;
word = m1 + m2 + m3 + m4;

var header = document.createElement('h1');
header.textContent = word;
document.body.appendChild(header);

$(function displayCalc() {
	var battleControls = document.getElementsByClassName('battle-controls')[0];
	var calc = document.createTextNode(word);
	battleControls.appendChild(calc);
});



//x[0].move = "Hello World!";

$(function blue() {
	$("body").css("background","blue");
});