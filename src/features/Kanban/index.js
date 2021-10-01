import React, { useState } from 'react';
import Board from '@asseinfo/react-kanban'
import '@asseinfo/react-kanban/dist/styles.css';

const board = {
    columns: [
      {
        id: 1,
        title: 'Backlog',
        cards: [
          {
            id: 1,
            title: 'Terminar frontEnd',
            description: 'Terminar de codificar o front'
          },
        ]
      },
      {
        id: 2,
        title: 'fazendo',
        cards: [
          {
            id: 2,
            title: 'Teste',
            description: 'Fazendo alguma coisa'
          },
        ]
      }
    ]
  }
  

export default function KanbanBoard() {
    return (
        <div>
            <Board initialBoard={board} />
        </div>
    );
}