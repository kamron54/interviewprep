import React, { createContext, useContext, useState } from 'react';

const InterviewContext = createContext();

export const InterviewProvider = ({ children }) => {
  const [responses, setResponses] = useState([]);
  const [style, setStyle] = useState("ethical");

  return (
    <InterviewContext.Provider value={{ responses, setResponses, style, setStyle }}>
      {children}
    </InterviewContext.Provider>
  );
};

export const useInterview = () => useContext(InterviewContext);