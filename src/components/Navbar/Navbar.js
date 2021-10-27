import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import { login } from "../../api/api";

import logo from "../../assets/memetopia_logo.png";
import "./style/navbar.css";

function Navbar() {
  const history = useHistory();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (localStorage.length > 0) {
      const token = localStorage.getItem("token");
      const username = localStorage.getItem("username");
      setUserData({ token: token, username: username });
    }
  }, []);

  async function handleLoginSubmit(e) {
    e.preventDefault();
    const userData = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    const loginData = await login(userData);

    localStorage.setItem("token", JSON.stringify(loginData.data.data.token));
    localStorage.setItem("username", loginData.data.data.userName);
    setUserData({
      token: JSON.stringify(loginData.data.data.token),
      username: loginData.data.data.userName,
    });
    closeModal();
  }

  function handleLogout() {
    localStorage.clear();
    window.location.reload();
  }

  // Modal logic
  const [modalIsOpen, setIsOpen] = useState(false);

  Modal.setAppElement("#root");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0 5% 2%",
      backgroundColor: "whitesmoke",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar-section navbar-info">
          <div className="navbar-icon" onClick={() => history.push("../")}>
            <img src={logo} alt="Memetopia"></img>
          </div>
          <div className="navbar-section-categories">
            <span
              className="navbar-category"
              onClick={() => history.push("../meme")}
            >
              Memes
            </span>

            <span
              className="navbar-category"
              onClick={() => history.push("../gif")}
            >
              Gifs
            </span>

            <span
              className="navbar-category"
              onClick={() => history.push("../classic")}
            >
              Classics
            </span>

            <span
              className="navbar-category"
              onClick={() => history.push("../hot")}
            >
              Hot!
            </span>
          </div>
          {userData ? (
            <>
              <div className="navbar-upload">
                <button onClick={() => handleLogout()}>Logout</button>
              </div>
              <div className="navbar-user">Welcome {userData.username}</div>{" "}
            </>
          ) : (
            <>
              <div className="navbar-login navbar-button">
                <button onClick={() => openModal()}>Login</button>
              </div>
              <div className="navbar-register navbar-button">
                <button onClick={() => history.push("../register")}>
                  Register
                </button>
              </div>
            </>
          )}
        </div>

        <div className="navbar-section navbar-search">
          <input type="text" className="searchbar"></input>
          {userData ? (
            <div className="navbar-upload-group">
              <div className="navbar-upload">
                <button onClick={() => history.push("../upload")}>
                  Upload
                </button>
              </div>
              <div className="navbar-upload">
                <button onClick={() => history.push("../upload-url")}>
                  URL
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login"
        overlayClassName="login-modal-overlay"
      >
        <div className="login-modal">
          <h2>Login</h2>
          <form name="login-form" onSubmit={(e) => handleLoginSubmit(e)}>
            <div className="login-input-group">
              <label>
                Email
                <input type="text" />
              </label>
              <label>
                Password
                <input type="password" />
              </label>
            </div>
            <button type="submit" className="login-button">
              Log in
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
