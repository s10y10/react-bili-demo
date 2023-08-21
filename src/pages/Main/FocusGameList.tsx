import { FocusGameListWrapper, FocusGameIconWrapper } from './style';

export default function FocusGameList({ source }: any) {
  const renderItem = () => {
    return source.map((item: any) => {
      return (
        <FocusGameIconWrapper className='item-focus_game' key={item.id}>
          <div className='item-focus_game-content'>
            <img src={item.icon} />
          </div>
        </FocusGameIconWrapper>
      );
    });
  };
  return <FocusGameListWrapper>{renderItem()}</FocusGameListWrapper>;
}
