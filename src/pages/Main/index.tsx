import { useEffect, useState } from "react";
import { MainWrapper } from "./style";
import classNames from "classnames";
import NewGameList from "./NewGameList";
import FocusGameList from "./FocusGameList";
import { getGameList } from "../../api/index";

export default function Main() {
  const [gameData, setGameData] = useState<number[]>([]);
  const [tab, setTab] = useState("新游");
  const changeTab = (tabName: string) => {
    setTab(tabName);
  };
  useEffect(() => {
    (async () => {
      const { data } = await getGameList();
      setGameData(data);
    })();
  }, []);

  return (
    <MainWrapper className="main-tab">
      <ul>
        <li
          className={classNames({ active: tab === "新游" })}
          onClick={changeTab.bind(null, "新游")}
        >
          新游
        </li>
        <li
          className={classNames({ active: tab === "关注" })}
          onClick={changeTab.bind(null, "关注")}
        >
          关注
        </li>
      </ul>
      {tab === "新游" && <NewGameList source={gameData} />}
      {tab === "关注" && <FocusGameList />}
    </MainWrapper>
  );
}
