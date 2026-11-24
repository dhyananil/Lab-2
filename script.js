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

	products.forEach((p, index) => {
		list.innerHTML += `
            <tr>
				<td>${p.slno}</td>
                <td>${p.name}</td>
                <td>$${p.price}</td>
                <td>${p.qty}</td>
				<td>
               		<button class="btn btn-danger btn-sm" onclick="deleteProduct(${index})">
                    	Delete
                	</button>
           		</td>
            </tr>`;
	});
}

// Add Product
function addProduct() {
	let slno = products.length + 1;
	let name = document.getElementById("name").value.trim();
	let price = Number(document.getElementById("price").value);
	let qty = Number(document.getElementById("qty").value);

	if (name == "") {
		alert("Enter Valid Name");
	} else {
		products.push({ slno, name, price, qty });
	}

	document.getElementById("name").value = "";
	document.getElementById("price").value = "";
	document.getElementById("qty").value = "";

	display();
}

function deleteProduct(index) {
	products.splice(index, 1);
	display();
}
