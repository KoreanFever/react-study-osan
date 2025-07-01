import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import List from './components/List'
import WeatherBoaard from './components/WeatherBoard'
import VacationRequest from './components/VacationRequest'
import { MemberInfoListProvider } from './context/MemberInfoListContext'

function App() {
  const [currentPage, setCurrentPage] = useState('')

  return (
    <div className='flex items-center h-screen flex-col'>
      <header className='fixed top-0'>
        <button onClick={() => setCurrentPage('List')}>대시보드</button>
        <button onClick={() => setCurrentPage('Card')}>출결관리</button>
        <button onClick={() => setCurrentPage('VacationRequest')}>연차신청</button>
      </header>
      <MemberInfoListProvider>
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
            <VacationRequest memberInfoList={memberInfoList}
                            updateMemberInfo={updateMemberInfo} 
            ></VacationRequest>
          : <div className="max-w-sm w-full lg:max-w-full lg:flex pb-3">
              <div className="h-48 lg:h-auto w-128 lg:w-128 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
              </div>
              <div className="h-48 lg:h-auto w-128 lg:w-128 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                버튼을 눌러 메뉴를 선택해주세요
              </div>
              <div className="h-48 lg:h-auto w-128 lg:w-128 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
              </div>
            </div>
              
                
      }
      </div>
      </MemberInfoListProvider>
    </div>
  )
}

export default App
