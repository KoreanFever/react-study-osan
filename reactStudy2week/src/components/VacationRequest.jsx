import React, { useEffect, useState } from "react";
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
        vacationUserName: ''
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
    const [disableSelectableVacationTime, setDisableSelectableVacationTime] = useState(false)

    // useEffect(() => {
    //     console.log('isSelectableVacationTime', disableSelectableVacationTime)
    // }, [disableSelectableVacationTime])
    const changeVacationRangeType = (e) => {
        const type = e.target.value
        if (type === 'full') {
            setDisableSelectableVacationTime(true)
            setParams({...params, vacationTimeType: ''})
        } else {
            setDisableSelectableVacationTime(false)
        }
        setParams({...params, vacationRangeType: type})
        console.log(params)
    }
    const changeVacationTimeType = (e) => {
        const type = e.target.value
        setParams({...params, vacationTimeType: type})
    }
    const changeVacationUserName = (e) => {
        const vacationUserName = e.target.value
        setParams({...params, vacationUserName: vacationUserName})
    }
    const changeVacationDate = (e) => {
        const vacationDate = e.target.value
        setParams({...params, vacationDate: vacationDate})
    }

    const submitVacationRequest = (event) => {
        event.preventDefault()
        console.log(params)
    }

    return (
        <div className="flex max-w-full w-full pb-3">
            <div className="flex w-128 overflow-hidden"></div>
            <div className="flex w-128 justify-center">
            <form className="w-full" onSubmit={submitVacationRequest}>
                <table className="border border-gray-300 w-full table-auto">
                    <tbody>
                        <tr>
                            <th scope="row" className="border border-gray-300 w-1/3">시간</th>
                            <td className="border border-gray-300 w-2/3">
                                {vacationTimeType.map((vacationTime, idx) => {
                                    return (
                                        <div className="float-start" key={'vacationTimeType' + idx}>
                                            <input 
                                                type="radio" 
                                                name="vacationTimeType"
                                                value={vacationTime.value}
                                                onClick={changeVacationTimeType}
                                                disabled={disableSelectableVacationTime}
                                            />
                                            <label htmlFor={vacationTime.name}>{vacationTime.name}</label>
                                        </div>
                                        )
                                })} 
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="border border-gray-300 w-1/3">구분</th>
                            <td className="border border-gray-300 w-2/3">
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
                        <tr>
                            <th scope="row" className="border border-gray-300 w-1/3">근태 일자</th>
                            <td className="border border-gray-300 w-2/3">
                                <input 
                                    type="date"
                                    name="vacationDate" 
                                    onChange={changeVacationDate}/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="border border-gray-300 w-1/3">신청자명</th>
                            <td className="border border-gray-300 w-2/3">
                                <input 
                                    name="vacationUserName" 
                                    onChange={changeVacationUserName}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} className="text-center">
                                <button type="submit" > 신청 </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            </div>
            <div className="flex w-128 overflow-hidden"></div>
        </div>
    )
}

export default VacationRequest;