import * as React from "react";

import ReactPaginate from 'react-paginate';
import stylePaginator from './SCSS/Paginator.module.scss'


interface IPaginator {
    onChangePage: (e: number) => void
}

export const Pagination: React.FC<IPaginator> = ({onChangePage}) => {
    return (
        <div>
            <ReactPaginate
                className={stylePaginator.root}
                breakLabel="..."
                nextLabel="=>"
                onPageChange={e => {
                    onChangePage(e.selected + 1)
                }}
                Displayed Page Range={5}
                pageCount={3}
                previousLabel="<="
                // @ts-ignore
                renderOnZeroPageCount={null}
            />
        </div>
    )
};
