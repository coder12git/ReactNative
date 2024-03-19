// State Management
import React, { createContext, useState } from 'react';

const HandlingDataContext = createContext();

export const HandlingDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    ingredients: '',
    number: '',
  });

  const resetFormData = () => {
    setFormData({ingredients: '', number: ''});
  }

  return (
    <HandlingDataContext.Provider value={{ formData, setFormData, resetFormData }}>
      {children}
    </HandlingDataContext.Provider>
  );
};

export default HandlingDataContext;
