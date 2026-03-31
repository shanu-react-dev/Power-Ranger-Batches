console.log("promise");

// const firstPromise = new Promise((resolve, reject)=>{
//     // console.log(resolve)
//     // console.log(reject)
//     let isFulfilled = false
//     if(isFulfilled) {
//         resolve("Your promise got fulfilled now you can visit your profile")
//     }else{
//         reject("Your promise got rejected due to some issues. Page not found 404. Please try again later")
//     }
// })
// console.log(firstPromise)
// firstPromise.then(function (data) {
//     console.log(data)
// })
// firstPromise.catch(function (err){
//     console.log(err)
// })

// then and catch chain
// new Promise((res, rej) => {
//   let isAvailabale = false;

//   if (isAvailabale) {
//     // console.log("Congratulations you got the data")
//     res("Congratulations you got the data");
//   } else {
//     rej("Page not found!! server error");
//   }
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log(
//       "Your promise got resolved check whether it's been completed or not!!",
//     );
//   });


let fetchData =  window.fetch("https://api.githucom/users/Stack-Sculptor-Shanu")
// console.log(fetchData)

// let jsData = fetchData.then(function (data) {
//     console.log(data)
//     return data.json()
// })
// console.log(jsData)

// let finalData = jsData.then(function (myData) {
//     console.log(myData)
//     return myData
// })
// console.log(finalData)

fetchData.then((data) => {
    return data.json()
}).then((data)=>{
    console.log(data)
}).catch((err) => {
    console.log(err.message)
})