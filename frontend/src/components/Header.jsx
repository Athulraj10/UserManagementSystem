import { Navbar, Nav, Container,NavDropdown,Badge, Col, Image } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice'


export default Header;