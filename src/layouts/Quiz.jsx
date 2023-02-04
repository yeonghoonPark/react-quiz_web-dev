import BaseButton from "../components/base/BaseButton";
import { Link } from "react-router-dom";

function Quiz() {
  return (
    <div style={{ marginTop: "66px" }}>
      <h1>Quiz Test</h1>
      <Link to={"/"}>
        <BaseButton message={"Home"} />
      </Link>
    </div>
  );
}

export default Quiz;
