import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";
import Spinner from "../components/Spinner";
import { GET_SINGLE_PROJECT } from "../queries/ProjectQueries";

const Project = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_SINGLE_PROJECT, {
    variables: { id: id },
  });

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <div className="">error</div>;
  }

  return (
    <>
      <div className="mx-auto w-75 card p-5">
        <Link to={"/"} className="btn btn-light btn-sm w-25 d-inline ms-auto">
          Back
        </Link>

        <h1>{data.project.name}</h1>
        <p>{data.project.description}</p>
        <h5 className="mt-3">Project Status</h5>
        <p>{data.project.status}</p>

        <ClientInfo client={data.project.client} />
        <DeleteProjectButton projectId={data.project.id} />

        <EditProjectForm project={data.project} />
      </div>
    </>
  );
};

export default Project;
