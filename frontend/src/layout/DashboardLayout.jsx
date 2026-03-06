import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashbaordLayout = ({ children }) => {
    return (
         <div style={styles.container}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div style={styles.main}>
        
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <div style={styles.content}>
          {children}
        </div>

      </div>

    </div>
    );
};

const styles = {
    containder: {
        display:  "flex",
        height: "100vh",
        backroundColor: "AliceBlue"
    },

    main: {
        flex: 1,
        display: "flex",
        flexDirections: "column"
    },

    content: {
        padding: "30px"
    }
};

export default DashbaordLayout;