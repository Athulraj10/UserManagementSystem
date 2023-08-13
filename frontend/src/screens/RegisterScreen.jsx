import {useState} from 'react'
import { Link } from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import FromContainer from '../components/FormContainer'

const loginScreen=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const submitHandler=async(e)=>{
        e.preventDefault();
        console.log('submit')
    }

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