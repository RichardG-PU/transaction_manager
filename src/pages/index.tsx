import React from "react";

interface HomeProps {
    user: {
        email: string;
    };
    signIn: () => void;
    signOut: () => void;
}

const Home: React.FC<HomeProps> = (props) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {props.user ? (
                <>
                    <span className="mb-4">
                        Signed in as: {props.user.email}
                    </span>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={props.signOut}
                    >
                        Sign Out
                    </button>
                </>
            ) : (
                <button
                    className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-gray-600 hover:shadow-gray-600 hover:before:border-[25px]"
                    onClick={props.signIn}
                >
                    <span className="relative z-10">Se connecter</span>
                </button>
            )}
        </div>
    );
};

export default Home;
