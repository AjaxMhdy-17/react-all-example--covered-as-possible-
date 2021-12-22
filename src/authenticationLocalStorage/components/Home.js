import React , {useEffect} from 'react'
import Card from './Card/Card'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {

    const navigate = useNavigate() 

    const styl = {
        marginTop : "95px"
    }

    useEffect(() => {
        if( props.isLoggedIn === false ){
            navigate('/login',{
                replace : true 
            })
        }
      },[props.isLoggedIn])

    return (
        <div style={styl}>  
            <Card>
               <h1>Welcome Back</h1>
            </Card>
        </div>
    )
}

export default Home
