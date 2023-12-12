import "./App.css";
import { useState } from "react";
import { Modal } from "../lib/components/Modal";
// import { Form } from "../lib/components/Form";

export default function App() {
  const [openModal, setOpenModal] = useState(false);

  // const [openModalTwo, setOpenModalTwo] = useState(false);

  return (
    <>
      <h1>Test du composant</h1>
      <button className="modal-button" onClick={() => setOpenModal(true)}>
        Open Modal
      </button>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        modalStyle={{ textAlign: "center" }}
        fadeDuration={600}
        fadeDelay={0}
        fadeDown={0.2}
        // showMore
        unclosableWindow
        // noCloseButton
        // customCloseButton={<button className="custom-close">!</button>}
      >
        {/* <p>Test du contenu de la modal</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          nesciunt suscipit enim similique, ipsum repellendus! Lorem ipsum dolor
          Lorem ipsum dolor sit amet, <span close-modal="true">close</span>{" "}
          consectetur adipisicing elit. Harum nesciunt suscipit enim similique,
          ipsum repellendus! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Pariatur magni eum sapiente inventore sunt fugit quia ea odit
          placeat!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Harum nesciunt suscipit enim similique, ipsum repellendus! Lorem ipsum
          dolor. Ipsum repellendus! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Pariatur magni eum sapiente inventore sunt fugit
          quia ea odit placeat!Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Harum nesciunt suscipit enim similique, ipsum
          repellendus! Lorem ipsum dolor.
        </p> */}

        {/* <Form fadeDown={0.2} onClose={() => setOpenModal(false)} /> */}

        {/* <h2>seconde modal ?</h2>
        <button onClick={() => setOpenModalTwo(true)}>
        Seconde Modal
      </button>
        <Modal open={openModalTwo} onClose={() => setOpenModalTwo(false)}></Modal> */}
      </Modal>
    </>
  );
}
