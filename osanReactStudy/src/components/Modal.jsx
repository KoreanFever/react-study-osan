import React from 'react';

// 공통 Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  // 모달이 열려 있지 않으면 렌더링하지 않음
  if (!isOpen) return null;

  return (
    // 어두운 반투명 배경 + 가운데 정렬
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 transition-opacity duration-300">

      {/* 모달 내용 영역 */}
      <div className="bg-white p-6 rounded-xl shadow-xl w-80 animate-fadeIn dark:bg-gray-800 dark:text-white">

        {/* 모달 안에 들어갈 내용 (children으로 받아옴) */}
        {children}

        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="mt-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;
