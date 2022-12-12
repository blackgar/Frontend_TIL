window.addEventListener("load", () => {
  const $form = document.querySelector("#list-form");
  const $input = document.querySelector("#list-input");
  const $lists = document.querySelector("#lists");
  $input.focus();

  const onSubmit = (event) => {
    event.preventDefault();

    const text = $input.value;
    if (!text) {
      alert("내용을 입력해주세요.");
      $input.focus();
      return;
    }

    const $list = document.createElement("div");
    $list.classList.add("list");

    const $content = document.createElement("div");
    $content.classList.add("content");
    $content.textContent = text;

    $list.appendChild($content);
    $lists.appendChild($list);
    $input.value = "";
    $input.focus();
  };

  $form.addEventListener("submit", onSubmit);
});
