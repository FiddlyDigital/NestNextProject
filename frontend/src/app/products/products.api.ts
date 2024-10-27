export async function getAllProducts() {
    const response = await fetch('http://localhost:4000/api/products', {
        method: 'GET',
        headers: {
            'cache': 'no-store',
            'Content-Type': 'application/json',
        },
    });

    const responseData = await response.json();
    return responseData;
}

export async function getProduct(productId: string) {
    const response = await fetch(`http://localhost:4000/api/products/${productId}`, {
        method: 'GET',
        headers: {
            'cache': 'no-store'
        },
    });

    const responseData = await response.json();
    return responseData;
}

export async function createProduct(productData: any) {
    const response = await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData)
    });

    const responseData = await response.json();
    return responseData;
}

export async function updateProduct(id: string, productData: any) {
    const response = await fetch(`http://localhost:4000/api/products/${id}`, {
        method: 'PATCH',
        headers: {
            'cache': 'no-store',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData)
    });

    const responseData = await response.json();
    return responseData;
}

export async function deleteProduct(productId: string) {
    const response = await fetch(`http://localhost:4000/api/products/${productId}`, {
        method: 'DELETE'
    });

    const responseData = await response.json();
    return responseData;
}
