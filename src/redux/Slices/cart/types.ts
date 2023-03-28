export interface InterfaceItem {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
}

export interface ICartSlice {
    totalPrice: number,
    items: InterfaceItem[]
}
