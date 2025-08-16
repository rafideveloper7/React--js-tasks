// import React from 'react';
import "./index.css"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Services from "./Services.jsx"
import Blogs from "./Blogs.jsx"
import Contact from "./Contact.jsx"

function App() {
  let currentPage = "Services";
  let pageContent = undefined;
  if (currentPage === "Home") pageContent = <><Home></Home></>;
  else if (currentPage === "Services") pageContent = <Services></Services>;
  else if (currentPage === "About") pageContent = <About></About>;
  else if (currentPage === "Blogs") pageContent = <Blogs></Blogs>;
  else if (currentPage === "Contact") pageContent = <Contact></Contact>;
  else alert("PAge not fund!")
  return <><div>{pageContent}</div>

  </>
}

export default App;