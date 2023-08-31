import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { GET_API_URL } from './constants';
import { User } from './types/UserType';
import UserPageComponent from './component/UserPageComponent';
import { sortData } from './utils/useSort';

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

  return (
    <div className="App">
      <h1> User Data APP</h1>
      <UserPageComponent userData={userData}/>
      {/* <AddNewUserComponent /> */}
    </div>
  );
}

export default App;
