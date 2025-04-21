import React from "react";

function Card(props) {
    const memberInfo = props.memberInfo;
    const nowDate = new Date();
    const joinDate = new Date(memberInfo.joinDate);
    const diffTime = nowDate.getTime() - joinDate.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24)
    const diffYears = Math.floor(diffDays / 365)
    memberInfo.diffYears = diffYears;
    if (memberInfo.department === "인사팀") {
        memberInfo.backgroundColor = "bg-lime-200"
    }
    if (memberInfo.department === "기획팀") {
        memberInfo.backgroundColor = "bg-sky-200"
    }
    if (memberInfo.department === "해외영업팀") {
        memberInfo.backgroundColor = "bg-red-200"
    }
    
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex pb-3">
            <div className="h-48 lg:h-auto w-128 lg:w-128 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            </div>
            <div className={memberInfo.backgroundColor + " lg:w-128 w-128 border-r border-b lg:border-l border-gray-400 lg:border-t lg:border-gray-400 rounded-xl lg:rounded-xl p-4 flex flex-col justify-between leading-normal"}>
                <div className="mb-8">
                    {
                        Object.keys(memberInfo).map(key => {
                            let fieldName = ""
                            if (key === "name") {
                                fieldName = "이름"
                            }
                            if (key === "department") {
                                fieldName = "부서"
                            }
                            if (key === "joinDate") {
                                fieldName = "입사일"
                            }
                            if (key === "diffYears") {
                                fieldName = "년차"
                            }
                            return (
                                fieldName === '' ? false:
                                <p className="text-base text-black-600 flex items-center" key={key + memberInfo.name}>
                                {fieldName}: {memberInfo[key]}
                                </p>
                            )
                        })
                    }
                </div>
            </div>
            <div className="h-48 lg:h-auto w-128 lg:w-128 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            </div>
        </div>
    )
}

export default Card;