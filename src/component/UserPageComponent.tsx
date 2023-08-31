import { useEffect, useState } from "react";
import { User, UserDataProps } from "../types/UserType";
import "../component/css/UserPageComponent.css"

const UserPageComponent:React.FC<UserDataProps> = ({userData}) => {
    const [userDataList, setUserDataList] = useState<User[]>([])

    useEffect(() => {
        setUserDataList(userData)
    },[userData])

    return (

        <div>
           { userDataList.length === 0 ? <p> {"Loading..."} </p> :
            <div>
                <table>
                    <thead>
                    <tr>
                        <th> Name </th>
                        <th> Email </th>
                        <th> City </th>
                        <th> Company</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userDataList.length > 0 && userDataList.map((user) => {
                        return (
                            <tr>
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
        </div>     
    )
}

export default UserPageComponent;