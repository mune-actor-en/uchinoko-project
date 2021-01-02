const BASE_URL = 'http://localhost:8080/api/v1/pets'

export const fetchPets = async () => {
  const url = `${BASE_URL}`
  const res = await fetch(url)
  const convertedData = await res.json()
  const pets = convertedData.data
  return pets
}
