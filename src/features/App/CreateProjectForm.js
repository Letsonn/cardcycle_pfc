import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


import api from '../../services/api';

export default function CreateProjectForm() {
    const [name, setProjectName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name) {
            setError('Digite o nome do projeto');
            return;
        }

        try {
            const requestCreateProject = await api.post('/projects/', { name });

            if (requestCreateProject.status !== 201) {
                setError('Falha ao criar projeto');
            }
        } catch (e) {
            setError('Falha ao criar projeto');
        }
    }
    return (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            {error && <p>{error}</p>}
            <hr />
            <TextField
                id="projectname"
                label="Nome do projeto"
                variant="outlined"
                value={name}
                onChange={(element) => setProjectName(element.target.value)}
                sx={{ width: '100%' }}
            />

            <Button type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>Criar</Button>
        </Box>
    );
}