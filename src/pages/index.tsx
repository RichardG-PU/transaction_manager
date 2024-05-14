interface HomeProps {
    user: {
        email: string;
    };
    signIn: () => void;
    signOut: () => void;
}

const Home: React.FC<HomeProps> = (props) => {
    return (
        <div>
            {props.user ? (
                <>
                    <span>Signed in as : {props.user.email}</span>
                    <button onClick={props.signOut}>Sign Out</button>
                </>
            ) : (
                <button onClick={props.signIn}>Sign In</button>
            )}
        </div>
    );
};

export default Home;
