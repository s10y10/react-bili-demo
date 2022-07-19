import { NewGameListWrapper, NewGameListItemWrapper } from "./style";
import NewGameListItem from "./NewGameListItem";

export default function NewGameList({ source }: any) {
  const renderItem = () => {
    return source.map((item: any) => {
      return (
        <NewGameListItemWrapper className="item-new_game" key={item.id}>
          <NewGameListItem source={item}></NewGameListItem>
        </NewGameListItemWrapper>
      );
    });
  };

  return <NewGameListWrapper>{renderItem()}</NewGameListWrapper>;
}
