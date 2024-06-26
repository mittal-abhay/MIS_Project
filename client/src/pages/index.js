// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

// ** Hook Imports
import { useAuth } from 'src/hooks/useAuth'

export const getHomeRoute = role => {
  return '/home'
}
export const getFormRoute = role => {
  return '/forms'
}

const Home = () => {
  // ** Hooks
  const auth = useAuth()
  // console.log(auth.user[0].auth_id)
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (auth.user && auth.user[0].auth_id) {
      // console.log(auth.user[0].auth_id)
      const homeRoute = getHomeRoute(auth.user[0].auth_id)
      const formRoute = getFormRoute(auth.user[0].auth_id)
      //  console.log(homeRoute)
      // Redirect user to Home URL
      router.replace(homeRoute)
      router.replace(formRoute)
    } else {
      // console.log('okkk')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Spinner />
}

export default Home
