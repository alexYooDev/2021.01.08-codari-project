function filter() {

	var value, name, item, i;

	value = document.getElementById("value").value.toUpperCase();
	item = document.getElementsByClassName("itemList");

	for (i = 0; i < item.length; i++) {
		name = item[i].getElementsByClassName("name");
		if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
			item[i].style.display = "flex";
		} else {
			item[i].style.display = "none";
		}
	}
}