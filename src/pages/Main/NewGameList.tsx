import { NewGameListWrapper, NewGameListItemWrapper } from './style';

export default function NewGameList({ source }: any) {
  const renderItem = () => {
    return source.map((item: any) => {
      return (
        <NewGameListItemWrapper className='item-new_game' key={item.id}>
          <div className='item-new_game-content'>
            <img src={item.img} />
          </div>
        </NewGameListItemWrapper>
      );
    });
  };

  return <NewGameListWrapper>{renderItem()}</NewGameListWrapper>;
}
