import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'

export default function Footer(){
    const { pathname } = useLocation()
    return (
        <FooterWrapper>
            <Link to='/' className={classnames({active:pathname=='/'})}>
                <i className='iconfont icon-shouye'></i>
                <span>首页</span>
            </Link>
            <Link to='/found' className={classnames({active:pathname=='/found'})}>
                <i className='iconfont icon-faxian'></i>
                <span>发现</span>
            </Link>
            <Link to='/user' className={classnames({active:pathname=='/user'})}>
                <i className='iconfont icon-wode'></i>
                <span>我的</span>
            </Link>
        </FooterWrapper>
    )
}
