const sortTodos = (todos) => {
    const sortedTodos = {};

    todos.map( item => {
        if ( !sortedTodos[item.status] ) sortedTodos[item.status] = [];
        sortedTodos[item.status].push(item)
    } )
        return sortedTodos
}

export default sortTodos