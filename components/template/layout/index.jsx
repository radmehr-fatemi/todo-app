import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

//Style
import styles from "./index.module.css";

//Icon
import { RiCalendarTodoLine } from "react-icons/ri";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RxCrossCircled } from "react-icons/rx";
import { BiListUl } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";
import { signOut, useSession } from "next-auth/react";


const Layout = ({ children }) => {

    const [show, setShow] = useState(false);
    const [isLoged, setIsLoged] = useState(false);
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            setIsLoged(true)
        } else {
            setIsLoged(false)
            setShow(false)
        }
    }, [status, show])


    const showHandler = () => {
        setShow(!show)
    }

    const logoutHandler = () => {
        signOut({ redirect: false })
        router.replace("/auth/signup")
    }

    return (
        <div className={styles.layout} >
            <header className={styles.header} >
                <BiListUl className={styles.hamburgerMenu} onClick={() => setShow(true)} />
                <Link href="/"><h1>Todo App</h1></Link>
                {
                    isLoged ?
                        <button onClick={logoutHandler} >
                            Logout
                            <IoIosLogOut />
                        </button> :

                        <button>Register</button>
                }
            </header>

            <div className={styles.main} >
                <aside className={styles.aside} id={show ? styles.showSide : styles.unShowSide} >
                    <div className={styles.asideHead} >
                        <h2>Welcome &#128075;</h2>
                        <RxCrossCircled onClick={showHandler} />
                    </div>

                    <Link href="/" onClick={() => setShow(false)} >
                        <RiCalendarTodoLine />
                        Todos
                    </Link>
                    <Link href="/addtodo" onClick={() => setShow(false)} >
                        <MdOutlineLibraryAdd />
                        Add todo
                    </Link>
                    <Link href="/profile" onClick={() => setShow(false)} >
                        <CgProfile />
                        Profile
                    </Link>
                </aside>

                <main className={styles.Main} >
                    {children}
                </main>
            </div>

            <footer className={styles.footer} >
                <a
                    href="https://radmehr-weblog.vercel.app/"
                    target="_blank"
                    rel="noopener"
                >Radmehr | Todo App &copy;</a>
            </footer>
        </div>
    );
};

export default Layout;