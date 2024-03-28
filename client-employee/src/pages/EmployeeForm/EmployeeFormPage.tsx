import { redirect } from "react-router-dom";
import { Employee } from "../../services/employees";

interface EmployeeFormPageProps {
    employee: Employee | undefined;
    setEmployees: (employees : Employee[]) => unknown;
    setEmployee: (employee : Employee | undefined) => unknown;
    dispatchToast: (message: string, variant: string) => any;
}

const EmployeeFormPage = ({employee, setEmployees, setEmployee, dispatchToast}: EmployeeFormPageProps) => {

 const onSubmit = async (data: any) => {
        await Employee.add(data)
          .then((res) => setEmployees(res))
          .catch((e) => dispatchToast(e.message, "error"));
         redirect("/Employee/:id")
        dispatchToast("Employee  Added", "success");
      };
    
      const onSubmitEdit = async (data: any) => {
        await Employee.update(employee?.id, data).then((res) => {
          dispatchToast("Employee Updated", "success"), setEmployees(res);
        });
        setEmployee(undefined);
      };
      const onClick = () => {
        setEmployee(undefined);
      };
  return (
    <div></div>
  )
}

export default EmployeeFormPage