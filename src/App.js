import { useState } from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';
import Footer from './components/footer/Footer.js';

const App = () => {
  const [name, setName] = useState();
  const itemClick = (data) => {
    setName(name);
  };

  return (
    <div className="App">
      <div className={'header'}>
        <Header itemClick={itemClick} />
      </div>
      <div className={'main'}>
        <Main data={name} />
      </div>
      <div className={'footer'}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
