import { useEffect, useState } from "react"
import { AddNewUserProps, User } from "../types/UserType"
import { Link } from "react-router-dom"
import "../component/css/AddNewUserComponent.css"
const AddNewUserComponent:React.FC<AddNewUserProps> = ({addNewUser}) => {
    const [isName, setIsName] = useState<string>("")
    const [isEmail, setIsEmail] = useState<string>("")
    const [isCity, setIsCity] = useState<string>("")
    const [isCompany, setIsCompany] = useState<string>("")
    const [isButton, setIsButton] = useState<boolean>()

    //form Validation
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const formValid = () => {
        return isName.length && isEmail.length && isCity.length && isCompany.length
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();

    const uid = Math.random().toString(32).slice(2)
    const newUser: User = {
        id: uid,
        name: isName,
        email: isEmail,
        address: {
            city: isCity
        },
        company:{
            name: isCompany
        }
    }
    addNewUser(newUser)
    setIsName("");
    setIsEmail("");
    setIsCity("");
    setIsCompany("")
    }

    useEffect(() => {
        const isValid: any = formValid()
        setIsButton(isValid)
    },[formValid])

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
                <button disabled={!isButton} type="submit"> Add New User</button>
            </form>

<br></br>
<Link to={"/"}> 
            <button> {"Go to Users Page ->"}</button>
        </Link>  
        </div>    
    )
}

export default AddNewUserComponent;