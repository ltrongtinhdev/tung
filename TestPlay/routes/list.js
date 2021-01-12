const express = require('express');
const router = express.Router();
const {config} = require('../db');
const mysql = require('mysql2/promise');
router.get('/List2', function (req, res) {
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request(); // tạo đối tượng Request
        request.query(`select * from Baihat where Danhmuc='HayNhat'`, function (err, recordset) {
            if (err)
                console.log(err) // xuất dữ liệu
                res.send(JSON.stringify(recordset));
        });
    });
});
router.get('/List1', function (req, res) {
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request(); // tạo đối tượng Request
        request.query(`select * from Baihat where Danhmuc='CoTheBanMuonNghe'`, function (err, recordset) {
            if (err)
                console.log(err) // xuất dữ liệu
            res.send(JSON.stringify(recordset));
        });
    });
});