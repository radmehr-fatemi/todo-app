import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";

//Style
import styles from "./ProfilePage.module.css";

//Icon
import { CgProfile } from "react-icons/cg";

//Component
import ProfileForm from "@/components/module/profile/ProfileForm";
import ProfileContent from '@/components/module/profile/ProfileContent';

const ProfilePage = () => {

    const [data, setData] = useState({});
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        name: "",
        lastName: "",
        password: "",
    });

    const fetchData = async () => {
        const res = await fetch("/api/profile");
        const data = await res.json();
        if (data.status === "success") setData(data.data)
    }

    const patchData = async (e) => {

        const { name, lastName, password } = form;
        if (name.length < 3 || lastName.length < 3 || password.length < 6) {
            return toast.info("invalid data")
        }
        const res = await fetch("/api/profile", {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(form)
        })
        const data = await res.json()
        console.log(data)
    }

    useEffect(() => {
        fetchData()
        if ( !!data.name ) setShow(true)
    }, [data])

    return (
        <div className={styles.profilePage} >
            <h2>
                <CgProfile />
                Profile
            </h2>

            {
                !show &&
                    <ProfileForm
                        form={form}
                        setForm={setForm}
                        patchData={patchData}
                        className={styles.profileForm}
                    /> 
            }
            {
                !!show &&
                    <ProfileContent
                        data={data}
                        className={styles.profileContent}
                    />
            }

            <ToastContainer style={{
                padding: "1rem"
            }} />
        </div>
    );
};

export default ProfilePage;