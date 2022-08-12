import { FocusGameListWrapper, FocusGameIconWrapper } from './style';
import FocusGameIcon from './FocusGameIcon';

export default function FocusGameList({ source }: any) {
  const renderItem = () => {
    return source.map((item: any) => {
      return (
        <FocusGameIconWrapper className='item-focus_game' key={item.id}>
          <FocusGameIcon source={item}></FocusGameIcon>
        </FocusGameIconWrapper>
      );
    });
  };
  return <FocusGameListWrapper>{renderItem()}</FocusGameListWrapper>;
}
