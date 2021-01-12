DROP DATABASE APPMUSIC
CREATE DATABASE APPMUSIC
CREATE TABLE Nguoidung (
	Taikhoan NVARCHAR(50),
	Matkhau NVARCHAR(50),
	Gmail NVARCHAR(50),
	Primary key(Taikhoan)
)
CREATE TABLE Baihat(
	id INT IDENTITY(1,1) PRIMARY KEY,
	title NVARCHAR(200),
    artist NVARCHAR(200),
    albumArtUrl NVARCHAR(200),
    audioUrl NVARCHAR(200),
	Category NVARCHAR(200),
	Danhmuc NVARCHAR(200),
)
CREATE TABLE DSplaylits(
	idDSlist INT IDENTITY(1,1) PRIMARY KEY,
	Tenplaylist NVARCHAR(50),
	Taikhoan NVARCHAR(50),
	constraint fk_DSplaylits_Nguoidung foreign key(Taikhoan) references Nguoidung(Taikhoan)on update cascade on delete cascade,

)
CREATE TABLE playlits(
	idlist INT IDENTITY(1,1) PRIMARY KEY,
	idDSlist INT,
	id INT,
	constraint fk_playlits_Baihat foreign key(id) references Baihat(id)on update cascade on delete cascade,
	constraint fk_playlits_DSplaylits foreign key(idDSlist) references DSplaylits(idDSlist)on update cascade on delete cascade,
)
SELECT Baihat.title,Baihat.artist,Baihat.albumArtUrl,Baihat.audioUrl FROM DSplaylits,Baihat,playlits WHERE DSplaylits.idDSlist=playlits.idDSlist and playlits.id=Baihat.id and DSplaylits.Taikhoan='Admin' and 
INSERT INTO Baihat VALUES (N'Có Chàng Trai Viết Lên Cây',N'Phan Mạnh Quỳnh','4.jpg','CoChangTraiVietLenCay.mp3','TinhYeu','CoTheBanMuonNghe')
INSERT INTO Baihat VALUES (N'Hãy Trao Cho Anh',N'Sơn Tùng STP','5.jpg','HayTraoChoAnh.mp3','TinhYeu','CoTheBanMuonNghe')
INSERT INTO Baihat VALUES (N'Đừng yêu nữa em mệt rồi',N'Min','dungyeunuaem.jpg','dungyeunuaemmetr.mp3','NhacTre','CoTheBanMuonNghe')
INSERT INTO Baihat VALUES (N'Cảm giác lúc ấy sẽ ra sao',N'Lou Hoàng','camgiaclucay.jpg','camgiaclucayseras.m4a','NhacTre','CoTheBanMuonNghe')
INSERT INTO Baihat VALUES (N'Buồn lắm em ơi',N'Trịnh Đình Quang','buonlamemoi.jpg','BuonLamEmOi.mp3','NhacTre','CoTheBanMuonNghe')
INSERT INTO Baihat VALUES (N'Mưa Chiều Miền Trung',N'Dương Hồng Loan','duong-hong-loan-1.jpg','MuaChieuMienTrung.mp3','NhacTre','CoTheBanMuonNghe')
INSERT INTO Baihat VALUES (N'Chờ nhau nhé',N'Suni Hạ Linh','chn.jpg','ChoNhauNhe-SuniHaLinh.mp3','NhacTre','CoTheBanMuonNghe')
INSERT INTO Baihat VALUES (N'Đường Quyền Tình Yêu',N'DatKaa','DQTY.jpg','DQTY.mp3','NhacTre','CoTheBanMuonNghe')


INSERT INTO Baihat VALUES (N'Hãy Ra Khỏi Người Dó Đi',N'Phan Mạnh Quỳnh','3.jpg','HayRaKhoiNguoiDoDi.mp3','TinhYeu','HayNhat')
INSERT INTO Baihat VALUES (N'Xin Một Lần Ngoại Lệ',N'Phương Nam','xin1lanngoaile.jpg','XinMotLanNgoaiLe.mp3','TinhYeu','HayNhat')
INSERT INTO Baihat VALUES (N'Có Chắc yêu là đây',N'Sơn Tùng MTP','1.jpg','CochacyeuladayST.mp3','TinhYeu','HayNhat')
INSERT INTO Baihat VALUES (N'Là bạn không thể yêu',N'Lou Hoàng','labankhongtheyeu.jpg','LaBanKhongTheYeu.mp3','TinhYeu','HayNhat')
INSERT INTO Baihat VALUES (N'Sài Gòn Của Anh',N'HuyR','saigoncuaanh.jpg','SaiGonCuaAnh-HuyRKICM.mp3','TinhYeu','HayNhat')
INSERT INTO Baihat VALUES (N'Hẹn Em Kiếp Sau',N'Văn Dự','henemkiepsau.jpg','HenEmKiepSauOrinnRemix.mp3','TinhYeu','HayNhat')
INSERT INTO Baihat VALUES (N'Anh thương em nhất mà',N'Cảnh Chiến','anhthuongemnhatma.jpg','AnhThuongEmNhatMa.mp3','TinhYeu','HayNhat')

