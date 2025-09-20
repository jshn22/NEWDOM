let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let itemList = document.getElementById("itemList");

addItemButton.addEventListener("click", function () {
    let newItem = itemInput.value;
    if (newItem) {
        let listItem = document.createElement("li");
        listItem.textContent = newItem + "  "; 

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.style.cursor = "pointer";
        removeBtn.className = "deleteItem"
        removeBtn.addEventListener("click", function () {
            itemList.removeChild(listItem);
        });

        listItem.appendChild(removeBtn);
        itemList.appendChild(listItem);
        itemInput.value = "";
    }
});







