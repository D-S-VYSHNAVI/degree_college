import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  variant = 'primary', 
  className = '', 
  onClick, 
  type = 'button',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500";
  
  const variants = {
    primary: "text-white bg-primary-600 hover:bg-primary-700",
    secondary: "text-primary-700 bg-primary-100 hover:bg-primary-200",
    outline: "text-primary-600 bg-transparent border-primary-600 hover:bg-primary-50",
    white: "text-primary-600 bg-white hover:bg-slate-50",
  };

  const content = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return content;
};

export default Button;
