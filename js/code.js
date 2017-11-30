var link = document.querySelector(".write-btn");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=e-mail]");
var text = popup.querySelector("[name=message]");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("write-us-show");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("write-us-show");
});

form.addEventListener("submit", function(event) {
	if (!name.value) {
		event.preventDefault();
		name.classList.add("write-form-error");
	}
});



