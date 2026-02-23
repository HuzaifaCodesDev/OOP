class User{
    constructor(name,address,username,email){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user"
    };
    write(text){
       let h2 = document.createElement("h2");
       h2.textContent = text;
       document.body.appendChild(h2)
    }
    checkrole(){
    return `You are a ${this.role}`
       }
}
class Admin extends User{
    constructor(name,address,username,email) {
        super(name,address,username,email)
        this.role ="Admin";
        
    }
    remove(){
        document.querySelectorAll("h2").forEach((e)=>{
            e.remove();
        });
    }
}
let u1 = new User("huzI", "multan", "huzii","huzaifa@gmail.com");
let u2 = new User("diju", "multan", "di","aifa@gmail.com");
let a1 = new Admin("admin","pindi", "ao", "pl@gmai.com");

u1.write("pakistan");
a1.write("KHAN G")
a1.write("KHAN G")
a1.write("KHAN G")
a1.write("KHAN G")
a1.write("KHAN G")
u1.checkrole()
a1.checkrole()
