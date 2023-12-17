import "../css/App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../lib/components/Modal";
import Product from "./Product";
import { Form } from "../components/Form";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const [openModalTwo, setOpenModalTwo] = useState(false);

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
        fadeDelay={700}
        fadeDown={0.2}
        showMore
        // showMoreStyle={{ color: "red" }}
        defaultNumberOfLine={7}
        lineAddOnShowMore={7}
        // totalDisplay
        // ESCNotActive
        // noCloseButton
        // customCloseButton={<button className="custom-close">!</button>}
        customCloseButton={"fermer"}
        customCloseButtonClass={"testCloseButtonClass"}
      >
      
        {/* <Product />
        <Link to="/product">GO to the Page !</Link> */}
        <p>Test du contenu de la modal</p>
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
        </p>
        {/* <Form fadeDown={0.2} onClose={() => setOpenModal(false)} /> */}
        {/* <h2>seconde modal ?</h2>
        <button onClick={() => setOpenModalTwo(true)}>Seconde Modal</button>
        <Modal
          open={openModalTwo}
          onClose={() => setOpenModalTwo(false)}
          ESCNotActive
        ></Modal> */}
      </Modal>
    </>
  );
}
