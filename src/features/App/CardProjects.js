import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import moment from 'moment';


export default function ProjectCard(props) {
    return (
        <Card sx={{ minWidth: 275, mb: 1.5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Projeto
          </Typography>
          <Typography variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Criado em: {moment(props.created).format('DD/MM/YYYY HH:MM')}
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.5 }} color="text.secondary">
              Função: {props.role}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={props.link}>Ir para o Quadro</Button>
        </CardActions>
      </Card>
    );
}