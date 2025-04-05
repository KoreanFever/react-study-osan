import { useState } from "react";
import TeamMemberCard from "./components/TeamMemberCard";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-2xl font-bold mb-4">Welcome to Osan React Study 🚀</h1>
            <p className="mb-4">This is a boilerplate for our HR Admin project.</p>

            <TeamMemberCard
                name="Roy Kim"
                department="Engineering"
                joinedAt="2021-04-01"
            />

            <button
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setCount((prev) => prev + 1)}
            >
                Clicked {count} times
            </button>
        </div>
    );
}

export default App;
