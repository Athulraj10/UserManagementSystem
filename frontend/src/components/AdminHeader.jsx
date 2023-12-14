import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useAdminLogoutMutation } from "../slices/adminSlices/adminsApiSlice";
import { adminLogout } from "../slices/adminSlices/adminAuthSlice";
import { useNavigate } from "react-router-dom";

