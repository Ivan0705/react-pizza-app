import * as React from "react";
import {useContext, useEffect} from "react";

import {SearchContext} from "./Pizzamarket";
import {useSelector} from "react-redux";
import {setCategoryId, setPageCount, setSort} from "../redux/Slices/filter/filterSlice";
import {RootState, useAppDispatch} from "../redux/store";
import {pizzasSelector} from "../redux/Slices/pizza/selectors";
import {EnStatus} from "../redux/Slices/pizza/types";
import {fetchPizza} from "../redux/Slices/pizza/asyncFetchPizza";
import {Categories, Pagination, PizzaBlock, Skeleton, Sort} from "../components";


export const Home: React.FC<string | any> = () => {

    const dispatch = useAppDispatch();

    const {searchValue}: any = useContext(SearchContext);

    const {items, status} = useSelector(pizzasSelector);

    const {categoryId, sort, currentPage}: any = useSelector((state: RootState) => state.filter);

    const name: string = sort.name;

    const sortProperty: string = sort.sortProperty;

    const setCategoryId2 = (id: any) => {
        return {type: 'filter/setCategoryId', payload: id}
    };

    const getPizzas = async () => {
        const order: any = sortProperty.includes('-') ? 'desc' : 'asc';

        const sortBy: any = sortProperty.replace('-', '');

        const category: any = categoryId > 0 ? `category=${categoryId}` : '';

        const search: any = searchValue ? `&search=${searchValue}` : '';

        dispatch(fetchPizza({
            order,
            sortBy,
            category,
            search,
            currentPage
        }));
    };
    const onClickCategory = (id: any) => {
        console.log(setCategoryId(id));
        dispatch(setCategoryId2(id))
    };

    const skeletons = [...new Array(6)].map((_, index: number) =>
        <Skeleton key={index}/>);

    const pizzas = items.map((pizza: any, i: number) => (
        <PizzaBlock key={i}
                    {...pizza}/>
    ));

    useEffect(() => {
        getPizzas();
    }, [
        categoryId,
        sortProperty,
        searchValue,
        currentPage
    ]);

    const onChangeSort = (i: number) => {
        dispatch(setSort(i))
    };

    const onChangePage = (num: number) => {
        dispatch(setPageCount(num))
    };

    return (
        <React.Fragment>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(i: number) => onClickCategory(i)}/>
                <Sort name={name} onChangeSort={(id: any) => onChangeSort(id)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {
                status === 'error' ?
                    <h2 className="content__error-info">
                        Произошла ошибка при загрузке...
                    </h2> :
                    <div className="content__items">
                        {
                            status === EnStatus.LOADING ?
                                skeletons : pizzas
                        }
                    </div>
            }
            <Pagination onChangePage={(i: number) => onChangePage(i)}/>
        </React.Fragment>
    )
};
