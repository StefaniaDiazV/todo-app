import { FC, useState } from "react"
import { Prev } from "react-bootstrap/esm/PageItem"
import { defaultValues, FormFields } from "./defaultValues"

type Props= {
    onSearch : (params: FormFields) => void
}

const FormCategories: FC<Props>  = ({onSearch}) => {

    const [fields, setFields] = useState(defaultValues)

    const handleSubmit = (e:any) => {
        e.preventDefault()
        onSearch(fields)
    }

    return (
        <form action="mb-5" onSubmit={handleSubmit}>
            <input type="text" name="text" value={fields.text} onChange={e=> setFields(prevState => ({...prevState, text: e.target.value}))} />
            <input type="text" name="color" value={fields.color} onChange={e=> setFields( prevState => ({...prevState, color: e.target.value}))}/>
            <button type="submit">Filtrar</button>
        </form>
    )
}

export { FormCategories }