import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./TodoForm.module.scss";
import { Employee } from "../../services/employees";

interface AddTodoFormProps {
  submitHandler: (data: any) => any;
  employee: Employee;
}

const EditTodoForm = ({ submitHandler, employee }: AddTodoFormProps) => {
  const schema = z.object({
    name: z.string().min(1, "Task Name must be at least 1 character long"),
    description: z
      .string()
      .min(1, "description must be at least 1 character long"),
    dueDate: z.string(),
    contract: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: employee.firstName,
      lastName: employee.lastName,
      dob: employee.dob.slice(0, 22),
      roleTitle: employee.roleTitle,
      startDate: employee.startDate.slice(0, 22),
      contract: String(employee.contract),
      email: employee.email,  
    },
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.div}>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" id="firstName" {...register("firstName")} />
        {errors.firstName && (
          <p className={styles.error}>{errors.firstName.message?.toString()}</p>
        )}
      </div>
      <div className={styles.div}>
        <label htmlFor="roleTitle">Description: </label>
        <input type="text" id="roleTitle" {...register("roleTitle")} />
        {errors.roleTitle && (
          <p className={styles.error}>
            {errors.roleTitle.message?.toString()}
          </p>
        )}
      </div>
      <div className={styles.div}>
        <label htmlFor="startDate">Start Date: </label>
        <input type="datetime-local" id="startDate" {...register("startDate")} />
        {errors.startDate && (
          <p className={styles.error}>{errors.startDate?.message?.toString()}</p>
        )}
      </div>
      <div className={styles.div}>
        <label htmlFor="contract">Contract: </label>
        <select id="contract" {...register("contract")}>
          <option value="0">Urgent</option>
          <option value="1">High Priority</option>
          <option value="2">Mid Priority</option>
          <option value="3">Low Priority</option>
        </select>
        {errors.contract && (
          <p className={styles.error}>{errors.contract.message?.toString()}</p>
        )}
      </div>
      <button className={styles.button} type="submit">
        Edit Employee
      </button>
    </form>
  );
};

export default EditTodoForm;
