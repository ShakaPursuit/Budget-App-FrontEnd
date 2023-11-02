import { useNavigate, useParams } from "react-router-dom";

function DeleteIndex() {
  const navigate = useNavigate();
  const params = useParams();

  const handleDelete = () => {
    const { index } = params;

    fetch(`http://localhost:8000/transactions/${index}`, { method: 'DELETE' })
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((error) => console.error(error));
  };

  handleDelete(); 

  return null;
}

export default DeleteIndex;