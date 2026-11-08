const BASE_URL = 'https://dummyjson.com/products';
export async function fetchProducts(signal) {
    const response = await fetch('${BASE_URL}?limit=100',{ signal });
    if (!response.ok){
        throw new Error('Failed to fetch products: ${response.status} ${response.statusText}');
    }
        const data = await response.json();
        return data.products;
    }
export async function fetchProduct(id, signal){
        // Execute HTTP GET request for a specific product ID
        const response = await fetch(`${BASE_URL}/${id}`,{signal});
        // Validate HTTP response status
        if (!response.ok) {
            if (response.status === 404){
                throw new Error('Product not found');
            }
            throw new Error(`Failed to fetch product" ${response.status} ${response.statusText}`);
        }
        // Parce and return single product object
        const data = await response.json();
        return data;
}