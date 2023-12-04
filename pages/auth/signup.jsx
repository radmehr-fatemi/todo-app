import SignUpPage from "@/components/template/sign-up/SignUpPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SignUp = () => {
    const { status } = useSession();
    const [isLoged, setIsloged] = useState(true)
    const router = useRouter();


    useEffect(() => {
        if (status === "authenticated") {
            router.replace("/")
        } else if (status === "unauthenticated") {
            setIsloged(false)
        }
    }, [status])
    if (!isLoged) return <SignUpPage />
};

export default SignUp;