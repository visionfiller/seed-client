export const getMyCurrentCart = () => {
    return fetch("http://localhost:8000/carts/current", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("seed_token")}`
        }
    })
        .then(response => response.json())
}