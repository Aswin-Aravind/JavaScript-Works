// var colors=["red","blue","green","yellow"]

// var colorsCopy=[...colors]  //spread operator is used to create a shallow copy,if we use just "=" both arrays will be considered as same cuz of same reference and the operations done on one will affect another

// colorsCopy.pop()            //we can spread array and object
// console.log(colors);
// console.log(colorsCopy);





// var colors=["red","blue","green","yellow"]

// var colorsCopy=[...colors,"cyan","purple"]

// console.log(colors);

// console.log(colorsCopy);





// var user={name:"hari",email:"harikrish@gmail.com",password:"krishh",isActive:true}

// var userCopy={...user};

// userCopy.isActive=false;

// console.log(user);

// console.table(userCopy);




var product={id:"1",name:"m32",brand:"samsung",price:12000,isActive:false}

var productCopy={...product,isActive:true}

// product.isActive=true;

console.log(productCopy);

console.log(product);

