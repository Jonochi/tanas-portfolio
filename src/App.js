import React, { useState } from 'react';
import './App.css';
import Sidebar from "./components/Sidebar"
import Header from './components/Header';
import Page from './components/Page';

function App() {

  const [pages] = useState([
    {
      name: "About",
    },
    {
      name: "Projects",
    },
    {
      name: "Contact",
    }
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);




  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Sidebar />
          <Header />
          <div>
            <Page currentPage = {currentPage}></Page>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
