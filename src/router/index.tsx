import { Route, Routes } from 'react-router-dom';
import PageFound from '../pages/Found';
import PageMain from '../pages/Main';
import PageUser from '../pages/User';

export const createRouters = () => {
  return (
    <Routes>
      <Route path='/' element={<PageMain />}></Route>
      <Route path='/main' element={<PageMain />}></Route>
      <Route path='/found' element={<PageFound />}></Route>
      <Route path='/user' element={<PageUser />}></Route>
    </Routes>
  );
};
