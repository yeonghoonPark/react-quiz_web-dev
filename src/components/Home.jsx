import BaseButton from "./base/BaseButton";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ marginTop: "66px" }}>
      <h1>HomePage Test</h1>
      <Link to={"/notice"}>
        <BaseButton message={"Notice"} />
      </Link>
    </div>
  );
}

export default Home;
