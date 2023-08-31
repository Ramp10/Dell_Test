import { useEffect, useState } from "react"
import { AddNewUserProps } from "../types/UserType"

const AddNewUserComponent:React.FC<AddNewUserProps> = ({addNewUser}) => {
    const [isName, setIsName] = useState<string>("")
    const [isEmail, setIsEmail] = useState<string>("")
    const [isCity, setIsCity] = useState<string>("")
    const [isCompany, setIsCompany] = useState<string>("")


    const handleSubmit = (e:any) => {
        e.preventDefault();
    }

    useEffect(() => {
       
    },[])

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name
                    </label>
                    <input type="text" name="name" value={isName} placeholder="Name" onChange={(e) => setIsName(e.target.value)}/>
                </div>
                <div>
                    <label>
                        Email
                    </label>
                    <input type="email" name="email" value={isEmail} placeholder="Email" onChange={(e) => setIsEmail(e.target.value)}/>
                </div>
                <div>
                    <label>
                        City
                    </label>
                    <input type="text" name="city" value={isCity} placeholder="City" onChange={(e) => setIsCity(e.target.value)}/>
                </div>
                <div>
                    <label>
                        Company
                    </label>
                    <input type="text" name="company" value={isCompany} placeholder="Company" onChange={(e) => setIsCompany(e.target.value)}/>
                </div>
                <button type="submit"> Add New User</button>
            </form>

        </div>    
    )
}

export default AddNewUserComponent;