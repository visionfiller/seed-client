export const getProducts = () => {
    return fetch("http://localhost:8000/products", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("seed_token")}`
        }
    })
        .then(response => response.json())
}

export const getProductsByCategory = (id) => {
    return fetch(`http://localhost:8000/products?category=${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("seed_token")}`
        }
    })
        .then(response => response.json())
}
export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("seed_token")}`
        }
    })
        .then(response => response.json())
}

export const addToCart = (id) => {
    return fetch(`http://localhost:8000/products/${id}/add_to_cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("seed_token")}`
        }
    })
        .then(response => response.json())
}
