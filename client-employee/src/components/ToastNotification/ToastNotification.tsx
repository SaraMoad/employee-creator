import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ToastNotification.module.scss";

interface ToastNotificationProps {
  message: string | null;
  variant: string | null;
  setMessage: (message: string | null) => unknown;
  setVariant: (variant: string | null) => unknown;
  setIsClosed: (value: boolean) => unknown;
}
const ToastNotification = ({
  message,
  variant,
  setMessage,
  setVariant,
  setIsClosed,
}: ToastNotificationProps) => {
  const onClose = () => {
    setIsClosed(true);
    setMessage(null);
    setVariant(null);
  };

  let classList = [styles.toastContent];
  if (variant === "success") {
    classList = [styles.toastContent, styles.success];
  } else if (variant === "error") {
    classList = [styles.toastContent, styles.success];
  }

  return (
    <>
      <div className={styles.toastWrapper} data-testid="toastWrapper">
        <div className={styles.toastBox} data-testid="toastBox">
          <div className={classList.join(" ")} data-testid="toastContent">
            <p>{message}</p>
            <button
              className={styles.button}
              onClick={onClose}
              data-testid="toastClose"
            >
              <FontAwesomeIcon className={styles.icon} icon={faXmark} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToastNotification;
