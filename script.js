const mainMenu = document.getElementById("main-Menu");
const bersIcon = document.getElementById("bers-icon");

bersIcon.addEventListener("click", function () {
  mainMenu.classList.toggle("hidden");
});

const phone = document.getElementById("phone");
const submitbtn = () => {
  const modal = document.getElementById("modal");
  const nameInput = document.getElementById("nameInput").value;
  console.log(nameInput);
  const div = document.createElement("div");
  div.innerHTML = `
  <dialog id="modal" class="modal">
      <div
        class="modal-box flex flex-col justify-center items-center text-center"
      >
        <h3 class="text-lg font-bold text-lime-400">Congratulations! <span id="name">${nameInput}</span></h3>
        <p class="py-4">
          Your message has been successfully sent. We will review your inquiry
          and get back to you shortly. Thank you for contacting us!
          please Click the confirm button
        </p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="bg-lime-400 py-3 w-72 rounded-md">confirm</button>
          </form>
        </div>
      </div>
    </dialog>
    `;
  modal.appendChild(div);
  const dialog = div.querySelector("dialog");
  dialog.showModal();
};

const btn = document.getElementById("btn");
phone.addEventListener("input", function (e) {
  const number = e.target.value;
  if (number.length > 10) {
    btn.removeAttribute("disabled");
  }
});

let valuesDisplays = document.querySelectorAll(".num");
let interval = 3000;

valuesDisplays.forEach((valuesDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valuesDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valuesDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
