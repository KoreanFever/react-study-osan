import React, { useState } from "react";
import { useEffect } from "react";

function Card(props) {
    const [isWorking, setIsWorking] = useState(false)
    const [isLate, setIsLate] = useState(false)
    const memberInfo = props.memberInfo;
    const updateMemberInfo = props.updateMemberInfo;
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
    // 출퇴근 상태 변경
    function changeWorkingState(id) {
        // isWorking == false -> 퇴근 상태
        // isWorking == true -> 출근 상태

        const currentHour = new Date();
        setIsWorking(prevIsWorking => {
            !prevIsWorking
            memberInfo.isWorking = !prevIsWorking;
            return !prevIsWorking;
        });

        localStorage.setItem(id, currentHour)
        
        memberInfo.recoredAt = currentHour
        updateMemberInfo(memberInfo)

        // 9시 이후 출근 시 지각 표시
        if (!isWorking && currentHour.getHours() >= 9 && currentHour.getMinutes() >= 0) {
            setIsLate(true);
        }

        if (isWorking) {
            setIsLate(false)
        }
    }
    // 출퇴근 시간 localStorage 저장
    function getCheckedHour(id) {
        const checkedHour = new Date(localStorage.getItem(id))
        return  checkedHour.getFullYear() + 
                '-' +  
                dateElementFormatter(checkedHour.getMonth()) +
                '-' + 
                dateElementFormatter(checkedHour.getDate()) +
                ' ' +
                dateElementFormatter(checkedHour.getHours()) +
                ':' +
                dateElementFormatter(checkedHour.getMinutes()) +
                ':' +
                dateElementFormatter(checkedHour.getSeconds()) 
    }

    // 날짜나 시간이 10보다 작을때 앞에 0을 추가해주는 함수
    function dateElementFormatter(element) {
        return element < 10 ? '0' + element : element
    }


    // 일정 시간이 지나면 자동 퇴근 처리 되도록
    // useEffect(() => {
    //     const interval = setInterval(function () {
    //         for (let i = 0; i <localStorage.length; i++) {
    //             const key = localStorage.key(i);
                
    //             const startWorkHour = new Date(localStorage.getItem(key));
    //             const currentHour = new Date();
    //             // 현재 시간이 출근 후 1분 뒤 일때 퇴근 처리
    //             if (isWorking && (startWorkHour.getMinutes() + 1 === currentHour.getMinutes())) {
    //                 changeWorkingState(key)
    //                 console.log('key: ', key)
    //             }
    //         }  
    //     }, 1000);

    //     return () => {
    //         clearInterval(interval)
    //     }
    // })
    // Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
    // state를 변화시키는 함수가 무한루프에 빠지게 되면 발생하는 에러로 볼 수 있음
    // state를 변화시키는 함수가 사용자 액션 시에만 동작하도록 해야함 -> 특히 이벤트 트리거에 연관된 함수
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
                                <div key={key + memberInfo.name}>
                                    {
                                        fieldName === '' ? <></> :
                                        <p className="text-base text-black-600 flex items-center" >
                                            {fieldName}: {memberInfo[key]}
                                        </p>
                                    }
                                </div>
                            )
                        })
                    }
                    <div>
                        <p className="text-base text-black-600 flex items-center">
                            {isWorking ? '출근 완료' : '퇴근 완료'} {isLate ? '지각입니다' : ''}
                        </p>
                        <p className="text-base text-black-600 flex items-center">
                            {isWorking ? '출근시간: ' : '퇴근시간: '} {getCheckedHour(memberInfo.id)}
                        </p>
                    </div>
                    <button onClick={() => changeWorkingState(memberInfo.id)} className="" >{isWorking ? '퇴근' : '출근'}</button>
                </div>
            </div>
            <div className="h-48 lg:h-auto w-128 lg:w-128 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            </div>
        </div>
    )
}

export default Card;