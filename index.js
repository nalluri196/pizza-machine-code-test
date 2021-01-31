toppingsList = [
    { id: "1", name: "Alfredo Sauce" },
    { id: "2", name: "Anchovy" },
    { id: "3", name: "Artichoke" },
    { id: "4", name: "Artichoke Hearts" },
    { id: "5", name: "Arugula" },
    { id: "6", name: "Asiago Cheese" },
    { id: "7", name: "Bacon" },
    { id: "8", name: "Banana Peppers" },
    { id: "9", name: "Barbecue (BBQ) Pulled Pork" },
    { id: "10", name: "Barbecue (BBQ) Sauce" },
    { id: "11", name: "Beef" },
    { id: "12", name: "Bell Pepper" },
    { id: "13", name: "Black Olives" },
    { id: "14", name: "Broccoli" },
    { id: "15", name: "Buffalo Chicken Strips" },
    { id: "16", name: "Buffalo Mozzarella" },
    { id: "17", name: "Canadian Bacon" },
    { id: "18", name: "Capers" },
    { id: "19", name: "Capicola" },
    { id: "20", name: "Capsicum" },
    { id: "21", name: "Caramelized Onions" },
    { id: "22", name: "Cherry Tomatoes" },
    { id: "23", name: "Chicken" },
    { id: "24", name: "Chorizo" },
    { id: "25", name: "Crab Meat" },
    { id: "26", name: "Crushed Red Pepper" },
    { id: "27", name: "Deep Dish Crust" },
    { id: "28", name: "Duck Meat" },
    { id: "29", name: "Egg" },
    { id: "30", name: "Eggplant" },
    { id: "31", name: "Feta Cheese" },
    { id: "32", name: "Friggitello (Pepperoncini)" },
    { id: "33", name: "Garlic" },
    { id: "34", name: "Gluten Free Crust" },
    { id: "35", name: "Goat Cheese" },
    { id: "36", name: "Gorgonzola Cheese" },
    { id: "37", name: "Green Bell Pepper" },
    { id: "38", name: "Green Olives" },
    { id: "39", name: "Gyro Meat" },
    { id: "40", name: "Habanero Peppers" },
    { id: "41", name: "Ham" },
    { id: "42", name: "Hamburger (Ground Beef)" },
    { id: "43", name: "Hot Dog" },
    { id: "44", name: "Hot Sauce" },
    { id: "45", name: "Italian Sausage" },
    { id: "46", name: "Italian Sweet Pepper" },
    { id: "47", name: "Jalapeño" },
    { id: "48", name: "Meatballs" },
    { id: "49", name: "Mozzarella" },
    { id: "50", name: "Mushroom" },
    { id: "51", name: "Olive Oil" },
    { id: "52", name: "Onion" },
    { id: "53", name: "Oregano" },
    { id: "54", name: "Parmiagiano-Teggiano" },
    { id: "55", name: "Pepperoni" },
    { id: "56", name: "Pesto" },
    { id: "57", name: "Pineapple" },
    { id: "58", name: "Pork" },
    { id: "59", name: "Prosciutto" },
    { id: "60", name: "Provolone Cheese" },
    { id: "61", name: "Ranch Dressing" },
    { id: "62", name: "Red Bell Pepper" },
    { id: "63", name: "Red Onion" },
    { id: "64", name: "Regular Crust" },
    { id: "65", name: "Ricotta Cheese" },
    { id: "66", name: "Salami" },
    { id: "67", name: "Sauerkraut" },
    { id: "68", name: "Sausage" },
    { id: "69", name: "Seafood" },
    { id: "70", name: "Shredded Barbecue (BBQ) Chicken" },
    { id: "71", name: "Shrimp" },
    { id: "72", name: "Spinach" },
    { id: "73", name: "Sun-Dried Tomatoes" },
    { id: "74", name: "Sweetcorn" },
    { id: "75", name: "Thin Crust" },
    { id: "76", name: "Tomato" },
    { id: "77", name: "Tomato Sauce" },
    { id: "78", name: "Turkey Bacon" },
  ];
  filteredToppingsList = [];
  selectedToppings = [];
  function loadPizzaToppings() {
    //   fetch("pizza-toppings.json")
    //     .then((resp) => resp.json())
    //     .then((data) => (toppingsList = data));
  }
  
  function handleToppingsDelete(selectedTopping, index) {
    const isConfirm = confirm(
      `Are you sure? do you want to delete the ${selectedTopping.name} topping?`
    );
    if (isConfirm) {
      selectedToppings.splice(index, 1);
      prepareSelectedToppingsUI();
    }
  }
  
  function prepareSelectedToppingsUI() {
    const ul = document.querySelector(".selected-toppings-list");
    ul.innerHTML = "";
    const len = selectedToppings.length;
    const noToppingsText = document.querySelector(".no-toppings-text");
    if (len === 0) {
      noToppingsText.classList.remove("hide");
    } else {
      noToppingsText.classList.add("hide");
    }
    for (let i = 0; i < len; i++) {
      const topping = selectedToppings[i];
      const li = document.createElement("li");
      li.classList.add("selected-topping");
      li.append(document.createTextNode(topping.name));
      const clostBtn = document.createElement("button");
      clostBtn.append("x");
      clostBtn.classList.add("close-btn");
      clostBtn.addEventListener(
        "click",
        handleToppingsDelete.bind(null, topping, i)
      );
      li.append(clostBtn);
      ul.append(li);
    }
  }
  
  function handleToppingSelect(topping) {
    filteredToppingsList = [];
    document.querySelector("#auto_complete").value = "";
    selectedToppings.push(topping);
    selectedToppings.sort((a, b) => (a.name < b.name ? -1 : 1));
    prepareToppingSuggestions();
    prepareSelectedToppingsUI();
  }
  
  function prepareToppingSuggestions() {
    const ul = document.querySelector(".pizza_toppings");
    ul.innerHTML = "";
    filteredToppingsList.forEach((topping) => {
      const li = document.createElement("li");
      li.classList.add("suggestion");
      li.append(document.createTextNode(topping.name));
      li.addEventListener("click", handleToppingSelect.bind(null, topping));
      ul.append(li);
    });
  }
  
  function handleAutoComplete(value) {
    if (value !== "") {
      filteredToppingsList = toppingsList.filter(
        (x) => x.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      prepareToppingSuggestions();
    } else {
      const ul = document.querySelector(".pizza_toppings");
      ul.innerHTML = "";
    }
  }
  