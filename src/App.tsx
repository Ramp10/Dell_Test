import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { GET_API_URL } from './constants';
import { User } from './types/UserType';
import UserPageComponent from './component/UserPageComponent';
import { sortData } from './utils/useSort';
import AddNewUserComponent from './component/AddNewUserComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  const [userData, setUserData] = useState<User[]>([])


  const fetchUserApiCall = async () => {
    try{
      const response = await axios.get(GET_API_URL);
      const sortArray:User[] = sortData(response.data, "name")
      setUserData([...sortArray])
    }catch(e:any){
      alert(e.message)
    }
  }

  useEffect(() => {
    fetchUserApiCall();
  },[])

  const saveNewUser = (user:User) => {
    const combineUser = [...userData, user]
    const sortArray: User[] = sortData(combineUser,"name");
    setUserData([...sortArray])
  }

  return (
    <BrowserRouter>
    <div className="App">
      <h1> User Data App</h1>
      <Routes>
        <Route path="/" element={<UserPageComponent userData={userData}/>} />
        <Route path="/add-new-user" element={<AddNewUserComponent addNewUser={saveNewUser}/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
