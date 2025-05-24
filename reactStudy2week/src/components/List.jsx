import React, { useState } from "react";
// import { useEffect } from "react"; -> useEffect는 날씨 상태 업데이트 될 때 사용해보기

function List(props) {
    const memberInfo = props.memberInfo;
    console.log(memberInfo.name, ' : ', memberInfo.isWorking);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-96 h-24 bg-white shadow-md rounded-lg p-4 mb-4">
                <h2 className="text-xl font-bold">{memberInfo.name}</h2>
                <p className="text-gray-600">부서: {memberInfo.department}</p>
                <p className="text-gray-600">입사일: {memberInfo.joinDate}</p>
                <p className="text-gray-600">년차: {memberInfo.diffYears}</p>
                <p className="text-gray-600">출근시간: {memberInfo.checkInTime}</p>
                <p className="text-gray-600">퇴근시간: {memberInfo.checkOutTime}</p>
                <p className="text-gray-600">출근 여부: {memberInfo.isWorking ? "출근" : "퇴근"}</p>
                <p className="text-gray-600">지각 여부: {memberInfo.isLate ? "지각" : "정상"}</p>
            </div>
        </div>
    )
}


export default List;