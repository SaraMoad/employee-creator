import styles from "./Button.module.scss";
interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => any;
}

const Button = ({ handleClick, children }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
