const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const res = document.getElementById("result");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const but = document.getElementById('but')
form.addEventListener('submit', sumar)
btn.addEventListener("click", sumar);

function sumar(event) {
    console.log({event});
    event.preventDefault()
  const num1 = n1.value;
  const num2 = n2.value;
  const resu = parseInt(num1) + parseInt(num2);
  res.innerText = "El resultado es:" + resu;
}
