const apiUrl = "https://api.spacexdata.com/v3/cores"

const ul = document.getElementById ("ul");

fetch(apiUrl)
.then ((response) => {
if (!response.ok) {
throw new Error ("Networ response wasn't OK")
    
} return response.json();
}).then ((data) => {

for (let index = 0; index < data.length; index++) {
const item = data[index]

const li = document.createElement("li")




      li.innerHTML = `
      
      <h2> ${item.core_serial || "ვერ მოიძებნა"} </h2>
      <h3> ${item.original_launch || "ვერ მოიძებნა"} </h3>
      <p>  ${item.details || "ვერ მოიძებნა"} </p>
      
      
      `

      ul.appendChild(li)
    
  }


}) .catch((error) => {
  console.error ("Fetching error:" , error.message)
})