import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_PROJECT } from "../mutations/ProjectMutation";
import { GET_PROJECTS } from "../queries/ProjectQueries";

const EditProjectForm = ({ project }) => {
  const [name, setName] = useState(project.name);
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState(project.description);

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    refetchQueries: [{ query: GET_PROJECTS, variables: { id: project.id } }],
  });

  const onsubmit = (e) => {
    e.preventDefault();
    if (name === "" || status === "" || description === "") {
      return alert("please fill all inputs!!");
    }
    updateProject(project.id, name, description, status);
    setName("");
    setDescription("");
    setStatus("new");
  };

  return (
    <div className="mt-5">
      <h3>Update Project Details </h3>
      <form onSubmit={onsubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ststus</label>
          <select
            className="form-select"
            id="ststus"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="new">Not Started</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary ">
          submits
        </button>
      </form>
    </div>
  );
};

export default EditProjectForm;
