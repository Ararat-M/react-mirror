import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom';
import classes from "./modal.module.css"

interface IModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose}: IModalProps) {
  const modalRoot = document.querySelector("#modal-root");
  
  if (!modalRoot) return null

  const ref = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    function handelClick(e: MouseEvent) {
      if (e.target instanceof Node && !ref.current?.contains(e.target)) {    
        
        onClose();
      }
    }
    
    document.addEventListener("click", handelClick);
    
    return () => {
      document.removeEventListener("click", handelClick);
    }
  }, [])

  return ReactDOM.createPortal((
    <div className={classes.modal}>
      <div className={classes.content} ref={ref}>
        {children}  
      </div>
    </div>
  ), modalRoot)
}