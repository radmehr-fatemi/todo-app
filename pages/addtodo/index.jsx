import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//Component
import AddTodoPage from "@/components/template/add-todo/AddTodoPage";

const AddTodo = () => {

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

    if (isLoged) return <AddTodoPage />
};

export default AddTodo;