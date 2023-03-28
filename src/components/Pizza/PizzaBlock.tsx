import React, {useState} from "react";
import '../../scss/App.scss';
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../redux/Slices/cart/cartSlice";
import {Link} from "react-router-dom";

import {cartItemsByIDSelector} from "../../redux/Slices/cart/selectors";
import {IPizza} from "../../redux/Slices/pizza/types";


export const PizzaBlock: React.FC<IPizza> = (props: IPizza) => {
    const dispatch = useDispatch();

    const countItem = useSelector((state: any) =>
        cartItemsByIDSelector(props.id, state)
    );

    const addedCount = countItem ? countItem.count : 0;


    const [activeSize, setActiveSize] = useState(0);

    const [activeType, setActiveType] = useState(0);

    const typedName = ['тонкое', 'традиционное'];

    const onClickAddPizza = () => {
        const itemPizza: any = {
            id: props.id,
            name: props.name,
            price: props.price,
            imageUrl: props.imageUrl,
            sizes: activeSize,
            types: activeType,
        };

        dispatch(addProduct(itemPizza));
    };

    const onClickCategory = (index: number) => {
        setActiveSize(index)
    };

    const onClickType = (index: number) => {
        setActiveType(index)
    };

    return (
        <div className={'pizza-block-wrapper'}>
            <div className="pizza-block">
                <Link to={`/full_pizza/${props.id}`}>
                    <img

                        className="pizza-block__image"
                        src={props.imageUrl}
                        alt="Pizza"
                    />
                </Link>
                <h4 className="pizza-block__title">{props.name}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {
                            props.types.map((type: number, i: number) =>
                                <li key={i} className={activeType === type ? "active" : ""}
                                    onClick={() => onClickType(i)}>
                                    {typedName[type]}
                                </li>
                            )
                        }
                    </ul>
                    <ul>
                        {props.sizes.map((size: number, index: number) =>
                            <li key={index} onClick={() => onClickCategory(index)}
                                className={activeSize === index ? "active" : ''}>
                                {size} см.
                            </li>
                        )}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {props.price} ₽</div>
                    <div className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>

                        <span onClick={() => onClickAddPizza()}>Добавить</span>
                        <i onClick={() => onClickAddPizza()}>{addedCount}</i>
                    </div>
                </div>
            </div>
        </div>
    )
};
