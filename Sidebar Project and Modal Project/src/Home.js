import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
// the useGlobalContext is the context.js file it was imported so that we can use the content

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  // the useGlobalContext from the context.js file
  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        show modal
      </button>
    </main>
  );
};

export default Home;
