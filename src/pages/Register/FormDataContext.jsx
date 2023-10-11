import { useState, createContext } from 'react';

export const FormDataContext = createContext();

export const FormProvider = ({children}) => {
  const [formData, setFormData] = useState({});
  const [formThreeData, setFormThreeData] = useState({});

  const saveFormData = (data) => {
    setFormData(data);
    console.log(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveFormData(formThreeData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormThreeData(prevData => ({ ...prevData, [name]: value }))
  };

  return (
    <FormDataContext.Provider value={{ formData, formThreeData, saveFormData, setFormThreeData, handleSubmit, handleInputChange }}>
      {children}
    </FormDataContext.Provider>
  )
}