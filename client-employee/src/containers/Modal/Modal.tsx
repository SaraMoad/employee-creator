import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Modal.module.scss";
import { Employee } from "../../services/employees";

interface ModalProps {
  employee: Employee | undefined;
  isOpen: boolean;
  setIsOpen: (value: any) => any;
  setEmployee: (employee: Employee | undefined)  => unknown;
  setEmployees: (employees: Employee[] | null) => unknown;
  dispatchToast: (message: string, variant: string) => any;
}

const Modal = ({
  employee,
  setIsOpen,
  isOpen,
  setEmployee,
  setEmployees,
  dispatchToast,
}: ModalProps) => {
  const handleDelete = async (data: any) => {
    await Employee.delete(data)
      .then((res) => setEmployees(res))
      .catch((e) => dispatchToast(e.message, "error"));
    setIsOpen(false);
    dispatchToast( `${employee?.firstName} ${employee?.lastName} deleted`, "success");
  };

 
  const onClick = () => {
    setIsOpen(false);
    setEmployee(undefined);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.container}>
          <div className={styles.modalBox}>
            <div className={styles.button}>
              <button className={styles.button} onClick={onClick}>
                <FontAwesomeIcon className={styles.icon} icon={faXmark} />
              </button>
            </div>
      <p> Are you sure you want to delete {employee?.firstName} {employee?.lastName}?</p>
      <button onClick={handleDelete}>
        Yes
      </button>
      <button onClick={onClick}>
        Cancel
      </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
