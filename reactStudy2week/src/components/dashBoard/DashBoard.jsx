import { useMemberInfoListContext } from "../../context/MemberInfoListContext"
import List from "./List";
import WeatherBoard from "./WeatherBoard";

function DashBoard () {
    const { memberInfoList, updateMemberInfo } = useMemberInfoListContext()

    return (
         <>
            <WeatherBoard /> 
            {memberInfoList.map(memberInfo => {
              return <List memberInfo={memberInfo} 
                            key={memberInfo.id}>                            
                     </List>
              }) 
            }
          </>
    )
}

export default DashBoard;