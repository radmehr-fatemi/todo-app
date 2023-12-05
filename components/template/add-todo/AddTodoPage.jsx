import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Icon
import RadioButton from "@/components/element/RadioButton";
import { useState } from "react";
import { MdOutlineNoteAdd } from "react-icons/md";
import { RiMastodonLine } from "react-icons/ri";
import { FaBarsProgress } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

//Style
import styles from "./AddTodoPage.module.css";

const AddTodoPage = () => {

    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("todo");
    const router = useRouter()

    const addHandler = async () => {
        if ( title.lrngth < 4 || !title.trim() ) return toast.info("Title need to be more than 4 letter")
        
        const res = await fetch("/api/todo", {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify({ title, status })
        })
        const data = await res.json();
        if ( data.status === "success" ) {
            toast.success("Todo created")
            setStatus("todo")
            setTitle("")
            setTimeout( () => router.push("/") ,1800 )
        } else {
            return toast.error("Todo did not created")
        }
    }

    return (
        <div className={styles.addTodoPage} >
            <h1>
                <MdOutlineNoteAdd />
                Add Todo
            </h1>

            <div className={styles.fields} >

                <div className={styles.field1} >
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={({ target }) => setTitle(target.value)}
                        id="title"
                    />
                </div>

                <div className={styles.field2} >
                    <RadioButton
                        className={styles.input1}
                        label="Todo"
                        value="todo"
                        status={status}
                        setStatus={setStatus}
                    >
                        <RiMastodonLine />
                    </RadioButton>

                    <RadioButton
                        className={styles.input2}
                        label="in Progress"
                        value="inProgress"
                        status={status}
                        setStatus={setStatus}
                    >
                        <FaBarsProgress />
                    </RadioButton>

                    <RadioButton
                        className={styles.input3}
                        label="Review"
                        value="review"
                        status={status}
                        setStatus={setStatus}
                    >
                        <MdOutlineRateReview />
                    </RadioButton>

                    <RadioButton
                        className={styles.input4}
                        label="Done"
                        value="done"
                        status={status}
                        setStatus={setStatus}
                    >
                        <IoCheckmarkDoneCircleOutline />
                    </RadioButton>

                </div>
            </div>
            <div className={styles.button} >
                <button onClick={addHandler} >Add todo</button>
            </div>

            <ToastContainer style={{
                padding: "1rem"
            }} />
        </div>
    );
};

export default AddTodoPage;