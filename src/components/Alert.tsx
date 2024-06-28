import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  OnClose:()=>void
}

const Alert = ({ children,OnClose }: Props) => {
  return (
    <div className="alert alert-primary  alert-dismissible " style={{backgroundColor:"red"}}>
      {children}
      <button type="button" onClick={OnClose} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

export default Alert;
