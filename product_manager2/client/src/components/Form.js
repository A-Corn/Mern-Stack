import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
    
    const { productList, setProductList } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setProductList([...productList, res.data]);
            setTitle("");
            setPrice("");
            setDescription("");
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <div className="col col-6 mx-auto">
            <h1> Product manager 2</h1>
            <form onSubmit={submitHandler}>
                <label className='form-label'> Title:</label>
                <input className='form-control'
                    value={title} 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}/>
                <label className='form-label'> Price: </label>
                <input className='form-control' 
                    value={price}
                    type="number" 
                    onChange={(e) => setPrice(e.target.value)} />
                <label className='form-label'> Description: </label>
                <input className='form-control'
                    value={description}
                    type="text" 
                    onChange={(e) => setDescription(e.target.value)} />
                <button className='btn btn-success'> Submit</button>
            </form>
        </div>
    )
}

export default Form;