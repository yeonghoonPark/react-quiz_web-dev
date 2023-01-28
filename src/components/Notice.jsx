import BaseButton from "./base/BaseButton";
import { Link } from "react-router-dom";

function Notice() {
  return (
    <>
      <h1>Notice Test</h1>
      <Link to={"/"}>
        <BaseButton message={"Home"} />
      </Link>
    </>
  );
}

export default Notice;
