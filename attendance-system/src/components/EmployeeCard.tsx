import React, { useState } from 'react';
import EmployeeModal from './EmployeeModal';

interface EmployeeCardProps {
  name: string;
  department: string;
  hireDate: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ name, department, hireDate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateYearsOfService = (hireDate: string): number => {
    const hire = new Date(hireDate);
    const today = new Date();
    return today.getFullYear() - hire.getFullYear();
  };

  const getDepartmentColor = (department: string): { bg: string; text: string; border: string } => {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      '개발': { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      '디자인': { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
      '마케팅': { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
      '기획': { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
      '인사': { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
    };
    return colors[department] || { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200' };
  };

  const colors = getDepartmentColor(department);
  const yearsOfService = calculateYearsOfService(hireDate);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div 
        className={`${colors.bg} ${colors.border} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 w-80`}
      >
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-md">
              <span className={`${colors.text} text-xs font-semibold`}>{department}</span>
            </div>
            <h3 
              className={`${colors.text} text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity`}
              onClick={openModal}
            >
              {name}
            </h3>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">입사일:</span> {hireDate}
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">근무년수:</span> {yearsOfService}년차
            </p>
          </div>
        </div>
      </div>

      <EmployeeModal
        isOpen={isModalOpen}
        onClose={closeModal}
        name={name}
        department={department}
        hireDate={hireDate}
        yearsOfService={yearsOfService}
        colors={colors}
      />
    </>
  );
};

export default EmployeeCard; 