import React from "react";

const Sidebar = () => {
    return (
        <div style={styles.Slidebar}>
            <h2 style={styles.title}>Academic Nexus</h2>

        <div style={styles.menu}>
        <p style={styles.item}>Dashboard</p>
        <p style={styles.item}>Teaching Module</p>
        <p style={styles.item}>Research Module</p>
        <p style={styles.item}>Self Development</p>
        <p style={styles.item}>My Submissions</p>
        <p style={styles.item}>Profile</p>
      </div>

      <button style={styles.logout}>Logout</button>
    </div>
    );
};

const styles = {
  sidebar: {
    width: "240px",
    height: "100vh",
    backgroundColor: "darkslategray",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },

  title: {
    fontSize: "22px",
    fontWeight: "bold"
  },

  menu: {
    marginTop: "30px"
  },

  item: {
    padding: "10px",
    cursor: "pointer"
  },

  logout: {
    padding: "10px",
    border: "none",
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }
};

export default Sidebar;