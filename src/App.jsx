// import React, { useState } from 'react';
// import logo from "./logo.svg";
// import "./App.css";
// import { getDatabase, ref, child, get, set } from "firebase/database";
// import { database } from "./firebase";
// function App() {
//   const dbRef = ref(database);

//   get(child(dbRef, `users`))
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val());
//         //object
//         console.log(typeof(snapshot.val()));
//       } else {
//         console.log("No data available");
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });

// set(child(dbRef, `users/3`), {
//   id: 3,
//   username: "Thanh Trúc 2",
// });

// var firebaseRef = getDatabase.database().ref('https://data-web-76487-default-rtdb.firebaseio.com');
// const handleDeleteClick = () => {
//   firebaseRef
//     .child("fieldToRemove")
//     .remove()
//     .then(function () {
//       console.log("Dữ liệu đã được xóa thành công.");
//     })
//     .catch(function (error) {
//       console.error("Lỗi khi xóa dữ liệu:", error);
//     });
// }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//         {/* <button onClick={handleDeleteClick}>Click</button> */}
//       </header>
//     </div>
//   );
// }

// export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import { getDatabase, ref, get, remove, child, update  } from "firebase/database";
// import { database } from "./firebase";
// import SearchAndDisplayUser from "./components/Test/Test";
// import TestSearchName from "./components/Test/TestSearchName";
// import TestAntd from "./components/Test/TestAntd"

// function App() {
//   const dbRef = ref(database);

//   get(child(dbRef, `users`))
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val());
//       } else {
//         console.log("No data available");
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });

//   const handleDeleteClick = () => {
//     const userId = "Info";  // Replace with the correct user ID you want to delete

//     // Create a reference to the user you want to delete
//     const userRef = ref(getDatabase(), `users/${userId}`);

//     // Remove the user from the database
//     remove(userRef)
//       .then(() => {
//         console.log("Dữ liệu đã được xóa thành công.");
//       })
//       .catch((error) => {
//         console.error("Lỗi khi xóa dữ liệu:", error);
//       });
//   };

//   const Update = () => {
//     const dbRef2 = ref(getDatabase(), 'users/2');
//     const newData = {
//       "id": "2",
//       "name": "Nghiep",
//       "address": "Thái Bình"
//     };

//     update(dbRef2, newData)
//       .then(() => {
//         console.log('Dữ liệu đã được cập nhật thành công.');
//       })
//       .catch((error) => {
//         console.error('Lỗi khi cập nhật dữ liệu:', error);
//       });
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <SearchAndDisplayUser /> */}
//         <TestSearchName></TestSearchName>
//         <TestAntd></TestAntd>
//         <button onClick={handleDeleteClick}>Delete</button>
//         <button onClick={Update}>Update</button>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Home from "./components/Pages/Home/Home";
import Test from './components/Test/TestCard'
import ListCard from './components/Pages/Home/ListCard'
import HomeRouter from "./components/Pages/HomeRouter/HomeRouter";
import RouterComponent from './Router';
{/* <RouterComponent/> */}

function App() {
  return (
    <RouterComponent/>
  );
}

export default App;
