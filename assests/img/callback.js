async function API(){
    try {
        const response=await fetch('https://66e526eb5cc7f9b6273c6bf5.mockapi.io/register')
        const data =await response.json();
        // console.table(data);
        return data;
    } catch (error) {
        console.log("error"); 
    }
}

async function APIDATA() {
    const apidata= await API()
    // console.log(apidata)
    const map=apidata.map((data)=>{console.log(data)})
    const mockdata =[{
        "name": "hello"
    }]
    const map1=mockdata.map((data)=>{console.log(data)})
    console.log(map1);
}
// APIDATA()

function Pro(){
    return new Promise((resolve,reject) => {
        const x=true;
        setTimeout(()=>{
            if(x){
                resolve("Success")
            }
            else{
                reject("error")
            }
        },3000)
    })
}

// async function datax() {
//     try{
//         const response=await Pro()
//         console.log(response)
//     }catch(e){
//         console.log(e);
//     }
// }
// datax()
//instead of using the above method we can use .then method

Pro()
  .then(r => {
    console.log(r+" hello"); // Will log "Success" after 3 seconds
  })
  .catch(error => {
    console.log(error); // Will log "error" if `x` was `false`
  });
