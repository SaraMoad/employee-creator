
export interface Employee {
    id: string;
    firstName: string;
    lastName: string,
    contract: string,
    email: string;
    dob: string;
    roleTitle: string,
    startDate: string;
    lengthOfEmployment: string,
}

export class Employee {
    public static async getAll(): Promise<Employee[]> {
      const data = await fetch('http://localhost:8080/EmployeeList');
      if (!data.ok) {
            throw new Error('Failed to get todo Items');
          }
          return data.json();

  };
        public static async find(id: string): Promise<Employee[]> {
        const data = await fetch(`http://localhost:8080/EmployeeList/${id}`);
          if (!data.ok) {
            throw new Error('Failed to get todo Items');
          }
          return data.json();
        };
    

    public static async add(data: any): Promise<Employee[]> {
    const response = await fetch('http://localhost:8080/EmployeeList', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

    if (!response.ok) {
      throw new Error('Failed to get todo Items');
    }
    return Employee.getAll();
    };

  public static async update(id: string| undefined, data: any): Promise<Employee[]> {
  const response = await fetch(`http://localhost:8080/EmployeeList/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ ...data, id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to update Todo Item');
  }
  return Employee.getAll();
};
    
public static async delete(id: string): Promise<Employee[]> {
  const response = await fetch(`http://localhost:8080/EmployeeList/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to delete item');
    }
    return Employee.getAll();
};

}