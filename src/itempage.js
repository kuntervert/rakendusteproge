function setup(){
      const x = window.location;
      console.log(x);
      const urlParams = new URLSearchParams(window.location.search);
      const title = urlParams.get("title");
      const cost = urlParams.get("cost");
      const src = urlParams.get("src");
      console.log(title, cost, src);

      const container = document.createElement("div");
      container.className = "itemContainer";

      const image = document.createElement("img");
      image.src = src;
      image.className = "item__image";

      const titleElement = document.createElement("h2");
      titleElement.textContent = title;
      titleElement.className = "item__title";

      const description = "A smartphone is a cellular telephone with an integrated computer and other features not originally associated with telephones, such as an operating system, web browsing and the ability to run software applications."

      const textElement = document.createElement("p");
      textElement.textContent = description;
      textElement.className = "item__description";

      const costElement = document.createElement("div");
      costElement.textContent = cost;
      costElement.className = "item__price";


      container.append(titleElement);
      container.append(image);
      container.append(textElement);
      container.append(costElement);

      const app = document.getElementById("item-body");
      if(!app) return;

      app.append(container);

}

module.exports = {
      setup,
};