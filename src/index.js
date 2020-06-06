import React, { Component } from 'react';
import './assets/styles.scss';
import { Link } from 'react-router-dom';

export default class Product extends Component {

    render() {

        const productDetails = this.props.details
        const imagePath = "D:/UI_Training_Assignments/react_app/react_training_app/src/assets/Images/1.jpeg"; //productDetails.image
        return (
             <Link to={`/productDetails/${productDetails.id}`}>
                <div className="product" id={productDetails.id} key={this.props.key}> {/* onClick={() => this.openDetails(productDetails.id)}>*/}
                    <img src={`${imagePath}`} className="productImg" alt={productDetails.name}/>
                    <div className="name">{productDetails.name}</div>
                    <div className="ratingBranding">
                        <div className="rating">
                            4.3
                            <img src="" className="starImg" alt=""/>
                        </div>
                        <div className="commentCount"> (250) </div>
                        <img src={`${productDetails.brandImg}`} className="brandImg" alt=""/>
                    </div>
                    <div className="price">{productDetails.price}/-</div>
                    {/* <button onClick={() => this.props.onclick(productDetails.id)}>Add</button> */}
                </div>
             </Link>
        );
    }
}

