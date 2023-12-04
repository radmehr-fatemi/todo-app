import { useState } from "react";
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


const Layout = ({ children }) => {

    const [ show ,setShow ] = useState(false);

    const showHandler = () => {
        setShow(!show)
    }
    
    return (
        <div className={styles.layout} >
            <header className={styles.header} >
                <BiListUl className={ styles.hamburgerMenu } onClick={ () => setShow(true) } />
                <h1>Todo App</h1>
                <button>
                    Logout
                    <IoIosLogOut />
                    </button>
            </header>

            <div className={styles.main} >
                <aside className={styles.aside} id={ show ? styles.showSide : styles.unShowSide } >
                    <div className={styles.asideHead} >
                        <h2>Welcome &#128075;</h2>
                        <RxCrossCircled onClick={showHandler} />
                    </div>

                    <Link href="/todos" onClick={() => setShow(false)} >
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