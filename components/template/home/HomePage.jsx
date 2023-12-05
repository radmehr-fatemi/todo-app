import Tasks from "@/components/module/Tasks";
import { useEffect, useState } from "react";
import { SiPicartodottv } from "react-icons/si";

//Style
import styles from "./HomePage.module.css";

const HomePage = () => {

    const [todos, setTodos] = useState({});

    useEffect(() => {
        fetchTodo()
    }, [])

    const fetchTodo = async () => {
        const res = await fetch("/api/todo");
        const data = await res.json();
        if (data.status === "success") setTodos(data.data)
    }

    return (
        <div className={styles.homePage} >
            <div className={styles.todos_todo} >
                <h2 className={styles.h1Todo} >Todo</h2>
                <Tasks
                    todos={todos.todo}
                    classTask={styles.task}
                    classTasks={styles.tasks}
                    classSpan={styles.todo_span}
                    classChildren={styles.children}
                    classButtons={styles.buttons}
                    classNextButton={styles.nextButtonsTodo}
                    fetchTodo={fetchTodo}
                    next="inProgress"
                >
                    <SiPicartodottv />
                </Tasks>
            </div>

            <div className={styles.todos_todo} >
                <h2 className={styles.h1InProgress} >is Progress</h2>
                <Tasks
                    todos={todos.inProgress}
                    classButtons={styles.buttons}
                    classTask={styles.task}
                    classTasks={styles.tasks}
                    classSpan={styles.inProgress_span}
                    classChildren={styles.children}
                    classNextButton={styles.nextButtonsIsProgress}
                    classBackButton={styles.bachButtonsIsProgress}
                    fetchTodo={fetchTodo}
                    next="review"
                    back="todo"
                >
                    <SiPicartodottv />
                </Tasks>
            </div>

            <div className={styles.todos_todo} >
                <h2 className={styles.h1Review} >Review</h2>
                <Tasks
                    todos={todos.review}
                    classButtons={styles.buttons}
                    classTask={styles.task}
                    classTasks={styles.tasks}
                    classSpan={styles.review_span}
                    classChildren={styles.children}
                    classNextButton={styles.nextButtonsReview}
                    classBackButton={styles.bachButtonsReview}
                    fetchTodo={fetchTodo}
                    next="done"
                    back="inProgress"
                >
                    <SiPicartodottv />
                </Tasks>
            </div>

            <div className={styles.todos_todo} >
                <h2 className={styles.h1Done} >Done</h2>
                <Tasks
                    todos={todos.done}
                    classButtons={styles.buttons}
                    classTask={styles.task}
                    classTasks={styles.tasks}
                    classSpan={styles.done_span}
                    classChildren={styles.children}
                    classBackButton={styles.bachButtonsDone}
                    fetchTodo={fetchTodo}
                    back="review"
                >
                    <SiPicartodottv />
                </Tasks>
            </div>
        </div>
    );
};

export default HomePage;