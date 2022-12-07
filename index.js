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
      <tr>
      <td>${data.activity}</td>
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
function search() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
    //  i tried to retrieve data from the table but it didnt work
	// let x = document.querySelector('table');  
	
  // and then i tried to retrieve the data from formData But it didnt work 
	// let x = formData;  
  // I also tried to get the data from the table and also from the div folder '#output ' in the html that contains the table but it didnt 
let x = document.getElementById("output")
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}
