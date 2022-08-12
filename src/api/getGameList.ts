import { img1, img2, img3, img4, img5 } from '../config';
import { icon1, icon2, icon3, icon4, icon5 } from '../config';

export function getGameList() {
  return Promise.resolve({ data });
}

var data = [
  {
    id: 1,
    img: img1,
    icon: icon1,
    title: '魔法纪录  魔法少女小圆外传',
    num: '8.7',
    tag1: '角色扮演',
    tag2: '二次元',
    tag3: '养成',
    desc: '天音姐妹夏日泳装版本上线!',
    bz: 'B站指数: 小于500',
  },
  {
    id: 2,
    img: img2,
    icon: icon2,
    title: 'BanG Dream!',
    num: '9.2',
    tag1: '音乐节奏',
    tag2: '二次元',
    tag3: '养成',
    desc: '全新活动开启!',
    bz: 'B站指数: 3.2万',
  },
  {
    id: 3,
    img: img3,
    icon: icon3,
    title: '暗影火炬城',
    num: '9.3',
    tag1: '动作',
    tag2: '冒险',
    tag3: '银河恶魔城',
    desc: '国产银河恶魔城游戏火热预约中!',
    bz: 'B站指数: 4702',
  },
  {
    id: 4,
    img: img4,
    icon: icon4,
    title: '灵笼 : 火种',
    num: '8.8',
    tag1: '角色扮演',
    tag2: '二次元',
    tag3: '战斗',
    desc: '爷又双叒叕来拯救世界了!',
    bz: 'B站指数: 小于500',
  },
  {
    id: 5,
    img: img5,
    icon: icon5,
    title: '妄想破绽',
    num: '7.9',
    tag1: '文字',
    tag2: '科幻',
    tag3: '文字冒险',
    desc: '你真的认识这个世界吗?',
    bz: 'B站指数: 小于500',
  },
];
