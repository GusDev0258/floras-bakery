import React from 'react'
import styled from 'styled-components';


interface ButtonProps { 
  text?: string;
  icon?: React.ReactNode;
  action: () => void;
}

const Button = styled.button`
  background-color: #2E8B44; 
  color: #97D6A6;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: bold;
  font-family: Overpass, sans-serif;
  border: none;
  border-radius: 6px;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #97D6A6;
    color: #2E8B44;
  }
  `


const PrimaryButton = ({text, icon, action}:ButtonProps) => {
  
  return (
    <Button onClick={action}> 
      {text}
      {icon}
    </Button>
  )
}

export default PrimaryButton