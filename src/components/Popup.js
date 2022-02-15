import React from "react"
import Popup from "reactjs-popup"
import MemeForm from "./MemeForm"
import styled from "styled-components"

export default ({ url }) => (
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
          <MemeForm url={url} />
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ")
              close()
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
)
