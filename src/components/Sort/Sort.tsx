import React, {useEffect, useRef, useState} from "react";
import '../../scss/App.scss';
import {SortPropertyEnum} from "../../redux/Slices/filter/types";

type SortItem = {
    name: string | any;
    sortProperty: string
}

interface ISort {
    onChangeSort: (id: SortItem) => void,
    name: string
}

type PopupClick = MouseEvent & {
    path: Node[];
};

export const list: Array<SortItem> = [
    {
        name: 'популярности(по убыванию)',
        sortProperty:
        SortPropertyEnum.RATING_ASC

    },
    {
        name: 'популярности(по возрастанию)',
        sortProperty: SortPropertyEnum.RATING_DESC
    },
    {
        name: 'цене по возрастанию',
        sortProperty: SortPropertyEnum.PRICE_DESC
    },
    {
        name: 'цене по убыванию',
        sortProperty: SortPropertyEnum.PRICE_ASC
    },
    {
        name: 'алфавиту по возрастанию',
        sortProperty: SortPropertyEnum.TITLE_DESC
    },
    {
        name: 'алфавиту по убыванию',
        sortProperty: SortPropertyEnum.TITLE_ASC
    }
];

export const Sort: React.FC<ISort> = React.memo((props) => {
        const [isOpen, setIsOpen] = useState(false);

        const sortRef = useRef<HTMLDivElement>(null);

        const onClickListItem = (obj: SortItem) => {
            props.onChangeSort(obj);
            setIsOpen(false)
        };

        useEffect(() => {
            const handleClickOutSide = (event: MouseEvent) => {

                const _event = event as PopupClick;
                if (sortRef.current && !_event.path?.includes(sortRef.current)) {
                    setIsOpen(false);
                    console.log('Sort mount')
                }
            };
            document.body.addEventListener('click', handleClickOutSide);
            return () => {
                document.body.removeEventListener('click', handleClickOutSide);
            }
        }, []);

        return (
            <div className="sort">
                <div className="sort__label">
                    <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                            fill="#2C2C2C"
                        />
                    </svg>
                    <b>Сортировка по:</b>
                    <span onClick={() => setIsOpen(!isOpen)}>{props.name}</span>
                </div>
                {isOpen && (<div className="sort__popup">
                    <ul>
                        {
                            list.map((obj: any, index: number) =>
                                <li
                                    key={index}
                                    onClick={() => onClickListItem(obj)}
                                    className={index === obj.sortProperty ? 'active' : ''}
                                >
                                    {obj.name}
                                </li>)
                        }
                    </ul>
                </div>)}
            </div>
        )
    }
);
