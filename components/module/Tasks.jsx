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
        next,
        fetchTodo
    } = props;

    const patchTodo = async( id ,status ) => {
        const res = await fetch("/api/todo" ,{
            method:"PATCH",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify({ id ,status })
        })
        const data = await res.json();

        if ( data.status === "success" ) fetchTodo()
    }

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
                            {!!back ? <button
                             className={classBackButton} 
                             onClick={ () => patchTodo( todo._id ,back ) }
                             >Back</button> : <span></span>}

                            {!!next ? <button
                             className={classNextButton}
                             onClick={ () => patchTodo( todo._id ,next ) }
                              >Next</button> : <span></span>}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Tasks;