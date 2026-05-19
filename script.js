let cart = [];
let allFoods = [];
async function addFood() {

    const foodName = document.getElementById("foodName").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;

    const food = { foodName, price, category };

    await fetch("http://localhost:5252/foods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(food)
    });

    alert("Food Added Successfully");

    document.getElementById("foodName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("category").value = "";

    loadFoods();
}

async function loadFoods() {

    const res = await fetch("http://localhost:5252/foods");
    const data = await res.json();

    allFoods = data; // store for search

    renderFoods(allFoods);
}
function renderFoods(data) {

    let output = "";

    data.forEach(food => {

        output += `
        <div class="food-card">

            <img 
                src="${getFoodImage(food.foodName)}"
                class="food-img"
                onerror="this.src='./images/default.jpg'"
            >

            <h3>${food.foodName}</h3>
            <p>₹${food.price}</p>
            <p>${food.category}</p>

            <button onclick="deleteFood(${food.id})">Delete</button>

            <button onclick="editFood(${food.id},
            '${food.foodName}',
            ${food.price},
            '${food.category}')">
                Edit
            </button>

            <button onclick="addToCart('${food.foodName}', ${food.price})">
                Add To Cart
            </button>

        </div>
        `;
    });

    document.getElementById("foodList").innerHTML = output;
}
function filterFoods() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let filtered = allFoods.filter(food =>
        food.foodName.toLowerCase().includes(input) ||
        food.category.toLowerCase().includes(input)
    );

    renderFoods(filtered);
}
async function deleteFood(id) {

    await fetch(`http://localhost:5252/foods/${id}`, {
        method: "DELETE"
    });

    loadFoods();
}
async function editFood(id, oldName, oldPrice, oldCategory) {

    const newName = prompt("Enter Food Name", oldName);
    const newPrice = prompt("Enter Price", oldPrice);
    const newCategory = prompt("Enter Category", oldCategory);

    const updatedFood = {
        foodName: newName,
        price: newPrice,
        category: newCategory
    };

    await fetch(`http://localhost:5252/foods/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFood)
    });

    loadFoods();
}
function addToCart(name, price) {

    cart.push(Number(price));

    alert(name + " Added To Cart");

    calculateTotal();
}

function calculateTotal() {

    let total = 0;

    cart.forEach(p => total += p);

    document.getElementById("total").innerText = "Total: ₹" + total;
}
function getFoodImage(name) {

    if (!name) return "./images/default.jpg";

    let food = name.toLowerCase().trim().replace(/\s+/g, "");

    if (food.includes("pizza")) return "./images/pizza.jpg";
    if (food.includes("burger")) return "./images/burger.jpg";
    if (food.includes("shawarma")) return "./images/shawarma.jpg";
    if (food.includes("thums") || food.includes("thumsup")) return "./images/thumsup.jpg";
    if (food.includes("pepsi")) return "./images/pepsi.jpg";

    return "./images/default.jpg";
}


function filterByCategory(type) {

    if (type === "all") {
        renderFoods(allFoods);
        return;
    }

    let filtered = allFoods.filter(food => {

        let name = food.foodName.toLowerCase();

        if (type === "drink") {
            return name.includes("pepsi") || name.includes("thums") || name.includes("cola");
        }

        return name.includes(type);
    });

    renderFoods(filtered);
}

loadFoods();