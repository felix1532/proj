import React from 'react';
import './App.css';

function App() {
  return (
    <table id='table'>
      <thead>
        <tr>
          <th scope='col'>Имя </th>
          <th scope='col'>Фамилия</th>
          <th scope='col'>Отчество</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='col'>Голубцов </th>
          <th scope='col'>Прокоп</th>
          <th scope='col'>Юрьевич</th>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
