// window.fetch("https://api.gitb.com/users").then((data)=>{
//     return data.json()
// }).then((finalData)=>{
//     console.log(finalData)
// }).catch((err)=>{
//     console.log(err.message)
// })

async function fetchData() {
  try {
    let data = await fetch("https://api.gitb.com/users");
    console.log(data);
    let finalData = await data.json();
    console.log(finalData);
  } catch (err) {
    console.log(err.message);
  }
}

fetchData();
