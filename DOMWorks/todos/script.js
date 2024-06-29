
// fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>displayTodos(data))



getData()
 async function getData(){

    let response = await fetch("https://jsonplaceholder.typicode.com/todos")

    let data = await response.json()

    displayTodos(data)
 }



 function displayTodos(todos){

    let htmlData=``

    for(let t of todos){

        htmlData += `
        
            <div class="col-4">


                <div class="card" style="width: 18rem;">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">${t.title}</li>
                    <li class="list-group-item">${t.completed}</li>
                  </ul>
                </div>


                
            </div>
        
        `

    }

  document.querySelector("#root").innerHTML=htmlData
}