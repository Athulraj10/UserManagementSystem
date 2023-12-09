import React from 'react';
import { useState,useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { Form,Button,Row,Col } from 'react-bootstrap';
import FormContainer from "../components/FormContainer";
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';

const RegisterScreen = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {userInfo} = useSelector((state)=>state.auth)

  const [register,{ isLoading }] = useRegisterMutation();

  useEffect(()=>{
    if(userInfo){
        navigate('/');
    }
  },[navigate,userInfo]);


  const submitHandler = async(e)=>{
    e.preventDefault();
    if(password !== confirmPassword){
        toast.error('Passwords do not match!!')
    }else{
        try {
            const res = await register({ name,email,password }).unwrap();
            dispatch(setCredentials({...res}));
            navigate('/');
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }
  }
  return (
    <FormContainer>
        <h1>Sign Up</h1>
 