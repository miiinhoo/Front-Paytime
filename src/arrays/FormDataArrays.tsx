
export const FormDataArrays = [
  {
    addPage: {
      title: "",       // 할부방식 or 정기결제 / 품목명
      amount: 0,      // 수량(정기결제는 1개 고정)
      payDate: "",     // 결제일(할부납기일)
      method: "",      // 결제방법(일시불, n개월)
      cycle: "",   // 개월수 (기본값)
      price:0,     // 월 마다 청구하는 금액
      totalPrice:0, // 할부방식 select태그에 해당하는 상품의 "총"금액
      dDay:0,     // 결제일 - 오늘 / D-day
      status:"예정",  // 납부상태 ( 예정 / 완료 / 미납 )
      memo: "",        // 요금제(혹은 일반 메모 형태)
    },
  } as const,
];

export type PaymentData = typeof FormDataArrays[0]["addPage"];