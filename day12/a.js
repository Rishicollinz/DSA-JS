async function f() {
    let response = await fetch('https://www.instagram.com');
    console.log(response.statusText);
}

// f() becomes a rejected promise
f().catch((err)=>{
    console.log(err.message);
})