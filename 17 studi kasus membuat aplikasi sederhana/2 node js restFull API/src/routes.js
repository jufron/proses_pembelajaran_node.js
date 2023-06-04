import siswaService from "./siswaService.js";


const routes = (request, response) => {

  if (request.method === "GET") {
    siswaService.getSiswa(request, response);
  } else if (request.method === 'POST') {
    siswaService.createSiswa(request, response);
  } else if (request.method === 'PUT') {
    siswaService.updateSiswa(request, response);
  } else if (request.method === 'DELETE') {
    siswaService.deleteSiswa(request, response);
  }
  
};

export default routes;