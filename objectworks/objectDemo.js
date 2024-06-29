var items={potato:45,garlic:300,ginger:250,onion:35,tomato:45}

var nestedArray=Object.entries(items)

var costly=nestedArray.reduce((p1,p2)=>p1[1]>p2[1]?p1:p2)
console.log(costly);


var cheapest=nestedArray.reduce((p1,p2)=>p1[1]<p2[1]?p1:p2)
console.log(cheapest);