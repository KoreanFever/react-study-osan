import { createContext, useContext, useState } from "react"


export const memberInfoList = [
    {
      id: 1,
      name: "박상길",
      department: "인사팀",
      joinDate: "2022-04-19",
      isWorking: false,
      isLate: false,
      totalVacationDate: 15,
      vacationInfo: []
    },
    {
      id: 2,
      name: "정진호",
      department: "기획팀",
      joinDate: "2012-02-20",
      isWorking: false,
      isLate: false,
      totalVacationDate: 19,
      vacationInfo: []
    },
    {
      id:3,
      name: "연민수",
      department: "해외영업팀",
      joinDate: "2010-01-11",
      isWorking: false,
      isLate: false,
      totalVacationDate: 19,
      vacationInfo: []
    }
  ]

const MemberInfoListContext = createContext()

export function useMemberInfoListContext() {
    return useContext(MemberInfoListContext)
}

export function MemberInfoListProvider({children}) {
  const [memberInfoList, setMemberInfoList] = useState([
    {
      id: 1,
      name: "박상길",
      department: "인사팀",
      joinDate: "2022-04-19",
      isWorking: false,
      isLate: false,
      totalVacationDate: 15,
      vacationInfo: []
    },
    {
      id: 2,
      name: "정진호",
      department: "기획팀",
      joinDate: "2012-02-20",
      isWorking: false,
      isLate: false,
      totalVacationDate: 19,
      vacationInfo: []
    },
    {
      id:3,
      name: "연민수",
      department: "해외영업팀",
      joinDate: "2010-01-11",
      isWorking: false,
      isLate: false,
      totalVacationDate: 19,
      vacationInfo: []
    }
  ])

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
    <MemberInfoListContext.Provider value={{memberInfoList, updateMemberInfo}}>
      {children}
    </MemberInfoListContext.Provider>
  )
}