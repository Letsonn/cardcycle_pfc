/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import SideBar from "../../components/SideBar";

import api from "../../services/api";
import { getSession, isAuthenticated } from "../../services/auth";

function ProjectList(props) {
  const projects = props.projects;
  console.log(projects);
  const listProjects = projects.map((project) => (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold fs-4">{project.projectName}</div>
        <p className="fs-6 fw-lighter">ultima modificação: {new Date(project.updatedAt).toLocaleString()}</p>
        <a href={`/kanban/${project.projectId}`} className="btn btn-sm btn-outline-primary">acessar quadro</a>
        {project.employmentRole === 'manager' &&  <a href={`/kanban/${project.projectId}`} className="btn btn-sm btn-outline-danger ms-1">Deletar projeto</a>}
      </div>
      <div className="badge bg-primary rounded-pill">
        {project.employmentRole}
      </div>
    </li>
  ));

  return <ul className="list-group list-group-flush">{listProjects}</ul>;
}

export default function Home() {
  const [userProjects, setProjects] = useState([]);

  async function fetchProjects(userId) {
    const projects = await (await api.get(`/projects/${userId}`)).data;
    setProjects(projects);
  }

  useEffect(() => {
    const session = getSession();
    fetchProjects(session.id);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideBar />

        <div className="col py-3">
          <h6>Página inicial</h6>

          <div className="container">
            <div className="accordion accordion-flush">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Projetos
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <ProjectList projects={userProjects} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
