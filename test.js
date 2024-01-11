//-----------------------------promise --------------------------------------------//

let promiseOne=new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('promise one is running')
        //reject()
        resolve({user:"manjeet",id:56413})
    }, 2000);

})
promiseOne.then((user)=>{console.log(user)})
          .catch(()=>{console.log('promise is rejected')})
          .finally(()=>{console.log('promise is completed')})


//-------------------------promise.all()---------------------------------//

const urls=['https://api.publicapis.org/entries','https://api.publicapis.org/entries']

const promises=urls.map((url)=>{return fetchdata(url)})

async function fetchdata(url){
    let dataa=await fetch(url)
    let jsondata=await dataa.json()
    return jsondata
}


let getdata=async function(){
  await  Promise.all(promises).then((data)=>{console.log('data',data)}).catch((error)=>{console.log(error)})
}
//getdata()