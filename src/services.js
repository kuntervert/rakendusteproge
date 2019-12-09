const basePath = "/api/v1";

export const getItems = () => {
    return fetch(`${basePath}/items`)
    .then(res=>{
        if(!res.ok) throw "getItems failer";
        return res.json();
    });
};

export const getItem = ({itemId}) => {
    return fetch(`${basePath}/items/${itemId}`)
    .then(res=>{
        if(!res.ok) throw "getItem failer";
        return res.json();
    });
};

export const getUser = ({userId, token}) => {
    return fetch(`${basePath}/users/${userId}`, {
        headers:{
            "Authorization": `Bearer ${token}`
        }
    })
    .then(res=>{
        if(!res.ok) throw "getUser failer";
        return res.json();
    });
};

export const addItemToCart = ({userId, itemId, token}) => {
    return fetch(`${basePath}/users/${userId}/cart/${itemId}`, {
        method: "PUT",
        headers:{
            "Authorization": `Bearer ${token}`
        }
    })
    .then(res=>{
        if(!res.ok) throw "addItemToCart failer";
        return res.json();
    });
};

export const removeItemFromCart = ({userId, itemId, token}) => {
    return fetch(`${basePath}/users/${userId}/cart/${itemId}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Bearer ${token}`
        }
    })
    .then(res=>{
        if(!res.ok) throw "addItemToCart failer";
        return res.json();
    });
};

export const login = ({email, password}) => {
    return fetch(`${basePath}/auth/login`, {
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
    .then(res=>{
        if(!res.ok) throw "login failer";
        return res.json();
    });
};

export const signup = ({email, password}) => {
    return fetch(`${basePath}/auth/signup`, {
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
    .then(res=>{
        if(!res.ok) throw "signup failer";
        return res.json();
    });
};