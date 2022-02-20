const initStateCart = {
    lists: [],
};

export default function cartReducer(state = initStateCart, action){
    switch(action.type){
        case "ADD_TO_CART":
            const idProduct = action.payload;
            const cart = state.lists;
            let check = false;
            cart.map((item)=>{
                if(item.id === idProduct.id ){
                    check = true;
                }
                return item;
            })             
            if(!check){
                cart.push(idProduct)

            }
       
            return {...state, lists: cart};
            case "REMOVE_ITEM_CART":
                const idProDell = action.payload.id;
                const listProduct = state.lists.filter(item => item.id !== idProDell);
                return {...state, lists:listProduct }
            case "UPDATE_CART_ITEM":
                const {id, qty, price} = action.payload;
                const cartUpdate = state.lists.map((item)=>{
                  if(item.id === id){
                      item.qty = qty;
                      item.price = price;

                  }
                    return item;
                })
                return {...state, lists: cartUpdate };
            case "DELL_CART":
                return {...state, lists: []}

            
        default:
            return state;
    }
}