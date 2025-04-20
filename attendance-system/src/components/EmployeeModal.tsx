import React from 'react';

interface EmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  department: string;
  hireDate: string;
  yearsOfService: number;
  colors: {
    bg: string;
    text: string;
    border: string;
  };
}

const EmployeeModal: React.FC<EmployeeModalProps> = ({
  isOpen,
  onClose,
  name,
  department,
  hireDate,
  yearsOfService,
  colors,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className={`${colors.bg} p-6 rounded-xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className={`${colors.text} text-2xl font-bold`}>{name} 상세 정보</h2>
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="text-gray-600">
              <span className="font-semibold">부서:</span> {department}
            </p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="text-gray-600">
              <span className="font-semibold">입사일:</span> {hireDate}
            </p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="text-gray-600">
              <span className="font-semibold">근무년수:</span> {yearsOfService}년
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal; 