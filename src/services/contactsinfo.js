import axios from 'axios'
const baseUrl = 'http://localhost:3001/details';

const getAll = () => {
  return axios.get(`${baseUrl}`)
}

const createContact =(contactObject)=>{
  return axios.post(`${baseUrl}`, contactObject)
}

const deleteContact = (id, deleteContact)=>{
  return axios.delete(`${baseUrl}/${id}`, deleteContact)
}

const updateContact =(id, contactObject)=>{
  return axios.put(`${baseUrl}/${id}`,contactObject)
}


export default { 
  getAll, createContact, deleteContact, updateContact,
}