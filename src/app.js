const itmeEl = document.getElementById("times");
function typeWriter(item) {
  item.classList.remove("d-none");
}
function typeWriterStart(item) {
  item.classList.add("typing2");
}
setInterval(() => typeWriter(typeWriter(itmeEl), 4000));
setInterval(() => typeWriter(typeWriterStart(itmeEl), 8000));
