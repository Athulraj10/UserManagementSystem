import {useState,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import FromContainer from '../components/FormContainer'
import { useSelector,useDispatch } from 'react-redux'
import { useLoginMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'


const loginScreen=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const submitHandler=async(e)=>{
        e.preventDefault();
        try {
 const res=await login({email,password}).unwrap();
            dispatch(setCredentials({...res}))
            navigate('/')
        } catch (error) {
            console.log(error?data?message || error.message)
        }
    }

    useEffect(()=>{
        if(userInfo){
            navigate('/')
        }
    },[navigate,userInfo])

    const navigate = useNavigate();
    const dispatch=useDispatch();

    const  [login,{isloading}] = useLoginMutation();

    const {userInfo} =useSelector((state)=>state.auth);
    return(
        <FromContainer>
            <h1>Sign IN</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className='my-2' controlId='email'>
                    <Form.Control type='email' placeholder='ENter email' value={email} oncChange={(e)=>setEmail(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='email'>
                    <Form.Control type='password' placeholder='ENter Password ' value={password} oncChange={(e)=>setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <button type='submit' variant='primary' className='mt-3'>SignIn</button>
                <Row className='py-3'>
                    <Col>
                        New Customer ?  <Link to='/register' >Register</Link>
                    </Col>
                </Row>
            </Form>
        </FromContainer>
    )
}
export default loginScreen