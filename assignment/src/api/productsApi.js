const BASE_URL = 'https://dummyjson.com/products';
export async function fetchProducts(signal) {
    const response = await fetch('${BASE_URL}?limit=100',{ signal });
    
}