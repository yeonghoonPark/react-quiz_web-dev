import BaseButton from "./base/BaseButton";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>HomePage Test</h1>
      <Link to={"/notice"}>
        <BaseButton message={"Notice"} />
      </Link>
    </>
  );
}

export default Home;
