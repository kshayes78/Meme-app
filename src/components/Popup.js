import React from "react";
import Popup from "reactjs-popup";
import MemeForm from "./MemeForm";
import styled from "styled-components";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ url, name, handleClick, addMemesToState }) => (
  <Popup
    trigger={<button className="button"> Open Modal </button>}
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
