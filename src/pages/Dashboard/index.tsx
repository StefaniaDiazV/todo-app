import { FC } from "react"
import { Button } from "../../components/commons/Button";
import { Layout } from "../../components/layout"


const Dashboard: FC = () => {
    return (
        <div>
            <Layout>
                <h1> Dashboard</h1>
                <Button
          variant="primary"
          icon="x-circle"
          handleClick={() => {
            console.log("Inciar sesión");
          }}
        >
          Iniciar Sesión
        </Button>
            </Layout>           
        </div>
    )
}

export { Dashboard }