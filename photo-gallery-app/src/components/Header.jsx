import css from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={css["header"]}>
      <nav className={css["navBar"]}>
        <ul className={css["navMenu"]}>
          <li>
            <h3 className={css["icon"]}>
              <a href="#">PicPerfect </a>
            </h3>
          </li>
          <li>
            {" "}
            <a href="#"> Home </a>
          </li>
          <li>
            {" "}
            <a href="#"> Edit </a>
          </li>
          <li>
            {" "}
            <a href="#"> Accessibility Mode </a>
          </li>
          <li>
            <a href="#"> Connect with Social Media </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
