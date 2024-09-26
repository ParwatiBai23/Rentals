// Copyright (c) 2024, BWH and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Driver", {
// 	refresh(frm) {

// 	},
// });

// function getDriverWithAuth() {
//     frappe.call({
//         method: "GET",
//         url: `http://parwati.local:8002/api/v2/document/Driver/DR-002`,
//         headers: {
//             "Authorization": "token 872123cb477c4ea:9a19ce68af67937" 
//         },
//         callback: function(response) {
//             console.log("Driver API key authentication:", response.message);
//         }
//     });
// }



// GET
// const url = `http://parwati.local:8002/api/v2/document/Driver`;
// fetch(url, {
//     method: 'GET',
//     headers: {
//       "Authorization": "token 872123cb477c4ea:b1858b5dc26540a",
//       "Content-Type": "application/json"
//     },
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// POST
// const posturl = `http://parwati.local:8002/api/v2/document/Driver`;
// let postdata = {
//   "doctype": "Driver",
//   "first_name": "John",
//   "last_name":"Doe",
//   "license_number": "ABC123456"
// };
// fetch(posturl, {
//   method: 'POST',
//   headers: {
//     "Authorization": "token 872123cb477c4ea:b1858b5dc26540a",
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(postdata)
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// PUT
// const puturl = `http://parwati.local:8002/api/v2/document/Driver/DR-016`;
// let putdata = { "First Name": "Priya", "Last Name": "Chouhan", "License Number": "DHK2334" };
// fetch(puturl, {
//   method: 'PUT', 
//   headers: {
//     "Authorization": "token 872123cb477c4ea:b1858b5dc26540a",
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(putdata)
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// // DELETE
// const deleteurl = `http://parwati.local:8002/api/v2/document/Driver/DR-016`;
// fetch(deleteurl, {
//   method: 'DELETE',
//   headers: {
//     "Authorization": "token 872123cb477c4ea:b1858b5dc26540a"
//   }
// })
//   .then(response => {
//     if (response.ok) {
//       console.log("Record is deleted");
//     } else {
//       console.log("Record is not deleted");
//     }
//   })
//   .catch(error => {const posturl = `http://parwati.local:8002/api/v2/document/Driver`;
// let postdata = { "First Name": "Priya", "Last Name": "Chouhan", "License Number": "DHK2334" };
// fetch(posturl, {
//   method: 'POST',
//   headers: {
//     "Authorization": "token 872123cb477c4ea:b1858b5dc26540a",
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(postdata)
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// // PUT
// const puturl = `http://parwati.local:8002/api/v2/document/Driver/DR-016`;
// let putdata = { "First Name": "Priya", "Last Name": "Chouhan", "License Number": "DHK2334" };
// fetch(puturl, {
//   method: 'PUT', 
//   headers: {
//     "Authorization": "token 872123cb477c4ea:b1858b5dc26540a",
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(putdata)
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// delete
const deleteurl = `http://parwati.local:8002/api/v2/document/Driver/DR-016`;
fetch(deleteurl, {
  method: 'DELETE',
  headers: {
    "Authorization": "token 872123cb477c4ea:b1858b5dc26540a"
  }
})
  .then(response => {
    if (response.ok) {
      console.log("Record is deleted");
    } else {
      console.log("Record is not deleted");
    }
  })
  .catch(error => {
    console.log(error);  
  });

