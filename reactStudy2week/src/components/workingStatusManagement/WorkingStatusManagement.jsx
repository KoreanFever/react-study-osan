import { useMemberInfoListContext } from "../../context/MemberInfoListContext";
import Card from "./Card";

function WorkingStatusManagement(props) {
    const { memberInfoList, updateMemberInfo } = useMemberInfoListContext()
    
    return (
        (memberInfoList.map(memberInfo => {
            return <Card memberInfo={memberInfo} 
                        updateMemberInfo={updateMemberInfo} 
                        key={memberInfo.id}>
                  </Card>
          })) 
    )
}

export default WorkingStatusManagement;