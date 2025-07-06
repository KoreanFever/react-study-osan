import React, { useState } from "react";
// import { useEffect } from "react"; -> useEffect는 날씨 상태 업데이트 될 때 사용해보기

function List(props) {
    const memberInfo = props.memberInfo;
    let backgroundColor = "";

    if (memberInfo.isWorking) {
        backgroundColor = "bg-green-200";
    }
    if (!memberInfo.isWorking) {
        backgroundColor = "bg-red-200";
    }

    return (
        <div className="flex max-w-full w-full pb-3">
            <div className="flex w-128 overflow-hidden"></div>
            <div className={backgroundColor +" w-128 h-24 shadow-md rounded-lg p-4 mb-4"}>
                <h2 className="text-xl font-bold">{memberInfo.name}</h2>
                <p className="text-gray-600">출근 여부: {memberInfo.isWorking ? "출근" : "퇴근"}</p>
                <p className="text-gray-600">지각 여부: {memberInfo.isLate ? "지각" : "정상"}</p>
            </div>
            <div className="flex w-128 overflow-hidden"></div>
        </div>
    )
}


export default List;