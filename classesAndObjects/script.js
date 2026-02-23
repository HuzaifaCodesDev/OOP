class createPencil{
    constructor(name,company,qty,color){
        this.name = name;
        this.company = company;
        this.color = color;
        this.qty = qty
    }
    erase(){
        document.querySelectorAll("h1").forEach((e)=>{
         if(e.style.color===this.color){
            e.remove();
         }
        })
    }
    write(text){
        let h1 = document.createElement("h1")
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.append(h1)
    }
}
let p1 = new createPencil("huzaifa","khan", 8, "orange")
let p2 = new createPencil("huzaifa","khan", 8, "blue")
 

p1.write("kaisay ho dosto")
p2.write("kaisay ho dosto")
p1.write("kaisay ho dosto")
p1.write("kaisay ho dosto")
p1.write("kaisay ho dosto")
p1.write("kaisay ho dosto")
p2.write("kaisay ho dosto")

p1.erase();