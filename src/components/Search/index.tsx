import * as React from "react";
import {ChangeEvent, useContext, useRef} from "react";
import searchStyle from './SCSS/Search.module.scss'
import {SearchContext} from "../../pages/Pizzamarket";
import debounce from 'lodash.debounce';

export const Search: React.FC = () => {
    const {searchValue, setSearchValue}: any = useContext(SearchContext);
    const inputRef = useRef<HTMLDivElement | any>(null);

    const onClickClear = () => {
        setSearchValue('');

        if (inputRef.current) {
            inputRef.current.focus()
        }
    };

    const updateSearch = React.useCallback(
        debounce((str) => {
            console.log(str);
        }, 20), []);

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        updateSearch(e)
    };

    return (
        <div className={searchStyle.root}>
            <svg
                className={searchStyle.searchIcon}
                enableBackground="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
                    id="XMLID_223_"/>
            </svg>
            <input ref={inputRef} className={searchStyle.input} type={'text'} placeholder={'search...'}
                   onChange={(e: any) => {
                       onChangeInput(e)
                   }}
                   value={searchValue}
            />

            {searchValue && <svg
                onClick={onClickClear}
                className={searchStyle.clearIcon}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
            </svg>}
        </div>
    )
};