INSERT INTO Baihat VALUES (N'Nối lại tình xưa',N'Như Quỳnh-Mạnh Quỳnh','NLTX.jpg','Noi Lai Tinh Xua - Nhu Quynh_ Manh Quynh.mp3','TruTinh','HayNhat')
INSERT INTO Baihat VALUES (N'Đường Tím Bàng Lang',N'Quốc Thiên','DTBL.jpg','DuongTimBangLan.mp3','TruTinh','HayNhat')
INSERT INTO Baihat VALUES (N'Đắp mộ cuộc tình',N'Quang Lập','DMCT.jpg','DapMoCuocTinh-QuangLap.mp3','TruTinh','HayNhat')
INSERT INTO Baihat VALUES (N'Con Đường Xưa Em Đi',N'Như Quỳnh','CDXED.jpg','ConDuongXuaEmDi-NhuQuynh.mp3','TruTinh','HayNhat')

INSERT INTO Baihat VALUES (N'Bỏ Lỡ Một Người',N'Lê Bảo Bình','BLMN.jpg','BoLoMotNguoi-LeBaoBinh.mp3','NhaTre','NhacMoi')
INSERT INTO Baihat VALUES (N'Em không sai chúng ta sai',N'Erik','EKSCTS.jpg','EmKhongSaiChungTaSa-Erik.mp3','NhaTre','NhacMoi')
INSERT INTO Baihat VALUES (N'Khác Biệt To Lớn',N'Cảnh Chiến','KBTL.jpg','Khacbiettolon.mp3','NhaTre','NhacMoi')
INSERT INTO Baihat VALUES (N'Sáu Hồng Gai',N'Quang Vinh','SHG.jpg','SauHongGai-G5R-6580691.mp3','NhaTre','NhacMoi')
INSERT INTO Baihat VALUES (N'Sóng Gió',N'Jack','SG.jpg','SongGioDemo-JackG5RKICM-6010723.mp3','NhaTre','NhacMoi')
INSERT INTO Baihat VALUES (N'Làm Gì phải hốt',N'Đen','LGPH.jpg','LamGiPhaiHot-JustaTeeDenHoangThuyLinh.mp3','NhaTre','NhacMoi')

INSERT INTO Baihat VALUES (N'Cát bụi cuộc đời',N'Quang Lập','CBCD.jpg','CBCD.mp3','Quehuong','Nghenhieu')
INSERT INTO Baihat VALUES (N'Đường về quê hương',N'Quách Thành Danh','DV2T.jpg','DV2T.mp3','Quehuong','Nghenhieu')
INSERT INTO Baihat VALUES (N'Nỗi Buồn Mẹ Tôi',N'Quang Lập','NBMT.jpg','NBMT.mp3','Quehuong','Nghenhieu')
INSERT INTO Baihat VALUES (N'Mười năm tái ngộ',N'Tuấn Vũ','MNTN.jpg','MNTN.mp3','Quehuong','Nghenhieu')
INSERT INTO Baihat VALUES (N'Sầu tím hiệp hồng',N'Lệ Quyền','STTH.jpg','STTH.mp3','Quehuong','Nghenhieu')


INSERT INTO Baihat VALUES (N'Nắm bàn tay say cả đời',N'Đạt Trần','NBTSCD.jpg','NamBanTaySayCaDoi-DatTranNau.mp3','TinhYeu','HayNhat')
INSERT INTO Baihat VALUES (N'Một Nhà',N'DaLAB','1N.png','MotNha-DaLAB.mp3','TinhYeu','HayNhat')
INSERT INTO Baihat VALUES (N'Xứng đôi cưới thôi',N'Lê Thiện Hiếu','XDCT.jpg','XungDoiCuoiThoi-LeThienHieu.mp3','TinhYeu','HayNhat')
INSERT INTO Baihat VALUES (N'Yêu anh em nhé',N'HuyR','YAEN.jpg','YeuAnhE Nhe-HuyR_Tung Viu.mp3','TinhYeu','HayNhat')
INSERT INTO Baihat VALUES (N'Dành Cho Em',N'Hoàng Tôn','DCE.png','DanhChoEm-HoangTon.mp3','TinhYeu','HayNhat')
INSERT INTO Baihat VALUES (N'Chỉ bằng cái gật đầu',N'Yan Nguyễn','CBCGD.jpg','ChiBangCaiGa Dau-Yan Nguyen.mp3','TinhYeu','HayNhat')


INSERT INTO Nguoidung VALUES ('Admin','Admin','admin@gmail.com')
INSERT INTO Nguoidung VALUES ('Pnam','Admin','admin@gmail.com')

INSERT INTO DSplaylits VALUES ('Tình Yêu','Admin')
SELECT * FROM Baihat 
SELECT * FROM Baihat WHERE title LIKE N'%Ra Khỏi%'
SELECT * FROM DSplaylits
UPDATE Baihat SET albumArtUrl='5.jfif' WHERE id='6'
SELECT * FROM Baihat WHERE title LIKE'%H%'
SELECT * FROM playlits
Select count (*) from Nguoidung WHERE Taikhoan='Admin'and Matkhau='Admin'
delete from playlits where id='6';

select * from Baihat Where Danhmuc='HayNhat'
select * from Baihat Where Danhmuc='NhacMoi'
SELECT * FROM playlits WHERE Taikhoan='Admin'
SELECT  playlits.idlist,Baihat.id,Baihat.title,Baihat.artist,Baihat.albumArtUrl,Baihat.audioUrl FROM playlits,Baihat WHERE playlits.Taikhoan='Chien' and playlits.id=Baihat.id
