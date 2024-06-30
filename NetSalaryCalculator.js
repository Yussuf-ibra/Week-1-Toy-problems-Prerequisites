let basicSalary = parseInt(prompt("Enter basic salary per month"))//User enters basic salary and benefits//
let benefits = parseInt(prompt("Enter benefits per month"))
let taxablePay

taxablePay = basicSalary + benefits

let tax
let relief = 2400 + 5000
// PAYE tax calculations//
if (taxablePay <= 24000) {
    tax = (taxablePay * 0.10)
} else if
    (taxablePay <= 32333) {
    tax = (taxablePay * 0.25)
} else if (taxablePay <= 500000) {
    tax = (taxablePay * 0.30)
} else if (taxablePay <= 800000) {
    tax = (taxablePay * 0.325)
} else { tax = taxablePay * 0.35 }
let netTax = tax - relief
console.log("Your PAYE is " + netTax + " KES"); alert("Your PAYE is " + netTax + " KES")

//NHIF deductions per month//
let grossPay = taxablePay
let NHIF
if (grossPay < 6000) {
    NHIF = (150)
} else if (grossPay < 8000) {
    NHIF = (300)
} else if (grossPay < 12000) {
    NHIF = (400)
} else if (grossPay < 15000) {
    NHIF = (500)
} else if (grossPay < 20000) {
    NHIF = (600)
} else if (grossPay < 25000) {
    NHIF = (750)
} else if (grossPay < 30000) {
    NHIF =  (800)
}
else if (grossPay < 35000) {
    NHIF = (900)
} if (grossPay < 40000) {
    NHIF = (950)
} else if (grossPay < 45000) {
    NHIF = (1000)
} else if (grossPay < 50000) {
    NHIF = (1100)
} else if (grossPay < 60000) {
    NHIF = (1200)
} else if (grossPay < 70000) {
    NHIF = (1300)
} else if (grossPay < 80000) {
    NHIF = (1400)
}
else if (grossPay < 90000) {
    NHIF = (1500)
} else if (grossPay < 100000) {
    NHIF = (1600)
} else { NHIF = (1700) }
console.log("Your NHIF deductions are " + NHIF + " KES"); alert("Your NHIF deductions are " + NHIF + " KES")

//NSSF deduction calculations//

let pensionablePay = grossPay
let NSSF = pensionablePay * 0.06
console.log(`Your NSSF deductions are ${NSSF} KES`); alert(`Your NSSF deductions are ${NSSF} KES`)

//gross pay calculations//
let grossSalary = taxablePay
console.log(`Your Gross salary is ${grossPay} KES`); alert(`Your Gross salary is ${grossPay} KES`)

//net pay calculations//
let netSalary = grossPay - (netTax + NHIF + NSSF)
console.log(`Your net salary is ${netSalary} KES`); alert(`Your net salary is ${netSalary} KES`)