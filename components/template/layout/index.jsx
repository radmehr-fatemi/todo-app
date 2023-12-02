import { useState } from "react";
import Link from "next/link";

//Style
import styles from "./index.module.css";

//Icon
import { RiCalendarTodoLine } from "react-icons/ri";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RxCrossCircled } from "react-icons/rx";


const Layout = ({ children }) => {

    const [ show ,setShow ] = useState(true);

    const showHandler = () => {
        setShow(!show)
    }
    
    return (
        <div className={styles.layout} >
            <header className={styles.header} >
                <h1>Todo App</h1>
                <button>Logout</button>
            </header>

            <div className={styles.main} >
                <aside className={styles.aside} id={ show ? styles.showSide : styles.unShowSide } >
                    <div className={styles.asideHead} >
                        <h2>Welcome</h2>
                        <RxCrossCircled onClick={showHandler} />
                    </div>

                    <Link href="/todos" >
                        <RiCalendarTodoLine />
                        Todos
                    </Link>
                    <Link href="/addtodo" >
                        <MdOutlineLibraryAdd />
                        Add todo
                    </Link>
                    <Link href="/profile" >
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