import { getSession, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

//Component
import ProfilePage from "@/components/template/profile/ProfilePage";

const Profile = () => {

    return <ProfilePage />
};

export default Profile;

export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req });

    if (!session) return {
        redirect: { destination: "/signup", permanent: false }
    }

    return {
        props: {
            session
        }
    }
}