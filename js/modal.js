
var buttonModal = document.querySelector(".button-show-search");
var popup = document.querySelector(".modal-search");
var date = popup.querySelector(".appointment-form-date");
var formModal = popup.querySelector("form");
var dateIn = popup.querySelector("[name=date-in]");
var dateOut = popup.querySelector("[name=date-out]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");
var storage = localStorage.getItem("date");

popup.classList.add("modal-off");

buttonModal.addEventListener("click", function(evt) {
	popup.classList.toggle("modal-off");
	popup.classList.remove("modal-error");
	date.focus();
});

formModal.addEventListener("submit", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-error");
	if (!dateIn.value || !dateOut.value || !adults.value || !children.value) {
    popup.offsetWidth = popup.offsetWidth; 
		popup.classList.add("modal-error");
	} else {
		localStorage.setItem("date", date.value);
		localStorage.setItem("adults", adults.value);
		localStorage.setItem("children", children.value);
		this.submit();
	}
});
