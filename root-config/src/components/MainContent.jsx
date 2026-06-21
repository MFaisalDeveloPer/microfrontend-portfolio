import React, { Suspense } from "react";
import { useSelector } from "react-redux";

import Dashboard from "../pages/Dashboard";
import ArchitectureLab from "../pages/ArchitectureLab";
import Contact from "../pages/Contact";

const Skills = React.lazy(() => import("skills/Skills"));
const Projects = React.lazy(() => import("projects/Projects"));
const Experience = React.lazy(() => import("experience/Experience"));

function MainContent({user}) {
  const activeView = useSelector((state) => state.navigation.activeView);
   console.log(user);
  switch (activeView) {
    case "skills":
      return (
        <Suspense fallback={<h2>Loading Skills...</h2>}>
          <Skills />
        </Suspense>
      );

    case "experience":
      return (
        <Suspense fallback={<h2>Loading Experience...</h2>}>
          <Experience />
        </Suspense>
      );

    case "projects":
      return (
        <Suspense fallback={<h2>Loading Projects...</h2>}>
          <Projects />
        </Suspense>
      );
    case "architecture":
      return <ArchitectureLab />;
    case "contact":
      return <Contact />;  
    default:
      return <Dashboard user={user}/>;
  }
}

export default MainContent;
