import React ,{useEffect , useState} from 'react'
import { Navigate, Route } from 'react-router'
import { useLocation } from 'react-router'

import Firebase from '../Firebase'

const PrivateRoute = ({children , ...rest}) => { 

    const location = useLocation() 
    const [isAuth , setIsAuth] = useState('')

    useEffect(() =>{
        Firebase.auth().onAuthStateChanged((user) => {
            if(user){
                setIsAuth(user.email) 
                console.log('logged in');
            }
            else{
                setIsAuth(false) 
            }
        })
        console.log('running');
    },[])

    console.log(isAuth);


    return (
        <Route {...rest} render={({location}) => {
            return isAuth === true ? 
                children : 
            <Navigate to={{
                            pathname : '/signup',
                            state : {from  : location}
                        }}/>
        }}/>
    )
}

export default PrivateRoute
