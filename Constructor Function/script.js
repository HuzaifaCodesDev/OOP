function Createpencil(name, qty, color, company){
  this.name = name,
  this.qty = qty,
  this.color = color,
  this.company = company
  this.write = function(text){
 let h1 = document.createElement("h1");
 h1.textContent = text;
 h1.style.color = this.color;
  document.body.appendChild(h1)}
};

let pencil1 = new Createpencil("huzi", 10, "black", "uiz")
let pencil2 = new Createpencil("huzi", 10, "red", "uiz")

