import React, { useState } from "react"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"

function PopUp() {
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Hi there!")
  }
  return (
    <div>
      trigger={<button className="button"> Customize this Meme </button>}
      modal nested >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          {/* <div className="header"> Modal Title </div> */}
          <div className="content">
            {" "}
            Hello
            <br />
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
          alias. Vitae? */}
          </div>
          <div className="actions">
            <Popup
              trigger={<button className="button"> Trigger </button>}
              position="top center"
              nested
            >
              <div>
                <form onSubmit={handleSubmit}>
                  <label>Add Top Caption</label>
                  <input
                    value={topText}
                    onChange={(e) => setTopText(e.target.value)}
                  />
                  <label>Add Bottom Caption</label>
                  <input
                    value={bottomText}
                    onChange={(e) => setBottomText(e.target.value)}
                  />
                </form>
              </div>
            </Popup>
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
    </div>
  )
}
export default Popup

// export default () => (
//   <Popup
//     trigger={<button className="button"> Customize this Meme </button>}
//     modal
//     nested
//   >
//     {(close) => (
//       <div className="modal">
//         <button className="close" onClick={close}>
//           &times;
//         </button>
//         {/* <div className="header"> Modal Title </div> */}
//         <div className="content">
//           {" "}
//           Hello
//           <br />
//           {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
//           sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
//           repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
//           alias. Vitae? */}
//         </div>
//         <div className="actions">
//           <Popup
//             trigger={<button className="button"> Trigger </button>}
//             position="top center"
//             nested
//           >
//             <div>
//               <form onSubmit={handleSubmit}>
//                 <label>Add Top Caption</label>
//                 <input
//                   value={topText}
//                   onChange={(e) => setTopText(e.target.value)}
//                 />
//                 <label>Add Bottom Caption</label>
//                 <input
//                   value={bottomText}
//                   onChange={(e) => setBottomText(e.target.value)}
//                 />
//               </form>
//             </div>
//           </Popup>
//           <button
//             className="button"
//             onClick={() => {
//               console.log("modal closed ")
//               close()
//             }}
//           >
//             close modal
//           </button>
//         </div>
//       </div>
//     )}
//   </Popup>
// )
