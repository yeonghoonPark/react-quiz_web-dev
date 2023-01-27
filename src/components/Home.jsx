import BaseButton from "./base/BaseButton";
import { Link } from "react-router-dom";

const test = () => {
  return;
};

function Home() {
  return (
    <>
      <h1>HomePage Test</h1>
      <Link to={"/notice"}>
        <BaseButton color={"green"} message={"Notice"} buttonClick={test} />
      </Link>
    </>
  );
}

export default Home;
