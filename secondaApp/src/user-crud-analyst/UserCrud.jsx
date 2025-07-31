import { useEffect, useState } from "react";


const API_URL = "/api/users"
const UserCrud = () =>{
    const [users, setUsers] = useState([]);

    const getUsers=async () => {
        const response=await fetch(API_URL);
        const result=await response.json();
        setUsers(result);
    }
    useEffect(() => {
        getUsers()
    }, []);

    const handleDelete =async(id) => {
        if(window.confirm("Sei sicuro di voler cancellare questo utente?")){
            try{
                const response = await fetch(API_URL+"/"+id,{
                    method:"DELETE"
                });
                if(!response.ok) throw new Error("La chiamata non è andata a buon fine :(")
                    getUsers()
            }catch(err){
                console.log(err)
            }
        }
    }

    return (
        <div className="container my-5">
            <h1 className="mb-4">USER CRUD</h1>

            <div className="table-responsive">
                <table className="table table-hover table-bordered align-middle">
                <thead className="table-light">
                    <tr>
                    <th>Nome</th>
                    <th>Cognome</th>
                    <th>Telefono</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => {
                        return (
                            <tr key={u.id}>
                                <td> {u.name}</td>
                                <td> {u.username}</td>
                                <td> {u.phone}</td>
                                <td> {u.email}</td>
                                <td><button className="btn btn-danger" onClick={() => handleDelete(u.id)}>Elimina</button></td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
            </div>
            </div>        
    )
}
export default UserCrud;