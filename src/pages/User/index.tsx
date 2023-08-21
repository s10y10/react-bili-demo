import { useState, useEffect } from 'react';
import { getGameList } from '../../api';
import { UserWrapper } from './style';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

export default function User() {
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const res = await getGameList();
      setList(res.data);
    })();
  }, []);

  return (
    <UserWrapper>
      <Swiper
        effect={'cube'}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 40,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
      >
        {list.map((item: any) => {
          return (
            <SwiperSlide key={item.id}>
              <div className='item-content'>
                <img src={item.img} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </UserWrapper>
  );
}
