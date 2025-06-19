import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import List from './components/List'
import WeatherBoaard from './components/WeatherBoard'
import VacationRequest from './components/VacationRequest'

function App() {
  const [currentPage, setCurrentPage] = useState('')
  const [memberInfoList, setMemberInfoList] = useState( [
    {
      id: 1,
      name: "박상길",
      department: "인사팀",
      joinDate: "2022-04-19",
      isWorking: false,
      isLate: false,
    },
    {
      id: 2,
      name: "정진호",
      department: "기획팀",
      joinDate: "2012-02-20",
      isWorking: false,
      isLate: false,
    },
    {
      id:3,
      name: "연민수",
      department: "해외영업팀",
      joinDate: "2010-01-11",
      isWorking: false,
      isLate: false,
    }
  ])
  const [memberVacationInfo, setMemberVacationInfo] = useState({})

  const updateMemberInfo = (memberInfo) => {
    memberInfoList.forEach(info => {
      if (info.id === memberInfo.id) {
        console.log('info', info)
        info = memberInfo
      }
    })
    setMemberInfoList(memberInfoList)
  }

  
 

  return (
    <div className='flex items-center h-screen flex-col'>
      <header className='fixed top-0'>
        <button onClick={() => setCurrentPage('Card')}>출결관리</button>
        <button onClick={() => setCurrentPage('List')}>대시보드</button>
        <button onClick={() => setCurrentPage('VacationRequest')}>연차신청</button>
      </header>
      <div className='mt-16'>
      {
        currentPage === 'Card' ? 
          (memberInfoList.map(memberInfo => {
            return <Card memberInfo={memberInfo} 
                        updateMemberInfo={updateMemberInfo} 
                        key={memberInfo.id}>
                  </Card>
          })) 
        : currentPage === 'List' ? 
          ( <><WeatherBoaard></WeatherBoaard> 
            
            {memberInfoList.map(memberInfo => {
              return <List memberInfo={memberInfo} 
                            key={memberInfo.id}>                            
                            </List>
              }) 
            }
          </>) 
        : currentPage === 'VacationRequest' ? 
            <VacationRequest></VacationRequest>
          : '버튼을 눌러 메뉴를 선택해주세요'
      }
      </div>
    </div>
  )
}

export default App
