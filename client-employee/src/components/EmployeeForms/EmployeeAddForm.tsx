import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./TodoForm.module.scss";

interface AddEmployeeProps {
  submitHandler: (data: any) => any;
}

const AddTodoForm = ({ submitHandler }: AddEmployeeProps) => {
  const schema = z.object({
    firstName: z.string().min(1, "First Name must be at least 1 character long"),
    roleTitle: z
      .string()
      .min(1, "Description must be at least 1 character long"),
    startDate: z.string(),
    contract: z.string(),
    email: z.string().email(),
    dob: z.string(),
    
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

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
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" id="lastName" {...register("lastName")} />
        {errors.lastName && (
          <p className={styles.error}>{errors.lastName.message?.toString()}</p>
        )}
      </div>
      <div className={styles.div}>
        <label htmlFor="email76543">Last Name: </label>
        <input type="text" id="lastName" {...register("lastName")} />
        {errors.lastName && (
          <p className={styles.error}>{errors.lastName.message?.toString()}</p>
        )}
      </div>
      <div className={styles.div}>
        <label htmlFor="roleTitle">Position: </label>
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
        {errors.dueDate && (
          <p className={styles.error}>{errors.startDate?.message?.toString()}</p>
        )}
      </div>
      <div className={styles.div}>
        <label htmlFor="contract">Contract: </label>
        <select id="contract" {...register("contract")}>
          <option value="0">Contract</option>
          <option value="1">Part-Time</option>
          <option value="2">Full-Time</option>
          <option value="3">Apprenticeship</option>
          <option value="4">Internship</option>
        </select>
        {errors.contract && (
          <p className={styles.error}>{errors.contract.message?.toString()}</p>
        )}
      </div>
      <div className={styles.button__container}>
        <button className={styles.button} type="submit">
          Create Task
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;
