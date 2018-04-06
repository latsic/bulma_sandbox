export function printMe1(p) {
    console.log('PrintMe1, I get called from print.js!');
    p.innerHTML = "printMe1";
}
export function printMe2(p) {
    console.log('PrintMe2, I get called from print.js!');
    p.innerHTML = "printMe2";  
}