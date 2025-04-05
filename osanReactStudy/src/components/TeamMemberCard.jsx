function TeamMemberCard({ name, department, joinedAt }) {
    return (
        <div className="w-64 p-4 border rounded-lg shadow mb-4 text-left">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm text-gray-600">부서: {department}</p>
            <p className="text-sm text-gray-600">입사일: {joinedAt}</p>
        </div>
    );
}

export default TeamMemberCard;
