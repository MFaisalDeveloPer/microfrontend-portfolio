import React, { Suspense } from "react";

const Navbar = React.lazy(() => import("navbar/Navbar"));
const Hero = React.lazy(() => import("hero/Hero"));
const Projects = React.lazy(() => import("projects/Projects"));
const Experience = React.lazy(() =>import("experience/Experience"));
function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading Navbar...</h2>}>
        <Navbar />
      </Suspense>

      <Suspense fallback={<h2>Loading Hero...</h2>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<h2>Loading Projects...</h2>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<h2>Loading Experience...</h2>}>
  <Experience />
</Suspense>
    </>
  );
}

export default App;