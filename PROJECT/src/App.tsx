import React from 'react';
import './App.css';
import List from './containers/List';
import AddButton from './containers/AddButton';
import InputName from './containers/InputName';
import InputCount from './containers/InputCount';

const App: React.FC = () => {
  return (
    <div className="App">
      <InputName />
      <InputCount />
      <AddButton />
      <p>MILK MEMO</p>
      <List />
    </div>
  );
}

export default App;
