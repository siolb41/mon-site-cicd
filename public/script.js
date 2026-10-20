function additionner(a, b) {
  return a + b;
}

// "Browser" part: only runs inside a web page
if (typeof document !== "undefined") {
  document.getElementById("calculer").addEventListener("click", () => {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    document.getElementById("resultat").textContent =
      "Result: " + additionner(a, b);
  });
}

// "Node.js" part: lets the tests import the function
if (typeof module !== "undefined") {
  module.exports = { additionner };
}
