	
	var buttonModal = document.querySelector(".button-show-search");
	var popup = document.querySelector(".modal-search");
	var date = popup.querySelector(".appointment-form-date");
	var formModal = popup.querySelector("form");
	var date = popup.querySelectorAll("[name=date]");
	var adults = popup.querySelector("[name=adults]");
	var children = popup.querySelector("[name=children]");
	var storage = localStorage.getItem("date");
	
			
	buttonModal.addEventListener("click", function(evt) {
		evt.preventDefault();
		popup.classList.toggle("modal-off");
		date.focus();
	});
	
	formModal.addEventListener("submit", function (evt) {
    evt.preventDefault();
		if (!date.value || !adults || !children.value) {
			console.log("Нужно заполнить всю форму");
		} else {
			localStorage.setItem("date", date.value);
			localStorage.setItem("adults", adults.value);
			localStorage.setItem("children", children.value);
		}		
  });