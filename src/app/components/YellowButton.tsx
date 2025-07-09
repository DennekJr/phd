import React from 'react';

interface YellowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function YellowButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '' 
}: YellowButtonProps) {
  const baseStyles = "font-bold !px-[70px] !py-[20px] rounded-[4px] transition-all duration-300 transform hover:cursor-pointer hover:scale-[1.02] hover:shadow-lg";
  
  const variants = {
    primary: {
      className: "text-gray-900 relative overflow-hidden group",
      style: {
        background: 'linear-gradient(135deg, #EFB025 0%, #F4C430 50%, #EFB025 100%)',
        // boxShadow: '0 10px 30px rgba(239, 176, 37, 0.4), 0 4px 15px rgba(0, 0, 0, 0.1)'
      }
    },
    secondary: {
      className: "text-gray-700 bg-white hover:bg-gray-50 border border-gray-200",
      style: {
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
      }
    }
  };

  const selectedVariant = variants[variant];

  return (
    <div className="relative group">
      {/* {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
      )} */}
      <button 
        onClick={onClick}
        className={`${baseStyles} ${selectedVariant.className.replace('group', '')} ${className} relative z-10`}
        style={selectedVariant.style}
      >
        {variant === 'primary' && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
        )}
        <span className="relative z-10">{children}</span>
      </button>
    </div>
  );
} 