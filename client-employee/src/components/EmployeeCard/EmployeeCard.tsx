import { Employee } from "../../services/employees";
import { contracts } from "../../services/contracts";
import styles from "./todoItem.module.scss";

interface EmployeeCardProps {
  firstName: string;
  lastName: string;
  lengthOfEmployment: string;
  roleTitle: string;
  contract: string;
  startDate: string;
  email: string;
  dob: string;
  id: string;
  setEmployees: (res: any) => any;
  setEmployee: (res: any) => any;
  setIsOpen: (res: any) => any;
  dispatchToast: (message: string, variant: string) => unknown;
}

const EmployeeCard = ({
  firstName,
  lastName,
  roleTitle,
  contract,
  lengthOfEmployment,
  id,
  setEmployees,
  setEmployee,
  setIsOpen,
  dispatchToast,
}: EmployeeCardProps) => {
    
  const handleClick = () => {
    console.log('routes to employee')
  };


  const handleDelete = () => {
    Employee.delete(id)
      .then((res) => setEmployees(res))
      .catch((res) => dispatchToast(res.message, "error"));
    dispatchToast("Todo Task Deleted", "success");
  };

  const handleEdit = async () => {
    await Employee.find(id).then((res) => setEmployee(res));
    setIsOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__item}>
            <button onClick={handleClick}>
          <h3 className={styles.name}>{firstName + lastName}</h3>
            </button>
          <p className={styles.dueDate}>Length of Employment: {lengthOfEmployment.slice(0, 10)}</p>
        </div>
        <div className={styles.header__item}>
          <p className={styles.priority}>{contracts[Number(contract)]}</p>
          <button className={styles.button} onClick={handleEdit}>
            edit
          </button>
          <button className={styles.button} onClick={handleDelete}>
            remove
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.roleTitle}>{roleTitle}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;