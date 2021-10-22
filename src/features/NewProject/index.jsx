import React, { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router';


import "./style.css"

export default function NewProject() {
    const [projectName, setProjectName] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!projectName) {
            setError('Preencha o nome do projeto');
            return;
        }

        try {
            const createProject = await api.post('/projects/', { name: projectName });

            if (createProject.status === 201) {
                history.push('/home');
            }
        } catch (error) {
            setError('Algo deu errado ao criar o seu projeto');
        }
    }

    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div style={{ height: "50%", width: "50%" }}>
                <h1 className="text-center">Novo projeto</h1>
                {error && <p className="text-center">{error}</p>}
                <br /><br />
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="PFC" value={projectName} onChange={(event) => setProjectName(event.target.value)} />
                        <label for="floatingInput">Nome do projeto</label>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-info">Criar Projeto</button>
                    </div>
                </form>

            </div>
        </div>


    );
}