var products=[

    {id:1,title:"samasungs23ultra",price:130000,brand:"samsung"},
    {id:2,title:"m32",price:35000,brand:"samsung"},
    {id:3,title:"opporeno",price:27000,brand:"oppo"},
    {id:4,title:"mi21note",price:23000,brand:"mi"},
    {id:5,title:"moto edge 40",price:23000,brand:"moto"},
    {id:6,title:"moto ede40 neo",price:25000,brand:"moto"},
    {id:7,title:"iphone13",price:140000,brand:"apple"},
    {id:8,title:"iphone13pro",price:150000,brand:"apple"},
  
]

// console.log(products.length);



// var productNames=products.map(p=>p.title)
// console.log(productNames);



// var productpriceFilter=products.filter(p=>p.price<35000).map(p=>p.title)
// console.log(productpriceFilter);



var samsungmobileFilter=products.filter(p=>p.brand=="samsung" && p.price<50000).map(p=>p.title)
console.log(samsungmobileFilter);



// var costlyProduct=products.reduce((o1,o2)=>o1.price>o2.price?o1.title:o2.title)
// console.log(costlyProduct);


// var sortpriceDesc=products.sort((p1,p2)=>p2.price-p1.price)
// console.log(sortpriceDesc.map(p=>p.title));



// var productsinaRange=products.filter(p=>p.price>=25000 && p.price<=35000).map(p=>p.title)
// console.log(productsinaRange);