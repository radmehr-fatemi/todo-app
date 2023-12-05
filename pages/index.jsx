import Spinner from '@/components/module/spinner/Spinner';
import HomePage from '@/components/template/home/HomePage';
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

const Home = () => {

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

if ( status === "loading" ) return <Spinner />
  if (isLoged) return <HomePage />
};

export default Home;