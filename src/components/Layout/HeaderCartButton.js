import React, {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context';

function HeaderCartButton(props) {

    const cartCtx = useContext(CartContext);

    // reduce func allow to transform an array of data into a single value
    // takes 2 arguments 1st is func, and 2nd is starting value.
    // func passed in arguments receive 2 arguments itself
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
               {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton;
