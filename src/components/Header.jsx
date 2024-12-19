import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <div className="title">
        <div className="logo">
          <FontAwesomeIcon icon="stopwatch" />
        </div>
        <h1>The counter react</h1>
      </div>
    </header>
  );
};

export default Header;
