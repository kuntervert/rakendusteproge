const phones = [
  {
    "imgSrc":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6347/6347785_sd.jpg;maxHeight=200;maxWidth=300",
    "title":"Google - Pixel 3a with 64GB Memory Cell Phone (Unlocked) - Just Black",
    "price":"299.99","category":"phones"},
    {"imgSrc":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6296/6296105_sd.jpg;maxHeight=200;maxWidth=300",
    "title":"Razer - Phone 2 with 64GB Memory Cell Phone (Unlocked) - Black",
    "price":"349.99","category":"phones"},
    {"imgSrc":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5613/5613055_sd.jpg;maxHeight=200;maxWidth=300","title":"Apple - Pre-Owned (Excellent) iPhone 6s 4G LTE 16GB Cell Phone (Unlocked) - Rose Gold","price":"199.99","category":"phones"},{"imgSrc":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6359/6359983_sd.jpg;maxHeight=200;maxWidth=300","title":"Samsung - Galaxy Note10+ with 256GB Memory Cell Phone (Unlocked) - Aura Blue","price":"899.99","category":"phones"},{"imgSrc":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6191/6191433_sd.jpg;maxHeight=200;maxWidth=300","title":"Samsung - Galaxy S9+ 64GB (Unlocked) - Midnight Black","price":"549.99","category":"phones"},{"imgSrc":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6324/6324289_sd.jpg;maxHeight=200;maxWidth=300","title":"Motorola - Moto G7 Power with 32GB Memory Cell Phone (Unlocked) - Marine Blue","price":"169.99","category":"phones"},{"imgSrc":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323863_sd.jpg;maxHeight=200;maxWidth=300","title":"Samsung - Galaxy S10+ with 128GB Memory Cell Phone (Unlocked) Prism - Black","price":"849.99","category":"phones"},{"imgSrc":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6213/6213513_sd.jpg;maxHeight=200;maxWidth=300","title":"LG - K8 2018 with 16GB Memory Cell Phone (Unlocked) - Moroccan Blue","price":"59.99","category":"phones"},{"imgSrc":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6261/6261400_sd.jpg;maxHeight=200;maxWidth=300","title":"LG - Stylo 4 with 32GB Memory Cell Phone (Unlocked) - Black","price":"199.99","category":"phones"},{"imgSrc":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6324/6324277_sd.jpg;maxHeight=200;maxWidth=300","title":"Motorola - Moto G7 with 64GB Memory Cell Phone (Unlocked) - Ceramic Black","price":"149.99","category":"phones"}];
const laptops = [{"imgSrc":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6131/6131432_rd.jpg;maxHeight=200;maxWidth=300","title":"Google - Pixelbook 12.3\" Touchscreen Chromebook - Intel Core i7 - 16GB Memory - 512GB Solid State Drive - Silver","price":"1649.00","category":"laptops"},{"imgSrc":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356443_sd.jpg;maxHeight=200;maxWidth=300","title":"HP - 15.6\" Touch-Screen Laptop - Intel Core i5 - 12GB Memory - 256GB SSD + Optane - Natural Silver","price":"549.99","category":"laptops"},{"imgSrc":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323662_sd.jpg;maxHeight=200;maxWidth=300","title":"Lenovo - IdeaPad 330S 15.6\" Laptop - Intel Core i3 - 4GB Memory - 128GB Solid State Drive - Midnight Blue","price":"309.99","category":"laptops"},{"imgSrc":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331986_sa.jpg;maxHeight=200;maxWidth=300","title":"Lenovo - IdeaPad 130S 11.6\" Laptop - Intel Celeron - 4GB Memory - 64GB eMMC Flash Memory - Mineral Gray","price":"159.99","category":"laptops"},{"imgSrc":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6339/6339312_sd.jpg;maxHeight=200;maxWidth=300","title":"HP - Pavilion x360 2-in-1 14\" Touch-Screen Laptop - Intel Core i3 - 8GB Memory - 128GB Solid State Drive - Natural Silver, Ash Silver Base And Keyboard Frame","price":"399.99","category":"laptops"},{"imgSrc":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6339/6339311_sd.jpg;maxHeight=200;maxWidth=300","title":"HP - Pavilion x360 2-in-1 11.6\" Touch-Screen Laptop - Intel Pentium - 4GB Memory - 128GB Solid State Drive - Ash Silver Keyboard Frame, Natural Silver","price":"299.99","category":"laptops"}];


const getItems = () => {
  const items = [];
  phones.forEach( (phone, index)=>{
    items.push({
      ...phone,
      // id: "phones-"+index,
      category: "phones"
    })
  });
  laptops.forEach( (laptop, index)=>{
    items.push({
      ...laptop,
      // id: "laptops-"+index,
      category: "laptops"
    })
  });
  return items;
};

const getItem = (itemId) =>{
  return getItems().find(item => item.id === itemId);
};



module.exports = {
  getItems,
  getItem
};