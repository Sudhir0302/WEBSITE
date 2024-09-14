const call =()=>{
    console.log("This is arrow functionnnnnnnn!!!!")
}
let a=[1,2,3]

const call1 = ()=>{
    const a1=a.filter(function(num){
        return num>=2;
    });
    console.log(a1);
} 

const c =()=>{
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
c()
// call();
// call1();