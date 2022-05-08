const fetchData = async()=>{

    console.log('a');
    console.log('b');
    await new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('c')
            resolve();
        }, 3000);
    })
    
    await new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('d')
            resolve();
        }, 0);
    })
    
    console.log('e');
}

fetchData();