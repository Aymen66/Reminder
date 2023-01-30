let tabs = document.querySelectorAll('[data-tab-target]')
let tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    let target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})
if (navigator.userAgent.match(/Android/i) && !sessionStorage.getItem('visited')) {
  alert('Welcome to my mobile website!');
  sessionStorage.setItem('visited', true);
}




let toDo = e => {
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  formData.push({
    activity : document.getElementById("activity").value,
    time : document.getElementById("time").value,
    date : document.getElementById("date").value,
    location : document.getElementById("location").value,
    


  });
  localStorage.setItem("formData",  JSON.stringify(formData));
  dispData();
  e.preventDefault();
  document.querySelector("form").reset();
document.getElementById("activity").focus();
  formData.pop();
}

function dispData(){
  console.log(localStorage.getItem("formData"))
  if(localStorage.getItem("formData")){
    // the data pushed to formData is stored in tbody
    var output = document.querySelector("tbody");
    output.innerHTML = "";
    JSON.parse(localStorage.getItem("formData")).forEach(data =>{
      output.innerHTML += `
      <tr >
      <td id="activity-js" >${data.activity}</td>
      <td>${data.time}</td>
      <td>${data.date}</td>
      <td>${data.location}</td>

      </tr>

      `
    })
  }
}dispData();


function deletebBtn(){
  let existingEntries = JSON.parse(localStorage.getItem("formData"));
  existingEntries.splice(-1, 1);
  localStorage.setItem("formData", JSON.stringify(existingEntries))

  
  
  dispData()
  


}

// JavaScript code for the search bar
// function search() {
// 	let input = document.getElementById('searchbar').value
// 	input=input.toLowerCase();
//     //  i tried to retrieve data from the table but it didnt work
// 	// let x = document.querySelector('table');  
	
//   // and then i tried to retrieve the data from formData But it didnt work 
// 	// let x = formData;  
//   // I also tried to get the data from the table and also from the div folder '#output ' in the html that contains the table but it didnt 
// 	let x = document.querySelector('table');
// 	for (i = 0; i < x.length; i++) {
// 		if (!x[i].innerHTML.toLowerCase().includes(input)) {
// 			x[i].style.display="none";
// 		}
// 		else {
// 			x[i].style.display="list-item";				
// 		}
// 	}
//   input=""
// }

// JavaScript code for the search bar
function search() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
let table = document.getElementById("output");
let row = table.getElementsByTagName("tr");
	for (i = 0; i < row.length; i++) {
		if (!row[i].innerHTML.toLowerCase().includes(input)) {
			row[i].style.display = "none";
		} else {
			row[i].style.display="block";				
		}
    
	}



}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}