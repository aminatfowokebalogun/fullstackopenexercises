import axios from 'axios'
const baseUrl = 'http://localhost:3001/details';

const getAll = () => {
  return axios.get(`${baseUrl}`)
}

const createContact =(contactObject)=>{
  return axios.post(`${baseUrl}`, contactObject)
}

const deleteContact = (id, contactObject)=>{
  return axios.delete(`${baseUrl}/${id}`,contactObject)
}


export default { 
  getAll, createContact, deleteContact
}