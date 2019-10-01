{
	const itemContainerClass ="shop-sku-list-item";
	const imageClass ="product-image";
	const titleClass = "sku-header";
	const priceClass = "priceView-hero-price priceView-customer-price";


	const items = document.getElementsByClassName(itemContainerClass);


	const arr = [];

	Array.from(items).forEach( item =>{
		const imgs = item.getElementsByClassName(imageClass);
		if(imgs.length === 0 ) return;
		const img = imgs[0];

		const src = img.src;

	
		if(!src) return;

		const title = item.getElementsByClassName(titleClass)[0].textContent;
		const price = item.getElementsByClassName(priceClass)[0].textContent;

		arr.push({
			imgSrc: src,
			title,
			price,
			category: document.title.split("-")[0].trim(),
		})

	});
	console.log(JSON.stringify(arr));

}