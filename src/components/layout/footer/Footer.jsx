import "./Footer.css";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className={"footer"}>
        <p>Creado por Marianella Torressi</p>
        <p>
          <FaRegCopyright /> Copyright - Todos los derechos reservados
        </p>
        <div className="redes">
          <a
            href="https://www.facebook.com/panaderiasanchezz"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook style={{ color: "#ffffff" }} />
          </a>
          <a
            href="https://www.instagram.com/pan.aderiasanchez/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram style={{ color: "#ffffff" }} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=%2B543855303747&fbclid=IwAR1ywy79ZIPZ9UTbW8hJ-A9Ut7i4YSTVtMUVggGXZFbsY5miQ-mMqkZrgz4"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp style={{ color: "#ffffff" }} />
          </a>
        </div>
      </div>
    </>
  );
};
