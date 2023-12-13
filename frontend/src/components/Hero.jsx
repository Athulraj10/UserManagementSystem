import { Container, Card, Button, Col, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

const Hero = () => {

  const {userInfo} = useSelector((state)=>state.auth)
  
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          {
            userInfo?
            (
              <Col xs={12} className='d-flex justify-content-center mb-2'>
                <Image style={{width:"100px",marginRight:"20px"}} src={userInfo.image?`http://localhost:8000/images/${userInfo.image}`:null} roundedCircle />
              </Col>
            ):(
              null
            )
          }
          <h1 className='text-center mb-4'>{userInfo?`Hi ${userInfo.name}`:`Hi User`}</h1>
          <p className='text-center mb-4'>
            {
              userInfo ? 
              `You have successfully Logged In..` 
              : 
              `Please log in before you proceed..`
            }
          </p>
          {
            userInfo ?
            (
              <LinkContainer to='/profile'>
                  <Button variant='success' className='me-3'>
                  Go to Profile
                  </Button>
              </LinkContainer>
            ) : (
              <div className='d-flex'>
                <LinkContainer to='/login'>
                    <Button variant='primary' className='me-3'>
                    Sign In
                    </Button>
                </LinkContainer>
                <LinkContainer to='/register'>
                    <Button variant='secondary'>
                    Sign Up
                    </Button>
                </LinkContainer>
              </div>
            )
          }
          
        </Card>
      </Container>
    </div>
  );
};

export default Hero;