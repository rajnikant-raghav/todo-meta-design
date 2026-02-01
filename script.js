const Savebtn = document.getElementById("saveModalData");
const List = document.getElementById("list");

Savebtn.addEventListener("click", () => {
  const dateInput = document.getElementById("date");
  const fullNameInput = document.getElementById("fullname");
  const nickNameInput = document.getElementById("nickname");

  const date = dateInput.value;
  const fullname = fullNameInput.value;
  const nickName = nickNameInput.value;

  if (!date || !fullname || !nickName) {
    alert("Please fill in all fields.");
    return;
  }
  const div = document.createElement("div");
  div.className = "list-group-item";
  div.innerHTML = `
  <div class="d-flex justify-content-between align-items-center">

        <div class=" d-flex justify-content-between align-items-center activity-name">
      <div>
        <div class="fw-semibold">${fullname}</div>
        <small class="text-muted">${date} &nbsp;|&nbsp; ${nickName}</small>
      </div>
    </div>


   <div class="dropdown">
  <button
    class="btn p-0 border-0 bg-transparent"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <i class="fa-solid fa-ellipsis-vertical text-warning fa-2x"></i>
  </button>

  <ul class="dropdown-menu dropdown-menu-end">
    <li>
      <a class="dropdown-item mark-done" href="#">Mark as Done</a>
    </li>
    <li>
      <a class="dropdown-item delete" href="#">Delete</a>
    </li>
  </ul>
</div>
  </div>
  `;
  List.appendChild(div);
  dateInput.value = "";
  fullNameInput.value = "";
  nickNameInput.value = "";
  const modal = document.getElementById("modal");
  bootstrap.Modal.getInstance(modal).hide();
});

List.addEventListener("click", (e) => {
  e.preventDefault();

  // MARK AS DONE
  if (e.target.classList.contains("mark-done")) {
    const item = e.target.closest(".list-group-item");

    if (!item.querySelector(".done-icon")) {
      item
        .querySelector(".activity-name")
        .insertAdjacentHTML(
          "afterend",
          `<i class="fa-solid fa-check-circle text-warning me-2 done-icon fa-2x "></i>`,
        );
    }
  }

  // DELETE
  if (e.target.classList.contains("delete")) {
    e.target.closest(".list-group-item").remove();
  }
});
