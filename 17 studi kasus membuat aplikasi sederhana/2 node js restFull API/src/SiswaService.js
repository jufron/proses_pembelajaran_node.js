import { readFile } from 'node:fs';
import fsPromise from 'node:fs/promises';

import createResponse from './helper/createResponse.js';


class SiswaService {

  filePath = 'src/data/siswa.json';

  getSiswa (request, response) {
    readFile(this.filePath, (err, data) => {
      if (err) throw err;

      const result = JSON.parse(data.toString());
     
      createResponse(response, result, {
        status : 200,
        message : 'success'
      });
    });
  }

  createSiswa (request, response) {
    request.on('data', async chunk => {
      try {
        // get new data from request 
        const dataFromRequest = JSON.parse(chunk.toString());

        // generate id
        const generateID = Math.floor(Math.random() * 1_000_000);

        // get data from file
        const readFilePromises = await fsPromise.readFile(this.filePath);
        
        // convert to object js
        const convertObj = JSON.parse(readFilePromises.toString());

        convertObj.push({
          id : generateID,
          nama : dataFromRequest.nama,
          email : dataFromRequest.email
        });

        const dataBuffer = Buffer.from(JSON.stringify(convertObj));

        await fsPromise.writeFile(this.filePath, dataBuffer);

        createResponse(response, null, {
          status : 200,
          message : 'data berhasil dibuat'
        });

      } catch (error) {
        console.error(error.message);
        createResponse(response, null, {
          status : 404,
          message : 'fail'
        });
      } 

    });
  }

  updateSiswa (request, response) {
    request.on('data', async chunk => {
      try {
        // ambil data buffer lalu ubah ke string lalu bentuk object js 
        const dataRequest = JSON.parse(chunk.toString());  
        const id = dataRequest.id;
        
        const dataBufferRead = await fsPromise.readFile(this.filePath);
        const getData = JSON.parse(dataBufferRead.toString());
        const index = getData.findIndex(dataObj => dataObj.id === id);
        
        if (index !== -1) {
          getData[index] = dataRequest;

          const dataBufferWrite = Buffer.from(JSON.stringify(getData));

          await fsPromise.writeFile(this.filePath, dataBufferWrite);

          createResponse(response, null, {
            status : 200,
            message : 'berhasil diperbaharui'
          });

        } else {
          createResponse(response, null, {
            status : 404, 
            message : 'ID tidak ditemukan'
          });
        }
        
      } catch (err) {
        console.error(err);
        createResponse(response, null, {
          status : 500,
          message : 'internal server error'
        });
      }

    });
  }

  deleteSiswa (request, response) {
    request.on('data', async chunk => {
      try {
        const dataRequest = JSON.parse(chunk.toString());
        const id = dataRequest.id;

        const dataBufferRead = await fsPromise.readFile(this.filePath);

        const getData = JSON.parse(dataBufferRead.toString());

        const index = getData.findIndex(dataObj => dataObj.id === id);
        
        if (index !== -1) {

          // hapus menggunakan splice
          getData.splice(index, 1);

          const dataBufferWrite = Buffer.from(JSON.stringify(getData));

          await fsPromise.writeFile(this.filePath, dataBufferWrite);

          createResponse(response, null, {
            status : 200,
            message : 'berhasil dihapus'
          });

        } else {
            createResponse(response, null, {
            status : 404, 
            message : 'ID tidak ditemukan'
          });
        }

      } catch (err) {
        console.error(err);
        createResponse(response, null, {
          status : 500,
          message : 'internal server error'
        });
      }

    });

  }

}

const siswaService = new SiswaService();

export default siswaService;