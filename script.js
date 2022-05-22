// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 3000);
// console.log(3);
// console.log(4);
// console.log(5);
// setTimeout(() => {
//   console.log(6);
// }, 3000);

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Done after 3 seconds");
//     resolve("Job is Done");
//     reject("Some went wronge!");
//   }, 3000);
// });

// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let myPromise = new Promise((resolve, reject) => {
//   let x = {
//     name: "ahmad",
//   };

//   // some code (try to change x to 5)
//   if (x) {
//     resolve({ x, msg: "works" });
//   } else {
//     reject("Error");
//   }
// });
// myPromise
//   .then((m) => {
//     console.log(m.x, "------", "The message " + m.msg);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// console.log("START");
// async function getData() {
//   console.log("get data");
//   let data = await fetch("https://api.thecatapi.com/v1/images/search")
//     .then((response) => response.json())
//     .then((data) => data)
//     .catch((err) => {
//       console.log(err);
//     });
//   console.log(data);
// }
// console.log("END");

// let jsonStr = '{"name":"John", "age":30, "car":null}';
// let object = JSON.parse(jsonStr);
// console.log(object.name);

async function updateDoc() {
  let data = await fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((d) => {
      console.log(JSON.parse(d));
      return JSON.parse(d);
    });
  console.log("data inside update", data);
  let bodyEle =
    (document.body.innerHTML += `<img src=${data[0].url} alt="cat Img" >`);
}

