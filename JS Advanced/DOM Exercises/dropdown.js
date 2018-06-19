function addItem() {
    let itemText = document.getElementById("newItemText").value;
    let item = document.getElementById("newItemValue").value;
    let menuItems = document.getElementById("menu");
    let option = document.createElement("OPTION");
    option.textContent = itemText;
    option.value = item;
    menuItems.appendChild(option)
    document.getElementById("newItemText").value = '';
    document.getElementById("newItemValue").value = '';
}
