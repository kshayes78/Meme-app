import React from "react";
import Popup from "reactjs-popup";
import MemeForm from "./MemeForm";
import { StyledPopup } from "./Styles/Popup.styled";
import { StyledForm } from "./Styles/Popup.styled";
import { Container } from "./Styles/App.styled";

export default ({ id, url, name, handleClick, addMemesToState, memes }) => (
  <Container>
    <StyledPopup>
      <>
        <Popup
          trigger={<button className="button"> Caption this Meme</button>}
          modal
          nested
        >
          {(close) => (
            <div
              style={{
                backgroundColor: "dark gray",
                padding: "40px 40px",
                borderRadius: "20px",

                borderStyle: "dotted",
                backdropFilter: "blur(3px)",
              }}
              className="modal"
            >
              <button
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "10px",
                  padding: "5px",
                  color: "#e94560",
                  fontWeight: "bold",
                }}
                className="close"
                onClick={close}
              >
                &times;
              </button>
              {/* <div className="header"> Modal Title </div> */}
              <div className="content">
                {" "}
                {/* <StyledForm> */}
                <MemeForm
                  name={name}
                  url={url}
                  handleClick={handleClick}
                  addMemesToState={addMemesToState}
                  memes={memes}
                  id={id}
                />
                {/* </StyledForm> */}
              </div>
            </div>
          )}
        </Popup>
      </>
    </StyledPopup>
  </Container>
);
