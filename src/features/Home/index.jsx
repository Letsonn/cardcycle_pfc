/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import SideBar from "../../components/SideBar";

import api from "../../services/api";
import { getSession } from "../../services/auth";

async function deleteProject(projectId) {
    try {
        const deleteRequest = await api.delete('/projects/', { data: { projectId }});
        if (deleteRequest.status === 200) {
            window.location.reload();
        }
    } catch (error) {
        console.log(error);
    }
}

function ProjectList(props) {
    const projects = props.projects;
    if (projects.length > 0) {
        const listProjects = projects.map((project) => (
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold fs-4">{project.projectName}</div>
                    <p className="fs-6 fw-lighter">ultima modificação: {new Date(project.updatedAt).toLocaleString()}</p>
                    <a href={`/kanban/${project.projectId}`} className="btn btn-sm btn-outline-primary">acessar quadro</a>
                    {project.employmentRole === 'manager' && <a id={`${project.projectId}`} className="btn btn-sm btn-outline-danger ms-1" onClick={(event) => deleteProject(event.target.id)}>Deletar projeto</a>}
                </div>
                <div className="badge bg-primary rounded-pill">
                    {project.employmentRole}
                </div>
            </li>
        ));
        return <ul className="list-group list-group-flush">{listProjects}</ul>;
    }

    return <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <p className="fw-bold fs-4">Nenhum projeto encontrado</p>
        </li>
    </ul>
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
        document.querySelector('.accordion-button').click()
    }, []);

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar />

                <div className="col py-3">
                    <div className="row">
                        <div className="col">
                            <h6>Página inicial</h6>
                        </div>
                        <div className="col">
                            <a className="float-end btn btn-outline-primary" href="/new-project">Criar projeto</a>
                        </div>
                    </div>
                    <br />
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
