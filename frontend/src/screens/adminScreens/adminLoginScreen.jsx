import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../components/FormContainer";
import { useAdminLoginMutation } from "../../slices/adminSlices/adminsApiSlice";
import { setAdminCredentials } from "../../slices/adminSlices/adminAuthSlice";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

const AdminLoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [adminLogin, { isLoading }] = useAdminLoginMutation();

  const { adminInfo } = useSelector((state) => state.adminAuth);

  useEffect(() => {
    if (adminInfo) {
      navigate("/admin/adminHome");
    }
  }, [navigate, adminInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await adminLogin({ email, password }).unwrap();
      dispatch(setAdminCredentials({ ...res }));
      navigate("/admin/adminHome");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    
  );
};

export default AdminLoginScreen;