import { image1, image2, image3, image4, image5 } from "../config";

export function getGameList() {
  return Promise.resolve({ data });
}

var data = [
  {
    id: 1,
    img: image1,
    icon: "https://i0.hdslb.com/bfs/game/fbda58134397860acedc54e47fd360f6791b1687.png@52w.png",
    title: "魔法纪录  魔法少女小圆外传",
    num: "8.7",
    tag1: "角色扮演",
    tag2: "二次元",
    tag3: "养成",
    desc: "天音姐妹夏日泳装版本上线!",
    bz: "B站指数: 小于500",
  },
  {
    id: 2,
    img: image2,
    icon: "https://i0.hdslb.com/bfs/game/6c5872bb5f60e503e378f732479234983932f39a.png@52w.png",
    title: "BanG Dream!",
    num: "9.2",
    tag1: "音乐节奏",
    tag2: "二次元",
    tag3: "养成",
    desc: "全新活动开启!",
    bz: "B站指数: 3.2万",
  },
  {
    id: 3,
    img: image3,
    icon: "https://i0.hdslb.com/bfs/game/3394174c08f5d393747cc7990985fcf18ed01e38.png@52w.png",
    title: "暗影火炬城",
    num: "9.3",
    tag1: "动作",
    tag2: "冒险",
    tag3: "银河恶魔城",
    desc: "国产银河恶魔城游戏火热预约中!",
    bz: "B站指数: 4702",
  },
  {
    id: 4,
    img: image4,
    icon: "https://i0.hdslb.com/bfs/game/35ee07d006f1b88e612cd4c01c00c757da4e79f6.png@52w.png",
    title: "灵笼 : 火种",
    num: "8.8",
    tag1: "角色扮演",
    tag2: "二次元",
    tag3: "战斗",
    desc: "爷又双叒叕来拯救世界了!",
    bz: "B站指数: 小于500",
  },
  {
    id: 5,
    img: image5,
    icon: "https://i0.hdslb.com/bfs/game/b2d5288176a7c0b00efc1acde362e231026f0ac4.png@52w.png",
    title: "妄想破绽",
    num: "7.9",
    tag1: "文字",
    tag2: "科幻",
    tag3: "文字冒险",
    desc: "你真的认识这个世界吗?",
    bz: "B站指数: 小于500",
  },
];
