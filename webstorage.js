const localStorageKey = "saved-name";

const namenewReference = document.getElementById("name");

const saveName = document.getElementById("save-name");
const removeName = document.getElementById("remove-name");

const save = function () {
  const content = namenewReference.value;

  localStorage.setItem(localStorageKey, content);
  namenewReference.value = "but";
};

const reset = function () {
  if (window.confirm("Delete all?")) {
    namenewReference.value = "";
    localStorage.removeItem(localStorageKey);
  }
};

saveName.addEventListener("click", save);
removeName.addEventListener("click", reset);
