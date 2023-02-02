import { FC, useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "../../components/commons/Button";
import { Layout } from "../../components/layout"
import { categoriesService } from "../../services";
import { Category } from "../../types";

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [search, setSearch] = useState("");
    const [color, setColor] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate()

    const obtenerCategorias = async () => {
      const rta = await categoriesService.getAllAxios();
  
      setCategories(rta);
    };
  
     if (!categories.length) obtenerCategorias();
  
  //   const borrarCategoria = async (id: string) => {
  //     await categoriesService.remove(id);
  //     obtenerCategorias();
  // }

    // ESTRUCTURA DEL USE EFECT



    return (
        <div>
            <Layout>
            <div>
      <hr />
      <h1>Categorías</h1>

      <hr />

<form action="">
  <input
    type="text"
    name="text"
    id="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <input
    type="text"
    name="text"
    id="text"
    value={color}
    onChange={(e) => setColor(e.target.value)}
  />
</form>

<hr />

      <table className="table" border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.color}</td>
                <td>
                  <Button variant="primary" icon="pencil" handleClick={() => navigate(`/add-category/${elem.id}`)} />
                  <Button
                    handleClick={() => (console.log('hi'))}
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
        </div>
    )
}

export { Categories }