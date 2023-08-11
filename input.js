function firstTest() {
    let testInput = document.getElementById("test").value;
    let result = document.getElementById("result");

    result.textContent = testInput;
    console.log("called");
}
console.log("testing 123");
let submit = document.getElementById("submit");
if (submit !== null && submit !== undefined) {
    submit.addEventListener("click", firstTest, false); 
    console.log(submit);
} else {
    console.log("woops!");
}
