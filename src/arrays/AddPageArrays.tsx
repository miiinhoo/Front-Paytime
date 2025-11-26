// AddPageArrays.ts
import Fridge from "../imgs/pngtree-vector-fridge-icon-png-image_696304.jpg";
import Netflix from '../imgs/NetflixIcon.png';

export const AddPageArrays = [
  { 
    id: 1, 
    text: "품목명", 
    name: "title", 
    type: "dropdown",
    outerSelect: [
      {
        name: "품목",
        innerSelect: [
          { img: Fridge, name: "노트북 / 컴퓨터" },
          { img: Fridge, name: "스마트폰" },
          { img: Fridge, name: "TV / 모니터" },
          { img: Fridge, name: "냉장고" },
          { img: Fridge, name: "세탁기" },
          { img: Fridge, name: "에어컨" },
        ],
      },
      {
        name: "정기결제",
        innerSelect: [
          { img: Netflix, name: "Netflix" },
          { img: Netflix, name: "Spotify" },
          { img: Netflix, name: "Disney+" },
          { img: Netflix, name: "YouTube Premium" },
          { img: Netflix, name: "Canva Pro" },
          { img: Netflix, name: "Adobe CC" },
        ],
      },
    ],
  },
  { id: 2, text: "수량", name: "amount", type: "number" },
  { id: 3, text: "날짜", name: "payDate", type: "date" },
  {
    id: 4,
    text: "결제방법",
    name: "method",
    type: "select", 
    options: ["카드", "현금", "계좌이체"], // 옵션 목록
  },
  {
    id: 5,
    text: "개월수",
    name: "cycle",
    type: "select",
    options: ["일시불", "2개월", "3개월","4개월", "5개월", "6개월", "9개월", "12개월"], 
  },
  {
    id: 6,
    text: "할부금",
    name:"price",
    type:"number",
  },
  {
    id: 7,
    text: "총 금액",
    name:"totalPrice",
    type:"number"
  },
  {
    id: 8,
    text: "D-day",
    name: "dDay",
    type: "number",
  },  
  {
    id: 9,
    text: "결제상태",
    name: "status",
    type:"select",
    options : ["예정","완료","미납"]
  },
  { id: 10, text: "요금제", name: "memo", type: "text" },
];
