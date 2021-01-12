const express = require('express');
const router = express.Router();
const {config} = require('../db');
const mysql = require('mysql2/promise');
router.get('/',(req,res) => {
  res.json({
    message: '/'
  })
})
router.get('/List2', async (req, res) => {
    
    try {
      const query = `select * from baihat where Danhmuc='HayNhat'`
      const connection = await mysql.createConnection(config);
      const [rows, fields] = await connection.execute(query);
      return res.status(200).json({
        data: rows
      })
    } catch (error) {
      return res.status(500).json({
        data: []
      })
    }
});
router.get('/List1', async (req, res) => {
  try {
    const query = `select * from baihat where Danhmuc='CoTheBanMuonNghe'`
    const connection = await mysql.createConnection(config);
    const [rows, fields] = await connection.execute(query);
    return res.status(200).json({
      data: rows
    })
  } catch (error) {
    return res.status(500).json({
      data: []
    })
  }
});
router.get('/List1/:id', async (req, res) => {
  const {id} = req.params
  try {
    const query = `select * from baihat where id= ${id}`
    const connection = await mysql.createConnection(config);
    const [rows, fields] = await connection.execute(query);
    return res.status(200).json({
      data: rows
    })
  } catch (error) {
    return res.status(500).json({
      data: []
    })
  }
});
router.get('/List2/:id', async (req, res) => {
  const {id} = req.params
  console.log(id)
  try {
    const query = `select * from baihat where id= ${id}`
    const connection = await mysql.createConnection(config);
    const [rows, fields] = await connection.execute(query);
    return res.status(200).json({
      data: rows
    })
  } catch (error) {
    return res.status(500).json({
      data: []
    })
  }
});

router.post('/getidDanhmuc', async (req, res) => {
  let {name} = req.body;
  try {
    const query = `SELECT * FROM baihat WHERE Danhmuc='${name}'`
    const connection = await mysql.createConnection(config);
    const [rows, fields] = await connection.execute(query);
    return res.status(200).json({
      data: rows
    })
  } catch (error) {
    return res.status(500).json({
      data: []
    })
  }
  
});
///////////////////////////////////////////
/////////////////////////////////////////
//////////////// THỂ LOẠI /////////////// 
router.post('/getidTheloai', async (req, res) => {
  let {id} = req.body;
  try {
    const query = `SELECT * FROM baihat WHERE Category='${id}'`
    const connection = await mysql.createConnection(config);
    const [rows, fields] = await connection.execute(query);
    return res.status(200).json({
      data: rows
    })
  } catch (error) {
    return res.status(500).json({
      data: []
    })
  }
  
});
///////////////////////////////////////////
//////////////////// SINGLE//////////////
router.post('/playlist', async (req, res) => {
  let {taikhoan} = req.body;
  try {
    const query = `SELECT * FROM dsplaylits where TaiKhoan = '${taikhoan}'`
    const connection = await mysql.createConnection(config);
    const [rows, fields] = await connection.execute(query);
    return res.status(200).json({
      data: rows
    })
  } catch (error) {
    return res.status(500).json({
      data: []
    })
  }
  
});
router.post('/addlist', async (req, res) => {
  let {Tenlist,ID} = req.body;
  try {
    const query = `INSERT INTO dsplaylits(Tenplaylist,Taikhoan) VALUES (?,?)`
    const connection = await mysql.createConnection(config);
    const [rows, fields] = await connection.execute(query,[Tenlist,ID]);
    return res.status(200).json({
      data: rows
    })
  } catch (error) {
    return res.status(500).json({
      data: []
    })
  }
  
});

////////////////////////////
/////////TÌM KIẾM ///////////
router.post('/timkiem', async (req, res) => {
  let {title} = req.body;
  try {
    const query = `SELECT * FROM baihat WHERE title LIKE %${title}%'`
    const connection = await mysql.createConnection(config);
    const [rows, fields] = await connection.execute(query);
    return res.status(200).json({
      data: rows
    })
  } catch (error) {
    return res.status(500).json({
      data: []
    })
  }
});
router.post('/getidimkiem', async (req, res) => {
  let {id} = req.body;
  try {
    const query = `SELECT * FROM baihat WHERE title LIKE %${id}%'`
    const connection = await mysql.createConnection(config);
    const [rows, fields] = await connection.execute(query);
    return res.status(200).json({
      data: rows
    })
  } catch (error) {
    return res.status(500).json({
      data: []
    })
  }
  

});
router.post('/GetTT', async (req, res) => {
  let {taikhoan} = req.body;
  try {
    const query = `SELECT gmail FROM nguoidung WHERE Taikhoan='${taikhoan}'`
    const connection = await mysql.createConnection(config);
    const [rows, fields] = await connection.execute(query);
    return res.status(200).json({
      data: rows
    })
  } catch (error) {
    return res.status(500).json({
      data: []
    })
  }
  
});
module.exports = router;
