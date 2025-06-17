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
        vacationMemberId: -1 
    }
    const vacationTimeType = [
        {name: '오전', value: 'am'},
        {name: '오후', value: 'pm'}
    ]
    const vacationRangeType = [
        {name: '반반차', value: 'quarter'}, 
        {name: '반차', value: 'half'}, 
        {name: '연차', value: 'full'}
    ]
    const [params, setParams] = useState(initParams) 
    const [isSelectableVacationTime, setIsSelectableVacationTime] = useState(false)

    const changeVacationRangeType = (e) => {
        const type = e.target.value
        if (type === 'full') {
            setIsSelectableVacationTime(false)
            setParams({...params, vacationTimeType: ''})
        } else {
            setIsSelectableVacationTime(true)
        }
        setParams({...params, vacationRangeType: type})
        console.log(params)
    }
    const changeVacationTimeType = (e) => {
        const type = e.target.value
        setParams({...params, vacationTimeType: type})
    }

    return (
        <div className="object-center pt-7">
            <table>
                <tr>
                    <th scope="row" className="border border-gray-300">시간</th>
                    <td className="border border-gray-300">
                        {vacationTimeType.map((vacationTime, idx) => {
                            return (
                                <div className="float-start" key={'vacationTimeType' + idx}>
                                    <input 
                                        type="radio" 
                                        name="vacationTimeType"
                                        value={vacationTime.value}
                                        onClick={changeVacationTimeType}
                                        disabled={isSelectableVacationTime}
                                    />
                                    <label htmlFor={vacationTime.name}>{vacationTime.name}</label>
                                </div>
                                )
                        })} 
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="border border-gray-300">구분</th>
                    <td className="border border-gray-300">
                        {vacationRangeType.map((vacationRange, idx) => {
                            return (
                                <div className="float-start" key={'vacationRangeType' + idx}>
                                    <input 
                                        type="radio" 
                                        name="vacationRangeType"
                                        value={vacationRange.value}
                                        onClick={changeVacationRangeType}
                                    />
                                    <label htmlFor={vacationRange.name}>{vacationRange.name}</label>
                                </div>
                                )
                            })}
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default VacationRequest;