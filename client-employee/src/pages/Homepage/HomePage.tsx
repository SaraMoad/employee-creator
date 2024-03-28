import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Modal from "../../containers/Modal/Modal";
import styles from "./Homepage.module.scss";
import { Employee } from "../../services/employees";
import EmployeeList from "../../containers/EmployeeList/EmployeeList";
import { redirect } from "react-router-dom";

 interface HomePageProps {
  employees : Employee[] | null;
  employee: Employee | undefined;
  setEmployee: (employee: Employee | undefined) => unknown;
  setEmployees: (employess: Employee[] | null) => unknown;
  dispatchToast: (message: string, variant: string) => any;
}
const HomePage = ({employees, employee, setEmployee, setEmployees, dispatchToast}:HomePageProps) => {
  const [isOpen, setIsOpen] = useState(false);


  const onClick = () => {
    redirect('/EmployeeForm');
  };



  useEffect(() => {
    Employee.getAll().then((res) => setEmployees(res));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Employees</h1>
      <div className={styles.button__container}>
        <Button handleClick={onClick}>Add Employee</Button>
      </div>
      <EmployeeList
        employees={employees}
        setEmployees={setEmployees}
        setIsOpen={setIsOpen}
        setEmployee={setEmployee}
        dispatchToast={dispatchToast}
      />
      {isOpen && (
        <Modal
          employee={employee}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setEmployee={setEmployee}
          setEmployees={setEmployees}
          dispatchToast={dispatchToast}
        />
      )}
    
    </div>
  );
};

export default HomePage;
