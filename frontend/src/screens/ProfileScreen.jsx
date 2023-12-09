import React from 'react';
import { useState,useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { Form,Button } from 'react-bootstrap';
import FormContainer from "../components/FormContainer";
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { setCredentials } from '../slices/authSlice';
import { useUpdateUserMutation } from '../slices/usersApiSlice';

const ProfileScreen = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [image, setImage] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {userInfo} = useSelector((state)=>state.auth)

  const [updateProfile,{ isLoading }] = useUpdateUserMutation();

  useEffect(()=>{
   setName(userInfo.name);
   setEmail(userInfo.email);
  },[userInfo.setName,userInfo.setEmail]);


  const submitHandler = async(e)=>{
    e.preventDefault();
    if(password !== confirmPassword){
        toast.error('Passwords do not match!!')
    }else{
      try {
        const formData = new FormData();
        formData.append('_id', userInfo._id);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('file', image);

     