import BaseButton from "./base/BaseButton";
import { Link } from "react-router-dom";

function Notice() {
  return (
    <div style={{ marginTop: "66px" }}>
      <h1>Notice Test</h1>
      <Link to={"/"}>
        <BaseButton message={"Home"} />
      </Link>
    </div>
  );
}

export default Notice;
