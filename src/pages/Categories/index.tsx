import { FC, useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "../../components/commons/Button";
import { Layout } from "../../components/layout"
import { categoriesService } from "../../services";
import { Category } from "../../types";
import { FormCategories } from "../../components/forms";
import { FormFields } from "../../components/forms/Categories/defaultValues";

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [search, setSearch] = useState("");
    const [color, setColor] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate()

  //   const obtenerCategorias = async () => {
  //     const rta = await categoriesService.getAll();
  
  //     setCategories(rta);
  //   };
  
  //   if (!categories.length) obtenerCategorias();
  
  //   const borrarCategoria = async (id: string) => {
  //     await categoriesService.remove(id);
  //     obtenerCategorias();
  // }

    // ESTRUCTURA DEL USE EFECT

    useEffect(() => {

      const criteria = {
        text: searchParams.get('text'),
        color: searchParams.get('color')
      }
     categoriesService.getAll(criteria).then((data) => setCategories(data))
    },[searchParams])

    // useEffect(() => {
    //   categoriesService.getAllUse(search, color).then((data) => setCategories(data))
    // }, [search, color]);


    const borrarCategoriaUse = async (id: string) => {
      await categoriesService.remove(id);
      categoriesService.getAll({text: "", color: ""}).then((data) => setCategories(data))
    };

    const searchQuery = (params: FormFields ) => {
      setSearchParams(params)
    }


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

<FormCategories onSearch={searchQuery}/>

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
                    handleClick={() => borrarCategoriaUse(elem.id)}
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