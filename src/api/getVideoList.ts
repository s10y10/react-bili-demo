import { pic1, pic2, pic3 } from '../config';
import { userImg1, userImg2, userImg3 } from '../config';

export function getVideoList() {
  return Promise.resolve({ data });
}

var data = [
  {
    id: 1,
    pic: pic1,
    videotime: '00:58',
    viewnum: '3310  观看',
    barragenum: '99  点赞',
    title: '本周活动吐槽，2022年了，我哥的头还是找不到',
    userimg: userImg1,
    name: '奥拉阡陌',
    time: '15天前',
    tag: '奥拉星',
  },
  {
    id: 2,
    pic: pic2,
    videotime: '00:58',
    viewnum: '3310  观看',
    barragenum: '99  点赞',
    title: '本周活动吐槽，2022年了，我哥的头还是找不到',
    userimg: userImg2,
    name: '奥拉阡陌',
    time: '15天前',
    tag: '奥拉星',
  },
  {
    id: 3,
    pic: pic3,
    videotime: '00:58',
    viewnum: '3310  观看',
    barragenum: '99  点赞',
    title: '本周活动吐槽，2022年了，我哥的头还是找不到',
    userimg: userImg3,
    name: '奥拉阡陌',
    time: '15天前',
    tag: '奥拉星',
  },
];
