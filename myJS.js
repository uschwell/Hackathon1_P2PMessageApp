

//we use an array to store the devices we are able to see/connect to 
const fakePhones=["UrisPhone","Rina Cell","RandomStranger227","HomeNetWork"];



function connectClick(){
	let temp = document.getElementById("sidebarList");
	//first, we erase the previous list before we create a new one (saving the button)
	let toSave=temp.firstChild;
    while (temp.firstChild) {
        temp.removeChild(temp.firstChild);
    }

    //we run the spinner while searching
    connectAnimation(temp);

}

function createList(){
		let temp = document.getElementById("sidebarList");
	    //we return the button <div> to our Sidebar
	    let newConnect = document.createElement("BUTTON");
	    newConnect.addEventListener('click', connectClick);
		newConnect.setAttribute("class", "btn btn-secondary");
		newConnect.innerHTML='Connect';
		temp.appendChild(newConnect);

		for(let i=0;i<fakePhones.length;i++){
			let newDIV = document.createElement("DIV");
			newDIV.addEventListener('click', click_handler);
			newDIV.setAttribute("class", 'list-group-item list-group-item-action list-group-item-light p-3');
			newDIV.setAttribute("style", 'text-align: center');
			newDIV.innerHTML=(fakePhones[i]);
			temp.appendChild(newDIV);
		}
	}



function click_handler(e){
	console.log("You clicked me!");
}





function connectAnimation(divLocation){

	let newTemp=document.createElement("DIV");
	newTemp.classList.add('newTempClass')
	let loadText=document.createElement("DIV");
	loadText.setAttribute('style','text-align: center');
	loadText.innerHTML='Loading';

	newTemp.innerHTML=`<div class="d-flex justify-content-center"><div class="spinner-border" role="status">
	<span class="sr-only"></span>  </div></div>`;
	divLocation.appendChild(newTemp);
	divLocation.appendChild(loadText);

    setTimeout(function () {
    	divLocation.removeChild(loadText);
    	divLocation.removeChild(newTemp);
    	newTemp.innerHTML='';
    	createList();
    }, 3000);
    console.log("I waited");
	  //divLocation.removeChild(divLocation.lastChild);
}