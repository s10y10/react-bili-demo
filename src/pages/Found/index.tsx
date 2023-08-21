import { useState, useEffect } from 'react';
import { getVideoList } from '../../api';
import { FoundWrapper } from './style';
import FoundList from './FoundList';

function Found() {
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getVideoList();
      setList(data);
    })();
  }, []);

  return (
    <FoundWrapper>
      <FoundList source={list} />
    </FoundWrapper>
  );
}

export default Found;
