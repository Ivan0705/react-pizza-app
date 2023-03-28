export enum SortPropertyEnum {
    RATING_DESC = 'rating',
    RATING_ASC = '-rating',
    TITLE_DESC = 'name',
    TITLE_ASC = '-name',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
}

export interface ISort {
    name: string,
    sortProperty: SortPropertyEnum
}

export interface IFilterSliceState {
    categoryId: number,
    currentPage: number,
    sort: ISort
}
