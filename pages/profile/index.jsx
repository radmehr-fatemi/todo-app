import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//Component
import ProfilePage from "@/components/template/profile/ProfilePage";
import Spinner from "@/components/module/spinner/Spinner";

const Profile = () => {

    const { status } = useSession();
    const [isLoged, setIsloged] = useState(false)
    const router = useRouter();


    useEffect(() => {
        if (status === "unauthenticated") {
            router.replace("/auth/signup")
        } else if (status === "authenticated") {
            setIsloged(true)
        }
    }, [status])

    if (status === "loading") return <Spinner />
    if (isLoged) return <ProfilePage />
};

export default Profile;
