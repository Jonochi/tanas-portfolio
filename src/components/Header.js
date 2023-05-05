import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';


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
            {/* <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div> */}

            <div className='header-section header-section-large'>

                <h1>Tana </h1>
                <h2>Larrabee</h2>
            </div>
            <div className='header-section header-section-small'>
                <p><nav>
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
                </nav></p>
            </div>



        </header>
    );
}

export default Header;
