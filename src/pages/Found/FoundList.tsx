import { FoundListWrapper, FoundListItemWrapper } from './style';

export default function FoundList({ source }: any) {
  const renderItem = () => {
    return source.map((item: any) => {
      return (
        <FoundListItemWrapper className='item-found_game' key={item.id}>
          <div className='item-found_game-content'>
            {item.title}
            <img src={item.userimg} />
            <img src={item.pic} />
          </div>
        </FoundListItemWrapper>
      );
    });
  };
  return <FoundListWrapper>{renderItem()}</FoundListWrapper>;
}
