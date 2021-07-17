
window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

//splash screen on load
function alertTimeout() {
	myMsg = "Welcome to ${MeSeeks}";
	myMSecs = 3000;
	let welcome = document.createElement("div");
	welcome.setAttribute("style","font-family: Verdana; font-size: 5em; color:royalblue; text-shadow: 2px 2px black; width: 100%;height: 100%; position: absolute;top:0;bottom:0;left:0;right:0;margin:auto;border: none; font-weight:bold;display: flex; align-items: center; justify-content: center; text-align: center; background: linear-gradient(to top, transparent 0%, royalblue 100%)");
	welcome.innerHTML = myMsg;
	setTimeout(function(){
	welcome.parentNode.removeChild(welcome);
	}, myMSecs);
	document.body.appendChild(welcome);
}

//Array with pre-made responses
let responses = [
	"I am just dandy, how are you?",
	"I flew in a helicopter",
	"Firetruck",
	"My grandma has a carpet on the wall",
	"I really feel like Tacos",
	"Winter is coming"
];

let input = document.getElementById("message");
let send = document.getElementById("send");
let responseContainer = document.getElementById("chat-body");

send.addEventListener("click", createAnswerRight);


function createAnswerLeft() {
	let answer = document.getElementById("answer-left");
	let answerLeft = answer.cloneNode(true);
	responseContainer.appendChild(answerLeft);
	i = Math.floor(Math.random() * 6);
	answerLeft.children[2].childNodes[0].textContent = responses[i];
};


function createAnswerRight() {
	let answer = document.getElementById("answer-right");
	let answerRight = answer.cloneNode(true);
	responseContainer.appendChild(answerRight);
	answerRight.children[2].childNodes[0].textContent = input.value;
	input.value = "";
	setTimeout(createAnswerLeft, 2000);
};

