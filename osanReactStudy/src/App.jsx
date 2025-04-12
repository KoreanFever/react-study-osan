import React, { useState } from 'react';
import TeamMemberCard from './components/TeamMemberCard'; // 팀원 카드 컴포넌트 import

// 팀원 정보 배열
const teamMembers = [
  {
    name: '김철수',
    department: '개발팀',
    joinDate: '2017-03-10',
    image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: '박영희',
    department: '디자인팀',
    joinDate: '2021-06-22',
    image: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: '이민호',
    department: '마케팅팀',
    joinDate: '2015-11-05',
    image: 'https://i.pravatar.cc/150?img=8',
  },
];

function App() {
  const [search, setSearch] = useState(''); // 검색어 상태
  const [dark, setDark] = useState(false); // 다크모드 상태

  // 이름 또는 부서로 필터링된 팀원 목록
  const filtered = teamMembers.filter((member) =>
    member.name.includes(search) || member.department.includes(search)
  );

  return (
    // 다크모드 클래스 적용
    <div className={`${dark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition p-10">

        {/* 상단: 검색 입력창 + 다크모드 토글 */}
        <div className="mb-6 flex justify-between items-center max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="이름이나 부서로 검색..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-md w-64 dark:bg-gray-800 dark:text-white"
          />
          <button
            onClick={() => setDark(!dark)}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            {dark ? '☀️ 라이트모드' : '🌙 다크모드'}
          </button>
        </div>

        {/* 필터된 팀원 목록 출력 */}
        <div className="flex flex-wrap gap-6 justify-center">
          {filtered.map((member, i) => (
            <TeamMemberCard key={i} {...member} /> // props 전개 전달
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
