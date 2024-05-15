import { useRouter } from "next/router";
import Link from "next/link";
import { User } from "firebase/auth";

interface HeaderProps {
    user: User | null;
}

interface MenuItem {
    name: string;
    path: string;
}

const menuItems: MenuItem[] = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Transaction", path: "/sales" },
    { name: "Artist", path: "/artists" },
    { name: "Volunteer", path: "/volunteers" },
];

const Header: React.FC<HeaderProps> = ({ user }) => {
    const router = useRouter();

    console.log(user);

    return (
        <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
            <div className="text-xl">
                <Link href="/artists">
                    <img
                        className="max-h-12"
                        src="../logo.png"
                        alt="Logo"
                    ></img>
                </Link>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <Link href={item.path}>
                                <span className="py-2 px-4 hover:text-gray-300 cursor-pointer">
                                    {item.name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
