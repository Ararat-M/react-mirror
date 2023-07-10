import { useEffect, useState } from "react";

export function useToken() {
  const [token, setToken] = useState("");
  
  useEffect(() => {
    const hash = window.location.hash;
    
    const hashWithoutHashSymbol = hash.slice(1);
    
    const searchParams = new URLSearchParams(hashWithoutHashSymbol);
    
    const accessToken = searchParams.get('access_token');
  
    setToken(`${accessToken}`);
  }, [])
  
  return [token]
}