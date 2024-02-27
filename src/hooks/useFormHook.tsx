import { useState, ChangeEvent, FormEvent } from 'react';

interface FormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
}

const useForm = () => {
  const [values, setValues] = useState<FormValues>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted with values:', values);
  };

  return {
    values,
    handleChange,
    handleSubmit,
    handleSelectChange
  };
};

export default useForm;
