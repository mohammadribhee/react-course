import styles from "./Button.module.css";
interface Prop {
  children: string;
  color?: "primary" | "secondary" | "success";
  onClick: () => void;
}

function Button({ children, onClick, color = "primary" }: Prop) {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
