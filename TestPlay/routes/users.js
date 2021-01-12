const express = require('express');
const router = express.Router();
const {config} = require('../db');
const mysql = require('mysql2/promise');
router.post('/dangnhap', async(req,res) => {
  try {
    const {taikhoan, matkhau} = req.body
    if(!taikhoan || !matkhau)  {
      return res.status(500).json({
        message: "Sai params"
      })
    }
    let query = `select * from nguoidung 
    where Taikhoan = '${taikhoan}' and MatKhau = '${matkhau}'`
    const connection = await mysql.createConnection(config);
    const [rows, fields] = await connection.execute(query);
    if(rows.length < 1) {
      return res.status(500).json({
        message: "No data"
      })
    }
    return res.status(200).json({
      data: rows
    })
  } catch (error) {
    return res.status(500).json({
      message: "Loi"
    })
  }
})

router.post('/dangki',async(req,res) => {
  try {
    const {taikhoan, matkhau,gmail} = req.body
    if(!taikhoan || !matkhau || !gmail)  {
      return res.status(500).json({
        message: "Sai params"
      })
    }
    let query = `select * from nguoidung 
    where Taikhoan = '${taikhoan}'`
    const connection = await mysql.createConnection(config);
    const [rows, fields] = await connection.execute(query);
    console.log(rows.length)
    if(rows.length > 0) {
      return res.status(500).json({
        message: "da co users"
      })
    }
    let query1 = `insert into nguoidung(Taikhoan,MatKhau,Gmail)
    values(?,?,?)
    `
    await connection.execute(query1,[taikhoan,matkhau,gmail]);
    return res.status(200).json({
      message: 'success'
    })
  } catch (error) {
    return res.status(500).json({
      message: "Loi"
    })
  }
})
module.exports = router;
