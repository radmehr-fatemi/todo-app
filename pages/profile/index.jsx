import { getSession } from "next-auth/react";

//Component
import ProfilePage from "@/components/template/profile/ProfilePage";

const Profile = () => {

    return <ProfilePage />
};

export default Profile;

export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req });

    if (!session) return {
        redirect: { destination: "/auth/signup", permanent: false }
    }

    return {
        props: {
            session
        }
    }
}