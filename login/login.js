// ================ promise ======================
fetch("https://643e1624c72fda4a0bed5b7f.mockapi.io/user")
.then((response) => response.json())
.then((result) => {
  console.log(result);

})
.catch((error) => {
  console.log(error);
})

// ============== async await =====================
const getDataUser = async () => {
  const response = await fetch("https://643e1624c72fda4a0bed5b7f.mockapi.io/user")
  const result = await response.json()

  console.log(result);
}

getDataUser()