const stations = document.getElementsByClassName("station");

Array.from(stations).forEach((element) => {
  element.addEventListener("click", (ev) => {
    const id = ev.currentTarget.getAttribute("id");

    console.log(id);

    const placeholder = document.getElementsByClassName("embed-placeholder")[0];
    const container = document.getElementsByClassName("embed-bg")[0];

    if (placeholder) {
      placeholder.remove();

      const iframe = document.createElement("iframe");
      iframe.setAttribute("src", `https://www.youtube.com/embed/${id}`);
      iframe.setAttribute("class", "embed");
      iframe.setAttribute("allow", "autoplay");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("scrolling", "no");
      iframe.setAttribute(
        "sandbox",
        "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      );
      container.appendChild(iframe);
    } else {
      const iframe = document.getElementsByClassName("embed")[0];
      iframe.setAttribute("src", `https://www.youtube.com/embed/${id}`);
    }

    const selected = document.getElementsByClassName("selected-station")[0];
    console.log(selected);

    if (selected) {
      selected.setAttribute("class", "station");
    }

    ev.currentTarget.setAttribute("class", "selected-station");
  });
});
