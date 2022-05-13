import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Users from "./Users";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./CreateUser";
import UserView from "./UserView";
import UserEdit from "./UserEdit";
import { UserProvider } from "./Usercontext";
import { useState } from "react";

function App() {
  const [userName,setUserName] = useState("Hello")
  const [users,setUsers] = useState([])
  return (
    <BrowserRouter>
      <div id="wrapper">
        <UserProvider value={{userName,setUserName,users,setUsers}}>
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div class="container-fluid">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/user-create" element={<CreateUser />} />
                  <Route path="/user-view/:id" element={<UserView />} />
                  <Route path="/user-edit/:id" element={<UserEdit />} />
                </Routes>
              </div>
            </div>
          </div>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

// What is React and Why?
// Component
// Props
// State
// Pass props into Component
// Pass value outside of the component
// Routes
// Route Params
// Forms
// Form validation
// context
// axios
// useReduce
// redux
