import React from "react";
import Popup from "reactjs-popup";
import MemeForm from "./MemeForm";
import styled from "styled-components";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ id, url, name, handleClick, addMemesToState, memes }) => (
  <Popup
    trigger={<button className="button"> Caption this Meme</button>}
    modal
    nested
  >
    {(close) => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Modal Title </div>
        <div className="content">
          {" "}
          <MemeForm
            name={name}
            url={url}
            handleClick={handleClick}
            addMemesToState={addMemesToState}
            memes={memes}
            id={id}
          />
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
);
