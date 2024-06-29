principalAmount=200000;

annualInterest=10.5;

tenure=5*12;

monthlyInterest= annualInterest/12/100;

// console.log(monthlyInterest);

emi = principalAmount*monthlyInterest*(1+monthlyInterest)**tenure/((1+monthlyInterest)**tenure-1);

console.log("Emi to be paid is, ",Math.ceil(emi),".");