import * as React from "react";
import {useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

interface IPizzas {
    imageUrl: string,
    name: string,
    price: number
}

export const FullPizza: React.FC = () => {
    const [pizzas, setPizzas] = React.useState<IPizzas[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const {id} = useParams();

    React.useEffect(() => {
        setIsLoading(true);

        async function fetchPizza() {
            try {
                await axios.get(`https://64107ce7c3639725adb74dd1.mockapi.io/items?id=${id}`).then((response) => {
                    setPizzas(response.data);
                });
                setIsLoading(false);
            } catch (e) {
                alert('Произошла неизвестная ошибка при загрузке...')
            }
        }

        fetchPizza();
    }, []);

    const pizza = pizzas.map((el: any, index: number) =>
        <React.Fragment key={index}>
            <img src={el.imageUrl} alt={'pizza_picture'}/>
            <h2>{el.title}</h2>
            <h4>{el.price} ₽</h4>
        </React.Fragment>
    );

    const loading = 'Идёт загрузка...';

    return (
        <React.Fragment>
            <div>
                {!isLoading ? pizza : <h1>{loading}</h1>}
            </div>
            <Link to={'/'}>
                <button className="button button--outline button--add">
                    <span>Назад</span>
                </button>
            </Link>
        </React.Fragment>
    );
};

