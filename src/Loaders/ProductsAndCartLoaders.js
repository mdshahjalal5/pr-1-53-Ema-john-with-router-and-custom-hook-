import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async() =>{
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    const savedCart = getStoredCart()
    const previousCart = [];
    for(const id in savedCart){
        console.log(id);
        const addedProducts = products.find(product => product.id === id);
        if(addedProducts){
            const quantity = savedCart[id];
            addedProducts.quantity = quantity;
            previousCart.push(addedProducts);
        }
    }
    return {products , previousCart};
}