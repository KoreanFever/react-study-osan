import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const memberInfoList = [
    {
      id: 1,
      name: "박상길",
      department: "인사팀",
      joinDate: "2022-04-19"
    },
    {
      id: 2,
      name: "정진호",
      department: "기획팀",
      joinDate: "2012-02-20"
    },
    {
      id:3,
      name: "연민수",
      department: "해외영업팀",
      joinDate: "2010-01-11"
    }
  ]
  return (
    <div>
      {memberInfoList.map(memberInfo => {
        return <Card memberInfo={memberInfo} key={memberInfo.id}></Card>
      })}
    </div>
  )
}

export default App
