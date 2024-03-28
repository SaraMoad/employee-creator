import { Employee } from "../../services/employees"

interface EmployeePageProps {
employee: Employee | undefined;
}

const EmployeePage = ({employee}: EmployeePageProps) => {
  return (
    <div>EmployeePage</div>
  )
}

export default EmployeePage