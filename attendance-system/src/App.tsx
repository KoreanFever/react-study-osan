import React from 'react';
import EmployeeCard from './components/EmployeeCard';

function App() {
  const employees = [
    {
      name: '홍길동',
      department: '개발',
      hireDate: '2020-01-15',
    },
    {
      name: '김철수',
      department: '디자인',
      hireDate: '2019-05-20',
    },
    {
      name: '이영희',
      department: '마케팅',
      hireDate: '2021-03-10',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            직원 출결 시스템
          </h1>
          <p className="text-gray-600">
            직원들의 정보를 확인하고 관리할 수 있습니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {employees.map((employee, index) => (
            <EmployeeCard
              key={index}
              name={employee.name}
              department={employee.department}
              hireDate={employee.hireDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
