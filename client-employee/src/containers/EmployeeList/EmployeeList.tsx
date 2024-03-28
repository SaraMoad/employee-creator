import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { Employee } from "../../services/employees";
import styles from "./TodoList.module.scss";

interface EmployeeListProps {
  employees: Employee[] | null;
  setEmployees: (res: any) => any;
  setEmployee: (res: any) => any;
  setIsOpen: (value: boolean) => unknown;
  dispatchToast: (message: string, variant: string) => any;
}
const EmployeeList = ({
  employees,
  setEmployees,
  setEmployee,
  setIsOpen,
  dispatchToast,
}: EmployeeListProps) => {
  return (
    <div className={styles.container}>
      {employees &&
        employees?.map((employee: Employee) => {
          return (
            <div className={styles.card__container}>
              <EmployeeCard
                key={employee.id}
                firstName={employee.firstName}
                lastName={employee.lastName}
                dob={employee.dob}
                email={employee.email}
                lengthOfEmployment= {employee.lengthOfEmployment}
                roleTitle={employee.roleTitle}
                contract={employee.contract}
                startDate={employee.startDate}
                id={employee.id}
                setEmployee={setEmployee}
                setIsOpen={setIsOpen}
                setEmployees={setEmployees}
                dispatchToast={dispatchToast}
              />
            </div>
          );
        })}
    </div>
  );
};

export default EmployeeList;
