import { useEffect, useState } from "react";
import { User, UserDataProps } from "../types/UserType";
import "../component/css/UserPageComponent.css"
import { Link } from "react-router-dom";
import { sortData } from "../utils/useSort";

const UserPageComponent:React.FC<UserDataProps> = ({userData}) => {
    const [userDataList, setUserDataList] = useState<User[]>([])

    useEffect(() => {
        setUserDataList(userData)
    },[userData])

    const sortField = (key:any) => {
        const sortArray = sortData(userDataList,key)
        setUserDataList([...sortArray])
    }

    return (

        <div>
           { userDataList.length === 0 ? <p> {"Loading..."} </p> :
            <div className="tableSize">
                <table>
                    <thead>
                    <tr>
                        <th onClick={(e) => sortField("name")}> Name &#8645;</th>
                        <th onClick={(e) => sortField("email")}> Email &#8645;</th>
                        <th> City </th>
                        <th> Company</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userDataList.length > 0 && userDataList.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name} </td>
                                <td><a href={`mailto:${user.email}`}> {user.email}  </a></td>
                                <td>{user.address.city} </td>
                                <td>{user.company.name} </td>
                            </tr>  
                        )
                    })  }
                    </tbody>
                </table>   
            </div>}  
            <Link to={"add-new-user"}> 
            <button> + Add More Users</button>
        </Link>  
        </div>   

    )
}

export default UserPageComponent;