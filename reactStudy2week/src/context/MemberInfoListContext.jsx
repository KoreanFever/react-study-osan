import { createContext, useContext, useEffect, useState } from "react"

const MemberInfoListContext = createContext()

export function useMemberInfoListContext() {
    return useContext(MemberInfoListContext)
}

export function MemberInfoListProvider({children}) {
  const [memberInfoList, setMemberInfoList] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/init')
    .then(res => res.json())
    .then(res => {
      let dataList = res.initialData
      dataList = dataList.map(data => {
        data.isLate = data.is_late
        data.isWorking = data.is_working
        data.joinDate = data.join_date
        data.totalVacationDate = data.total_vacation_date
        data.vacationInfo = data.vacation_info
        
        return data
      })
      
      console.log(dataList)
      return setMemberInfoList(dataList)
    })  
  }, [])

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