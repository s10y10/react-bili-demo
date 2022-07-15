import { NewGameListWrapper, NewGameListItemWrapper } from "./style";
import NewGameListItem from "./NewGameListItem";

export default function NewGameList({ source = [] }) {
  const renderItem = () => {
    return source.map((item) => {
      return (
        <NewGameListItemWrapper className="item-new_game" key={item}>
          <NewGameListItem className="item-new_game-content"></NewGameListItem>
        </NewGameListItemWrapper>
      );
    });
  };

  return <NewGameListWrapper>{renderItem()}</NewGameListWrapper>;
}
