import { AiFillHeart } from "react-icons/ai";
import css from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={css["footer"]}>
        <div className={css["footer-text"]}>
          Made with{" "}
          <AiFillHeart
            style={{
              color: "red",
            }}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
