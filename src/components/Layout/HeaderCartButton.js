import React, {useContext, useEffect, useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context';

function HeaderCartButton(props) {

    const [btnIsHighlighted, setBtnIsHighLighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    // reduce func allow to transform an array of data into a single value
    // takes 2 arguments 1st is func, and 2nd is starting value.
    // func passed in arguments receive 2 arguments itself
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump :''}`;
    useEffect(() => {
        if (items.length === 0){
            return;
        }
        setBtnIsHighLighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighLighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
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
