import axios from "axios"
import { useEffect, useState } from "react";

interface IAccountLink {
  name?: string
  iconImg?: string
}

export function useUserData(token: string) {
  const [userData, setUserData] = useState<IAccountLink>({});
  
  useEffect(() => {
    axios.get("https://oauth.reddit.com/api/v1/me", {
      headers: {Authorization: `bearer ${token}`}
    })
    .then((res) => {
      const userData = res.data;
      setUserData({name: userData.name, iconImg: userData.icon_img})
    })
    .catch(console.log)
  }, [token])
  
  return [userData];
}