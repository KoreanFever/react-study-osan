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
      return setMemberInfoList(res.initialData)
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