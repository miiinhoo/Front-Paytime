import { useState } from "react";

type FireBaseTypes<T> = {
  get?: () => Promise<T[]>;
  create?: (data: T) => Promise<T>;
  update?: (id: number,data:Partial<T>) => Promise<T>;
  delete?: (id: number) => Promise<T>;
}
type FireBaseProps<T> = {
  api? : FireBaseTypes<T>,
  initFormData? : T
}

export default function useFireBase<T>(
  {api,initFormData}:FireBaseProps<T>) {

  const [ loading, setLoading ] = useState(false);
  const [ formData, setFormData ] = useState<T[]>(Array.isArray(initFormData) ? initFormData : initFormData ? [initFormData] : []);
  
    
  // 조회기능
  const getData = async() => {
    if(!api?.get){
      setLoading(true);
      return;
    }
    try{
      const res = await api.get();
      console.log("출력 성공 test... 받은 데이터 > " , res)
      setFormData(res as T[]);
    }finally{
      setLoading(false);
    }
  }
  const createData = async(data:T) => {
    console.log("useFirebase.tsx에서 받은 data > " , data)
    if(!api?.create){
      setLoading(true);
      return;
    }
    await api.create(data);
    await getData();
  }

  return { 
    api,
    loading,
    formData,
    setFormData,
    getData,
    createData
  };
}