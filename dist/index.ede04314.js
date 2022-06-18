const showProducts = async function() {
    try {
        const response = await fetch("https://api-shop-gj.herokuapp.com/api/v1/products", {
            mode: "no-cors"
        });
        const data = await response.json();
        console.log(response, data);
    } catch (err) {
        alert(err);
    }
};
showProducts();

//# sourceMappingURL=index.ede04314.js.map
