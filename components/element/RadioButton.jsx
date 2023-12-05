const RadioButton = ({ value, status, setStatus, label, children, className }) => {
    return (
        <div className={className} >
            <label htmlFor={value}>
                {children}
                {label}
            </label>
            <input
                type="radio"
                value={value}
                onChange={({ target }) => setStatus(target.value)}
                id={value}
                checked={status === value}
            />
        </div>
    );
};

export default RadioButton;