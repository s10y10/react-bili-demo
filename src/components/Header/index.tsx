import { useState, useEffect } from 'react';
import { HeaderWrapper } from './style';
import { pageTitle } from '../../config';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [title, setTitle] = useState();
  const { pathname = '/' } = useLocation();
  useEffect(() => {
    const _title = pageTitle[pathname] || '';
    setTitle(_title);
  });
  return (
    <HeaderWrapper className='header'>
      <div className='t-left'>
        <div className='t-back'>
          <span className='fa fa-arrow-left'></span>
        </div>
      </div>
      <div className='t-center'>
        <span className='t-txt'>{title}</span>
      </div>
      <div className='t-notice'>
        <span className='fa fa-bell-o'></span>
      </div>
      <div className='t-right'>
        <div className='t-search'>
          <span className='fa fa-search'></span>
        </div>
      </div>
    </HeaderWrapper>
  );
}
