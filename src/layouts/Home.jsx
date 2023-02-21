import BaseButton from "../components/base/BaseButton";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLogin } from "../reducers/login";

// https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=R8QiGDSVueMO56TC5PVt&client_secret=gEMP19Y_XT&access_token=AAAAOHyIiYgeLuBXEhmjWDJOfopBM_yWRYlLb664c3tAg6gyi-pBx4V7dkTGP_7JZgAbA4B-Mt02m_JRvl4qkaY9udo&state=29237055-c11c-4892-94dd-f3b392611803&service_provider=NAVER

function Home() {
  console.log("[Home]");

  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();

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
