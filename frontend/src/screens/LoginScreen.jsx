import React from 'react';
import { useState,useEffect } from "react";
import { Link,useNavigate } from 'react-router-dom';
import { Form,Button,Row,Col } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import FormContainer from "../components/FormContainer";
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../components/Loader'

const LoginScreen = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

