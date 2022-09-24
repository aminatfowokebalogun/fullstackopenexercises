import axios from 'axios'
const baseUrl = 'http://localhost:3001/details';

//doesn't need an id
const getAll = () => {
  return axios.get(`${baseUrl}`)
}

//expects an object that would be created and doesn't need an id
const createContact =(contactObject)=>{
  return axios.post(`${baseUrl}`, contactObject)
}

//expects the id it's performing an action on, and the objects content it's deleting
const deleteContact = (id, deleteContact)=>{
  return axios.delete(`${baseUrl}/${id}`, deleteContact)
}

//expects the id it's performing an action on, and the objects content it's updating
const updateContact =(id, contactObject)=>{
  return axios.put(`${baseUrl}/${id}`,contactObject)
}


export default { 
  getAll, createContact, deleteContact, updateContact,
}