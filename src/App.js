import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';

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
    },
    {
      name: "Resume",
    }
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);




  return (
    <div className="App font-link">
      <header className="App-header">
        <div>
          <Footer />
          <Header pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
          <div>
            <Page currentPage = {currentPage}></Page>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
