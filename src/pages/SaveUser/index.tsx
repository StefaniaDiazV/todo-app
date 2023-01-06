import { useParams } from "react-router-dom";

const SaveUser = () => {
  const { userId } = useParams();

  return <h1>Estoy en SaveUser editando el usuario {userId}</h1>;
};

export { SaveUser };