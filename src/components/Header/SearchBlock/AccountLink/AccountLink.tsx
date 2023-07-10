import React from 'react'
import styles from "./accountLink.module.css"
import { useUserData } from '../../../../hooks/useUserData'
import { AnonymIcon } from '../../../Icons/AnonymIcon';
import { useToken } from '../../../../hooks/useToken';

export function AccountLink() {
  const [token] = useToken();

  const [userData] = useUserData(token);
  
  return (
    <div>
      <a 
      href="https://www.reddit.com/api/v1/authorize?client_id=a1goRSAVGC8bMTcmzGcJrQ&response_type=token&state=random_string&redirect_uri=http://localhost:3000/&scope=read submit identity"
      className={styles.accountLink}
      >
      {userData.iconImg
        ? <img className={styles.accountImg} src="https://th.bing.com/th/id/OIP.DUYeeVjprs2A4uZGq7D6IwHaHy?pid=ImgDet&rs=1" alt='user avatar'></img>
        : <AnonymIcon />
      }
      {userData.name
        ? userData.name
        : "Аноним"
      } 
      </a>
    </div>
  )
}
