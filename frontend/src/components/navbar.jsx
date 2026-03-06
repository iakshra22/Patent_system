import React from "react";

const Navbar = () => {
  return (
    <div style={styles.navbar}>

      {/* Page Title */}
      <h2 style={styles.title}>Faculty Dashboard</h2>

      {/* Right Side */}
      <div style={styles.rightSection}>

        <div style={styles.profileCompletion}>
          <span>Profile Completion</span>

          <div style={styles.progressBar}>
            <div style={styles.progressFill}></div>
          </div>
        </div>

        {/* User */}
        <div style={styles.user}>
          <span>yeah</span>
        </div>

      </div>

    </div>
  );
};

const styles = {
  navbar: {
    height: "70px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 30px",
    borderBottom: "1px solid lightgray"
  },

  title: {
    fontSize: "22px",
    fontWeight: "bold"
  },

  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  },

  profileCompletion: {
    display: "flex",
    flexDirection: "column",
    fontSize: "14px"
  },

  progressBar: {
    width: "120px",
    height: "8px",
    backgroundColor: "lightgray",
    borderRadius: "5px",
    marginTop: "4px"
  },

  progressFill: {
    width: "60%",
    height: "100%",
    backgroundColor: "green",
    borderRadius: "5px"
  },

  user: {
    fontSize: "20px"
  }
};

export default Navbar;