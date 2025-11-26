
import { db } from "../firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

export const createPayment = async (data: any) => {
  console.log("payload호출됨 데이터 >", data);

  if (!data || typeof data !== "object") {
    console.error("잘못된 데이터:", data);
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "payments"), data);
    console.log("Firestore 저장 성공! 문서 ID:", docRef.id);
    return { id: docRef.id, ...data };
  } catch (err) {
    console.error("Firestore 저장 중 오류:", err);
  }
};


export const getPayments = async () => {
  const res = await getDocs(collection(db, "payments"));
  return res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updatePayment = async (id: string, data: any) => {
  const res = doc(db, "payments", id);
  await updateDoc(res, data);
};

export const deletePayment = async (id: string) => {
  const res = doc(db, "payments", id);
  await deleteDoc(res);
};
