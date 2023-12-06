const ProfileForm = ({ form, setForm ,patchData ,className }) => {

    const changHandler = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <div className={ className } >
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={form.name} onChange={changHandler} id="name" />

            <label htmlFor="lastName">LastName</label>
            <input type="text" name="lastName" value={form.lastName} onChange={changHandler} id="lastName" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={form.password} onChange={changHandler} id="password" />

            <button onClick={ () => patchData() } >Submit</button>
        </div>
    );
};

export default ProfileForm;