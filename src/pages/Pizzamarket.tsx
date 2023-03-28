import '../scss/App.scss';
import * as React from "react";
import {useState} from "react";
import {Route, Routes} from 'react-router-dom';
import {Header, NotFoundBlock} from "../components";
import {Home} from "./Home";

const Cart = React.lazy(() => import('../components').then(({Cart}) => ({default: Cart})));

const FullPizza = React.lazy(() => import('./FullPizza').then(({FullPizza}) => ({default: FullPizza})));

export const SearchContext: any = React.createContext('');

export const Pizzamarket = () => {
    const [searchValue, setSearchValue]: any = useState('');

    console.log('Input change', searchValue);

    return (<div className="wrapper">
            <SearchContext.Provider value={{searchValue, setSearchValue}}>
                <Header/>
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path={'/'} element={<Home searchValue={searchValue}/>}/>
                            <Route path={'*'} element={<NotFoundBlock/>}/>
                            <Route path={'/cart'} element={
                                <React.Suspense fallback={<div>Идёт загрузка...</div>}>
                                    <Cart/>
                                </React.Suspense>
                            }/>
                            <Route path={'/full_pizza/:id'} element={
                                <React.Suspense fallback={<div>Идёт загрузка... </div>}>
                                    <FullPizza/>
                                </React.Suspense>
                            }/>
                        </Routes>
                    </div>
                </div>
            </SearchContext.Provider>
        </div>
    )
};
