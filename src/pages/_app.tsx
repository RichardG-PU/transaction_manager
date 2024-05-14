import { AppProps } from "next/app";
import "../styles/globals.css";
import Header from "../components/header";
import { initializeApp } from "firebase/app";
import { useRouter } from "next/router";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithRedirect,
    User,
} from "firebase/auth"; // Import GoogleAuthProvider directly
import { useEffect, useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyD_Goee3aXsWuQfhjCV39VbIrmTTpLm0Gc",
    authDomain: "transactions-man.firebaseapp.com",
    databaseURL: "https://transactions-man-default-rtdb.firebaseio.com",
    projectId: "transactions-man",
    storageBucket: "transactions-man.appspot.com",
    messagingSenderId: "997311695247",
    appId: "1:997311695247:web:098cfc7a82a23f6490e3fa",
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider(); // Create provider using GoogleAuthProvider directly

provider.setCustomParameters({ prompt: "select_account" });

const signIn = () => signInWithRedirect(auth, provider);
const signOut = () => auth.signOut();

function MyApp({ Component, pageProps }: AppProps) {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            const isLoriginalOrg =
                user && user.email && user.email.endsWith("@tindart.org");

            if (!isLoriginalOrg) {
                signOut();
            } else {
                router.push("/artists");
            }
            setUser(user);
        });
    }, []);

    return (
        <>
            {router.pathname !== "/" && <Header user={user} />}
            <Component
                {...pageProps}
                user={user}
                signIn={signIn}
                signOut={signOut}
            />
        </>
    );
}

export default MyApp;
