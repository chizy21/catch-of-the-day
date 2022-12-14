import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {

    render() {
        const { image, name, price, description, status } = this.props.details.image;

        const isAvailable = status === 'available';

        return <li className='menu-fish'>
            <img src={image} alt={name} />
            <h3 className='fish-name'>{this.props.details.name}
                <span className='fish-price'>{formatPrice(price)}</span>
            </h3>
            <p>{desc}</p>
            <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>{isAvailable ? 'Add To Order' : 'Sold Out!'}</button>
        </li>;
    }
}

export default Fish;