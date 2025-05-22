import React, { useReducer } from 'react';
import Modal from './Modal'; // 공통 모달 컴포넌트 import

// 부서명에 따라 카드 배경색 설정
const getDepartmentColor = (dept) => ({
  개발팀: 'bg-blue-100',
  디자인팀: 'bg-pink-100',
  마케팅팀: 'bg-green-100',
}[dept] || 'bg-gray-100'); // 기본값은 gray

// 입사 연차 계산
const calculateYears = (date) => new Date().getFullYear() - new Date(date).getFullYear();

// 모달 상태 초기값
const initialModalState = { isOpen: false };

// useReducer로 모달 상태 관리
const modalReducer = (state, action) => {
  switch (action.type) {
    case 'open': return { isOpen: true };
    case 'close': return { isOpen: false };
    default: return state;
  }
};

const TeamMemberCard = ({ name, department, joinDate, image }) => {
  const years = calculateYears(joinDate); // 입사 연차 계산
  const bgColor = getDepartmentColor(department); // 부서에 따른 배경색
  const [modal, dispatch] = useReducer(modalReducer, initialModalState); // 모달 상태 reducer

  // 연차에 따라 뱃지 색상 분기
  const badgeColor = years >= 10
    ? 'bg-red-400'    // 10년 이상: 베테랑 (빨강)
    : years >= 5
      ? 'bg-yellow-300' // 5년 이상: 시니어 (노랑)
      : '';             // 그 외: 뱃지 없음

  return (
    <>
      {/* 팀원 카드 영역 */}
      <div
        className={`rounded-xl shadow-md p-4 w-64 cursor-pointer hover:shadow-lg transition ${bgColor} dark:bg-gray-700`}
        onClick={() => dispatch({ type: 'open' })} // 클릭 시 모달 열기
      >
        {/* 이름 + 연차 뱃지 */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white underline">{name}</h2>
          {years >= 5 && (
            <span className={`text-xs font-semibold px-2 py-1 rounded-full text-white ${badgeColor}`}>
              {years >= 10 ? '베테랑' : '시니어'} {/* 조건에 따라 라벨 변경 */}
            </span>
          )}
        </div>

        {/* 기본 정보 출력 */}
        <p className="text-gray-700 dark:text-gray-300">부서: {department}</p>
        <p className="text-gray-600 dark:text-gray-400">입사일: {joinDate}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{years}년차</p>
      </div>

      {/* 모달: 상세 정보 표시 */}
      <Modal isOpen={modal.isOpen} onClose={() => dispatch({ type: 'close' })}>
        <div className="flex flex-col items-center gap-3">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <h3 className="text-lg font-bold">{name}</h3>
          <p><strong>부서:</strong> {department}</p>
          <p><strong>입사일:</strong> {joinDate}</p>
          <p><strong>입사 연차:</strong> {years}년차</p>
        </div>
      </Modal>
    </>
  );
};

export default TeamMemberCard;
