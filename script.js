let products = [];

// Fetch API
fetch("products.json")
	.then((res) => res.json())
	.then((data) => {
		products = data;
		display();
	});

// DOM Manipulation
function display() {
	let list = document.getElementById("list");
	list.innerHTML = "";

	products.forEach((p) => {
		list.innerHTML += `
            <tr>
                <td>${p.name}</td>
                <td>$${p.price}</td>
                <td>${p.qty}</td>
            </tr>`;
	});
}

// Add Product
function addProduct() {
	let name = document.getElementById("name").value.trim();
	let price = Number(document.getElementById("price").value);
	let qty = Number(document.getElementById("qty").value);

	products.push({ name, price, qty });

	document.getElementById("name").value = "";
	document.getElementById("price").value = "";
	document.getElementById("qty").value = "";

	display();
}
