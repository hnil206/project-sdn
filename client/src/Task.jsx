import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import './css/index.css';

function Task() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/task/create',{name, description, price, stock})
        .then(result => {console.log(result)
            alert("Add successfuly!! ");
            navigate('/')
        })
        .catch(err => console.log(err))
    }
 
    


    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center">Add Product</h2>
            <form onSubmit={handleSubmit}>
                <MDBInput wrapperClass="mb-4" id="form6Example3" label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <MDBInput wrapperClass="mb-4 " id="form6Example3" label="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <MDBInput wrapperClass="mb-4" id="form6Example3" label="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <MDBInput wrapperClass="mb-4"  id="form6Example3" label="Stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
                <MDBBtn className="mb-4" type="submit" block>
                    Add
                </MDBBtn>
            </form>
        </div>
    );
}

export default Task;
