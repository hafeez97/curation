import React from "react"
import { db } from "./firebase-config";
import './App.css'
import {
    getDocs,
    collection,

} from "firebase/firestore";

const Getdata = () => {
    const [users, setUsers] = React.useState([]);
    const usersCollectionRef = collection(db, "users");

    React.useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);
    return(

            <table className="table-auto border-separate border-spacing-2 border border-slate-500 w-8/12 m-auto">
            <thead>
            <tr>
                <th className="border border-slate-600">ID</th>
                <th className="border border-slate-600">EMAIL</th>
            </tr>
            </thead>
                <tbody>
                {
                    users.map((user)=>{
                        return(
                         <tr>
                             <td>{user.id}</td>
                             <td>{user.email}</td>
                         </tr>
                        )
                    })
                }
                </tbody>
            </table>

    )
}

export default Getdata