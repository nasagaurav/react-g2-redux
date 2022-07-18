import React from 'react';
import ViewNumbers from './ViewNumbers';
import ViewTopic from './ViewTopic';
import ViewTodos from './ViewTodos';
import ViewCounter from './ViewCounter';
import AddNumbers from './AddNumbers';
import AddTopic from './AddTopic';
import AddTodos from './AddTodos';
import AddCounter from './AddCounter';

export default function App() {
  return (
    <div>
      <AddNumbers />
      <AddTopic />
      <AddTodos />
      <AddCounter />
      <ViewNumbers />
      <ViewTopic />
      <ViewTodos />
      <ViewCounter />
    </div>
  );
}
