import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

type Todo = {
  id: number;
  task: string;
}

function App() {

  return (
    <div>
      <Todo></Todo>
    </div>
  );
}

export default App;
