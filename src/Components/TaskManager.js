// import React from 'react'
// import axios from 'axios';
// import { useState, useEffect } from 'react';

// const TaskManager = () => {
  
//   const [users, setUsers]= useState([])
//   const fetchUserData = async function(){
//     const data= await fetch("https://reqres.in/api/users?page=2")
//     const json = await data.json()
//     console.log(json.data)
//     setUsers(json.data)
//   }

//   useEffect(()=>{
//     fetchUserData()
//   }, [])
//  return(
//   <div>
//     <h1>Hello ReqRes users!</h1>
//     <div>
//       {users.map((user)=><div className="">
//         <h3>{user.first_name}</h3>
//         <h4>{user.email}</h4>
//         <img src={user.avatar} alt="" />
//       </div>)}

//     </div>
//   </div>
//  )
// }

// export default TaskManager

// // const [loggedIn, setLoggedIn] = useState(false);
//   // const [tasks, setTasks] = useState([]);
//   // const [newTask, setNewTask] = useState('');

//   // useEffect(() => {
//   //   // Check if the user is already logged in
//   //   checkLoginStatus();
//   // }, []);

//   // const checkLoginStatus = () => {
//   //   // Use the Reqres.in API to check if the user is logged in
//   //   axios.get('https://reqres.in/api/login/status')
//   //     .then((response) => {
//   //       if (response.data.loggedIn) {
//   //         setLoggedIn(true);
//   //         fetchTasks();
//   //       } else {
//   //         setLoggedIn(false);
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //     });
//   // };

//   // const fetchTasks = () => {
//   //   // Use the Reqres.in API to fetch the user's tasks
//   //   axios.get('https://reqres.in/api/tasks')
//   //     .then((response) => {
//   //       setTasks(response.data.tasks);
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //     });
//   // };

//   // const createTask = () => {
//   //   // Use the Reqres.in API to create a new task
//   //   axios.post('https://reqres.in/api/tasks', { task: newTask })
//   //     .then((response) => {
//   //       setNewTask('');
//   //       fetchTasks();
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //     });
//   // };

//   // // const handleLogin = () => {
//   // //   // Use the Reqres.in API to log in the user
//   // //   axios.post('https://reqres.in/api/login', { username: 'username', password: 'password' })
//   // //     .then((response) => {
//   // //       setLoggedIn(true);
//   // //       fetchTasks();
//   // //     })
//   // //     .catch((error) => {
//   // //       console.error(error);
//   // //     });
//   // // };

//   // const handleLogout = () => {
//   //   // Use the Reqres.in API to log out the user
//   //   axios.get('https://reqres.in/api/logout')
//   //     .then((response) => {
//   //       setLoggedIn(false);
//   //       setTasks([]);
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //     });
//   // };

//   // // if (!loggedIn) {
//   // //   return (
//   // //     <div className="login">
//   // //       <h2>Please log in</h2>
//   // //       <button onClick={handleLogin}>Log in</button>
//   // //     </div>
//   // //   );
//   // // }

//   // return (
//   //   <div className="task-manager">
//   //     <h2>Task Manager</h2>
//   //     <div className="task-input">
//   //       <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter task" />
//   //       <button onClick={createTask}>Add Task</button>
//   //     </div>
//   //     <div className="task-list">
//   //       {tasks.map((task, index) => (
//   //         <div key={index} className="task">{task}</div>
//   //       ))}
//   //     </div>
//   //     <button onClick={handleLogout}>Log out</button>
//   //   </div>
//   // );