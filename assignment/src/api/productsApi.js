const BASE_URL = 'https://dummyjson.com/products';
export async function fetchProducts(signal) {
    const response = await fetch('${BASE_URL}?limit=100',{ signal });
    if (!response.ok){
        throw new Error('Failed to fetch products: ${response.status} ${response.statusText}');
        const data = await response.json();
        
    }
}