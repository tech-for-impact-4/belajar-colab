let users = []

let inputLogin = {
  username: "auzan",
  password: "123"
}

// ============== async await =====================
const getDataUser = async () => {
  const response = await fetch("https://643e1624c72fda4a0bed5b7f.mockapi.io/user")
  const result = await response.json()
  
  console.log(result);
  users = [...result]

  for (item of users) {
    if (item.username === inputLogin.username && item.password === inputLogin.password){
      console.log("login berhasil");
      break
    } else {
      console.log("username dan password salah");
      break
    }
  }
}

getDataUser()




// ================ promise ======================
fetch("https://643e1624c72fda4a0bed5b7f.mockapi.io/user")
.then((response) => response.json())
.then((result) => {
  console.log(result);

})
.catch((error) => {
  console.log(error);
})