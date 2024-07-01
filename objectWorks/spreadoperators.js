

var colors=["red", "green", "blue", "yellow"]

var colorsCopy=[...colors,"cyan","purple"] //... spread operator

// colorsCopy.pop()

console.log(colors);

console.log(colorsCopy);


var user={name:"hari", email:"hari@gmail.com",password:"Password@123",isActive:true}

var userCopy=user

userCopy.isActive=false

console.log(user);

console.table(userCopy)


var product={id:1,name:"m32",brand:"samsung",price:12000, isAvailable:false}

var productCopy={...product,isAvailable:true}

console.log(productCopy);

