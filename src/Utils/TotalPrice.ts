import {InterfaceItem} from "../redux/Slices/cart/types";

export const calcTotalPrice = (items: InterfaceItem[]) => {
    return items.reduce((sum, obj) =>
        obj.price * obj.count + sum, 0);
};
