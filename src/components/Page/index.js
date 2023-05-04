import React from "react";
import Projects from "../Projects";
import About from "../About";
import Contact from "../Contact";

function Page({ currentPage }) {

    const renderPage = () => {
        switch (currentPage.name) {
            case "Projects":
                return <Projects />;
            case "About":
                return <About />;
            case "Contact":
                return <Contact />;
        }
    }
        return (
            <div>
                <div>{renderPage()}</div>
            </div>
        );
    
}

export default Page;