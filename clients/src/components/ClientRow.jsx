import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { DELETE_CLIENT } from "../mutations/ClientMutations";
import { GET_CLIENTS } from "../queries/ClientQueries";
import { GET_PROJECTS } from "../queries/ProjectQueries";

const ClientRow = ({ client }) => {
  // first method
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });

  // second method
  // const [deleteClient] = useMutation(DELETE_CLIENT, {
  //   variables: { id: client.id },
  //   update(cache, { data: { deleteClient } }) {
  //     const { clients } = cache.readQuery({ query: GET_CLIENTS });

  //     cache.writeQuery({
  //       query: GET_CLIENTS,
  //       data: {
  //         clients: clients.filter((client) => client.id !== deleteClient.id),
  //       },
  //     });
  //   },
  // });
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button onClick={deleteClient} className="btn btn-danger btn-sm">
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
