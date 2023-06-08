import { useState } from "react";
import Header from "./Header/Header";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import ContactMe from "./pages/ContactMe/ContactMe";
import Resume from "./pages/Resume/Resume";

function MainPage() {

  // setting default value of pageName to 'About' using useState to be used later to toggle through pages
  const [pageName, setPageName] = useState("About");

  // defines the renderPage function to check for the value of pageName; pageName will be set to whichever button is clicked on the nav bar (refer to /components/Header/Header.js)
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

  // defines the handlePageChange function to change pageName to whichever button was clicked (refer to /components/Header/Header.js)
  const handlePageChange = (page) => setPageName(page);

  return (
    <>
      {/* passes pageName and handlePageChange as props into Header so pages can be changed on command */}
      <Header pageName={pageName} handlePageChange={handlePageChange} />
      {/* calls renderPage to set the page to whichever page has been sleected via nav bar */}
      {renderPage()}
    </>
  );
}

export default MainPage;
