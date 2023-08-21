import { Route, Routes } from 'react-router-dom';
import PageFound from '../pages/Found';
import PageMain from '../pages/Main';
import PageUser from '../pages/User';

import { Swiper, SwiperSlide } from 'swiper/react';

export const createRouters = () => {
  return (
    <Swiper>
      <Routes>
        <Route path='/' element={<PageMain />}></Route>
        <Route path='/main' element={<PageMain />}></Route>
        <Route path='/found' element={<PageFound />}></Route>
        <Route path='/user' element={<PageUser />}></Route>
      </Routes>
    </Swiper>
  );
};
