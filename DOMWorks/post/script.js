
// fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data=>displayPost(data))


getData()
async function getData(){

    let response = await fetch("https://jsonplaceholder.typicode.com/posts")

    let data = await response.json()

    displayPost(data)
}



function displayPost(posts){

    let htmlData=``

    for(let p of posts){

        htmlData+=`
        
        <div class="col-4">

                  <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${p.title}</h5>
                  <p class="card-text">${p.body}</p>
                </div>
              </div>
                              
         </div>        
        
        `
    }
    document.querySelector("#root").innerHTML=htmlData
}