export const getItems = () => {
   return fetch("/api/items")
          .then(res =>{
              return res.json();
          });
};