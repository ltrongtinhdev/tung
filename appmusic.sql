-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th1 12, 2021 lúc 06:04 AM
-- Phiên bản máy phục vụ: 10.4.10-MariaDB
-- Phiên bản PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `appmusic`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `baihat`
--

DROP TABLE IF EXISTS `baihat`;
CREATE TABLE IF NOT EXISTS `baihat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) NOT NULL,
  `artist` varchar(500) NOT NULL,
  `albumArtUrl` varchar(500) NOT NULL,
  `audioUrl` varchar(500) NOT NULL,
  `Category` varchar(500) NOT NULL,
  `Danhmuc` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `baihat`
--

INSERT INTO `baihat` (`id`, `title`, `artist`, `albumArtUrl`, `audioUrl`, `Category`, `Danhmuc`) VALUES
(1, 'Có Chàng Trai Viết Lên Cây', 'Phan Mạnh Quỳnh', '4.jpg', 'CoChangTraiVietLenCay.mp3', 'TinhYeu', 'CoTheBanMuonNghe'),
(2, 'Hãy Trao Cho Anh', 'Sơn Tùng STP', '5.jpg', 'HayTraoChoAnh.mp3', 'TinhYeu', 'CoTheBanMuonNghe'),
(3, 'Hãy Ra Khỏi Người Dó Đi', 'Phan Mạnh Quỳnh', '3.jpg', 'HayRaKhoiNguoiDoDi.mp3', 'TinhYeu', 'HayNhat'),
(4, 'Xin Một Lần Ngoại Lệ', 'Phương Nam', 'xin1lanngoaile.jpg', 'XinMotLanNgoaiLe.mp3', 'TinhYeu', 'HayNhat'),
(5, 'Xin Một Lần Ngoại Lệ', 'Phương Nam', 'xin1lanngoaile.jpg', 'XinMotLanNgoaiLe.mp3', 'TinhYeu', 'NhacMoi');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dsplaylits`
--

DROP TABLE IF EXISTS `dsplaylits`;
CREATE TABLE IF NOT EXISTS `dsplaylits` (
  `idDSlist` int(11) NOT NULL AUTO_INCREMENT,
  `Tenplaylist` varchar(500) NOT NULL,
  `Taikhoan` varchar(500) NOT NULL,
  PRIMARY KEY (`idDSlist`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguoidung`
--

DROP TABLE IF EXISTS `nguoidung`;
CREATE TABLE IF NOT EXISTS `nguoidung` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Taikhoan` varchar(500) NOT NULL,
  `Matkhau` varchar(500) NOT NULL,
  `Gmail` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `nguoidung`
--

INSERT INTO `nguoidung` (`id`, `Taikhoan`, `Matkhau`, `Gmail`) VALUES
(1, 'admin', 'admin', 'admin@gmail.com'),
(2, 'admin1', 'admin1', 'admin@gmail.com'),
(3, 'admin2', 'admin2', 'admin@gmail.com'),
(4, 'dsa', 'dsa', 'dsa'),
(5, 'admin12', 'admin', '123');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `playlits`
--

DROP TABLE IF EXISTS `playlits`;
CREATE TABLE IF NOT EXISTS `playlits` (
  `idlist` int(11) NOT NULL,
  `idDSlist` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
