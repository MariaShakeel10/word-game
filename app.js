let userAns = prompt("Make 3 or 4 letter word from the word 'Project'.");
let arr = ["cope", "cope", "rope", "repo", "port", "tore", "cop", "rot", "joe", "opt", "toe", "top", "pot", "pro", "jet", "pet", "ore", "per"];
let userOpt = userAns.toLowerCase()
let flag = false
for (let i = 0; i < arr.length; i++) {
    if (userOpt == arr[i]) {
        flag = true
    }
}
if (flag) {
    document.write(`<div class="card m-auto mt-5 bg" style="width: 18rem;>' + '< div class= "card-body" ><h5 class="card-title text-center mx-auto">Win</h5></div>`)
} else {
    document.write(`<div class="card m-auto mt-5 bg" style="width: 18rem;>' + '< div class= "card-body" ><h5 class="card-title text-center mx-auto">Try Again</h5></div>`)
}