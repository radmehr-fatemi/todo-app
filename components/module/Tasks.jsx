const Tasks = (props) => {

    const { todos,
        children,
        classTasks,
        classTask,
        classButtons,
        classSpan,
        classChildren,
        classNextButton,
        classBackButton,
        back,
        next
    } = props;

    return (
        <div className={classTasks} >
            {
                todos?.map(todo => (
                    <div key={todo._id} className={classTask} >
                        <span className={classSpan} ></span>
                        <div className={classChildren} >
                            {children}
                            <p> {todo.title} </p>
                        </div>

                        <div className={classButtons} >
                            {!!back ? <button className={classBackButton} >Back</button> : <span></span>}
                            {!!next ? <button className={classNextButton} >Next</button> : <span></span>}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Tasks;