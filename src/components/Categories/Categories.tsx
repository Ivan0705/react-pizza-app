import React from "react";
import '../../scss/App.scss';

interface ICategoryProps {
    value: string | number,
    onChangeCategory: (index: number) => void
}

export const Categories: React.FC<ICategoryProps> = (props) => {
    const categories: string[] = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
    return (
        <div className="categories">
            <ul>
                {
                    categories.map((categoryName: string, index: number) =>
                        <li key={index} onClick={() => props.onChangeCategory(index)}
                            className={props.value === index ? "active" : ""}>{categoryName}</li>
                    )
                }
            </ul>
        </div>
    )
};
