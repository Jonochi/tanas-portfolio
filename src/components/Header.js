import React from 'react';
import '../styles/Header.css';


function Header({ pages, setCurrentPage, currentPage }) {

    const handleCurrentPage = (page) => {
        return currentPage === page ? "nav-link active" : "nav-link";
      };

    const handlePageClick = (page) => {
        setCurrentPage(page);
        window.history.pushState(null, null, `/${page.name.toLowerCase()}`);
      };

    return (
        <header className="header">
            <h1>Welcome</h1>
            <nav>
                <ul>
                    {pages.map((page, index) => (
                        <a
                        key={index}
                        href={"#" + page.name.toLowerCase()}
                        onClick={() => setCurrentPage(page)}
                        className={handleCurrentPage(page)}
                        >
                            {page.name}
                        </a>
                    ))}                
                </ul>
            </nav>

        </header>
    );
}

export default Header;
