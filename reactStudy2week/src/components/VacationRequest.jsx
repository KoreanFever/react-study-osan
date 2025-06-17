import React, { useState } from "react";
/**
 * 핵심 키워드 - 폼 구성 / 입력 관리 / 조건부 렌더링
 * 공통 과제 - 연차 반차 반반차 선택 가능한 폼 만들기
 * 선택 과제 - 잔여 연차 차감 로직 / 연차 내역 리스트 / 중복 날짜 신청 방지 처리
 * @param {*} props 
 */
function VacationRequest(props) {
    const initParams = {
        vacationTimeType:'',
        vacationRangeType: '',
        vacationDate: '',
        vacationUserId: -1 
    }
    const [params, setParams] = useState(initParams) 

    const changeVacationRangeType = (e) => {
        const type = e.target.value
        setParams({...params, vacationRangeType: type})

    }
    const changeVacationTimeType = (e) => {
        const type = e.target.value
        setParams({...params, vacationTimeType: type})
    }

    return (
        <div className="">
            <input 
                type="checkbox" 
                value="quarter"
                onChange={changeVacationRangeType}
            >반반차</input>
            <input type="checkbox" value="half">반차</input>
            <input type="checkbox" value="full">연차차</input>
        </div> 
    )
}