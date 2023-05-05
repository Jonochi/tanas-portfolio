import React from "react";
import Projects from "../Projects";
import About from "../About";
import Contact from "../Contact";
import Resume from "../Resume";

function Page({ currentPage }) {

    const renderPage = () => {
        switch (currentPage.name) {
            case "Projects":
                return <Projects />;
            case "About":
                return <About />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;
        }
    }
        return (
            <div>
                <div>{renderPage()}</div>
            </div>
        );
    
}

export default Page;