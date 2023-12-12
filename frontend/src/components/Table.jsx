import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteUserMutation } from "../slices/adminSlices/adminsApiSlice";
import { toast } from "react-toastify";
import axios from 'axios'


const TableComponent = () => {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [deleted, setDeleted] = useState(false)
  
    const [deleteUser] = useDeleteUserMutation();

    const handleSearch = (e)=>{
        setSearch(e.target.value)
    }

    const deleteHandler = async (id)=>{
      try {
        const deleteSuccess = await deleteUser({id});
        toast.success('Deleted Successfully')
        setDeleted(!deleted)
      } catch (error) {
        toast.error(err?.data?.message || err.error)
      }
    }

    useEffect(() => {
      const fetchUsers = async ()=>{
        const userDetails = await axios.get('http://localhost:8000/api/admin/adminHome')
        console.log(userDetails.data.userData)
        setUsers(userDetails.data.userData);
      }
      fetchUsers();
    },[deleted])



export default TableComponent;
