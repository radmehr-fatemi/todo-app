const ProfileContent = ({ data ,className }) => {

    const { name, lastName ,email } = data;

    return (
        <div className={className} >
            <div>
                <span> Name: </span>
                <p> {name} </p>
            </div>
            
            <div>
                <span> LastName: </span>
                <p> {lastName} </p>
            </div>

            <div>
                <span> Email: </span>
                <p> {email} </p>
            </div>

        </div>
    );
};

export default ProfileContent;