import { useState } from "react";
import { Layout } from "../../components/layout"
import { userServices } from "../../services/users";
import { User } from "../../types";
import { Button } from "../../components/commons/Button";
import { useNavigate } from "react-router-dom";

const Users = () => {

    const [users, setUsers] = useState<User[]>([])
    const navigate = useNavigate()

    const getUsers = async () => {
        const rta = await userServices.getAll()
        setUsers(rta)
    }
    if(!users.length) getUsers()

    const deleteUser = async (id:string) => {
      await userServices.remove(id)
      getUsers()
    }

    return(

        <Layout>
        <div>
  <hr />
  <h1>Users</h1>

  <table border={1}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>LastName</th>
        <th>e-mail</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((elem) => {
        return (
          <tr key={elem.id}>
            <td>{elem.id}</td>
            <td>{elem.name}</td>
            <td>{elem.lastname}</td>
            <td>{elem.email}</td>
            <td>
              <Button variant="primary" icon="pencil" handleClick={() => navigate(`/sign-up/${elem.id}`)} />
              <Button
                handleClick={() => deleteUser(elem.id)}
                variant='danger' icon="trash" 
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
  <hr />
</div>
        </Layout>
    )

}

export { Users }