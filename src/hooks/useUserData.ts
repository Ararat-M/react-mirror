import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../context";

interface IAccountLink {
  name?: string
  iconImg?: string
}

export function useUserData() {
  const [userData, setUserData] = useState<IAccountLink>({});
  const token = useContext(tokenContext);

  useEffect(() => {
    if (token) {
      const noCacheParam = `noCache=${Date.now()}`;
      const url = `https://oauth.reddit.com/api/v1/me?${noCacheParam}`;
  
      axios.get(url, {
        headers: {Authorization: `bearer ${token}`}
      })
      .then((res) => {
        const userData = res.data;
        setUserData({name: userData.name, iconImg: userData.icon_img})
      })
      .catch(console.log)
    }
  }, [token])
  
  return [userData];
}