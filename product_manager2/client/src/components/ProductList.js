import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const ProductList = (props) => {

    const { productList, setProductList } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList(res.data)
            })
            .catch((err) => console.log(err))
    }, []);

    return (
        <div className="col col-6 mx-auto">
            <h1> All Products: </h1>
            {
                productList.map((product, index) => (
                    <div key={index}>
                        <Link to={`/products/${product._id}`}>
                            {product.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
    }

export default ProductList;