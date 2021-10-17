export default function () {
  addEventListener("click", (e) => {
    if (e.target.id === "addTodo") {
      let newData = data.getData();
      let newTodo = document.querySelector("#input_addTodo");
      newData.push(newTodo.value);
      data.setData(newData);
    }
    if (e.target.id === "new_todo") {
      const form = document.getElementById("add_todo");
      form.classList.toggle('active')
    }

    if(e.target.id === "btn"){
        console.log(123);
    }
  });

  addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
      const text = e.target.parentElement;
      if (e.target.checked) {
        text.classList.add("completed");
      } else {
        text.classList.remove("completed");
      }
      console.log(e.target.parentElement);
    }
  });
}
