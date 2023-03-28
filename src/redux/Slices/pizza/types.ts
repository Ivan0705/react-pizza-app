export interface IPizza {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
}

export enum EnStatus {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

export interface IPizzasSliceState {
    items: IPizza[],
    status: EnStatus
}
