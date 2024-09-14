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
APIDATA()