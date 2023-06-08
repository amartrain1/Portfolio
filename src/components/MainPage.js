import { useState } from "react";
import Header from "./Header/Header";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import ContactMe from "./pages/ContactMe/ContactMe";
import Resume from "./pages/Resume/Resume";

function MainPage() {
  const [ submit, setSubmit ] = useState(false)
  const handleSubmit = () => setSubmit(true)

  const [pageName, setPageName] = useState("About");

  const renderPage = () => {
    if (pageName === "About") {
      return <About />;
    }
    if (pageName === "Projects") {
      return <Projects />;
    }
    if (pageName === "Contact") {
      return <ContactMe />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setPageName(page);



  return (
    <>
      <Header pageName={pageName} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
}

export default MainPage;
