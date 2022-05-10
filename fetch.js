let fetch = async () => {
    try {
        let data = await window.fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        let finaldata = await data.json()
        console.log(finaldata)
    
        finaldata.map(data => {
            let mydata = document.createElement("div");
            mydata.innerHTML = `name: ${data.name} id:${data.id}`
            document.body.appendChild(mydata)
        })
    } catch (error) {
        console.log(error)
    }
}
fetch();
