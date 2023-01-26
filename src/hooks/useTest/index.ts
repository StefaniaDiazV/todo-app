import { useState } from "react"

const useTest = () => {
    const [dato, setDato] = useState('')

    const modificarData = (value: string) => {
        setDato(value)
    }

    return  {dato, modificarData}
}

export { useTest }