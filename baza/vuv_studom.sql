-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 29, 2022 at 10:24 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vuv_studom`
--

-- --------------------------------------------------------

--
-- Table structure for table `administrator`
--

DROP TABLE IF EXISTS `administrator`;
CREATE TABLE IF NOT EXISTS `administrator` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Lozinka` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `administrator`
--

INSERT INTO `administrator` (`Id`, `Email`, `Lozinka`) VALUES
(1, 'voditelj@pin.hr', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `dodatnipodacistudent`
--

DROP TABLE IF EXISTS `dodatnipodacistudent`;
CREATE TABLE IF NOT EXISTS `dodatnipodacistudent` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudentId` int(11) NOT NULL,
  `Adresa` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `PBR` int(5) NOT NULL,
  `Grad` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `dodatnipodacistudent`
--

INSERT INTO `dodatnipodacistudent` (`Id`, `StudentId`, `Adresa`, `PBR`, `Grad`) VALUES
(1, 1, 'Bjelovarska ulica 187', 43500, 'Donji Daruvar'),
(2, 2, 'Mate Lovraka 12', 43293, 'Velik Zdenci'),
(3, 3, 'A. Starčevića 4', 32100, 'Vinkovci'),
(4, 4, ' Radnička 26', 40305, 'Nedelišće'),
(5, 9, 'Zagrađe 48', 34310, 'Požega'),
(6, 10, 'Ulica Josipa Jelačića 11', 43500, 'Daruvar'),
(9, 13, ' Zajčeva 2', 21000, 'Split'),
(10, 14, 'Trg V. Lisinskog 3', 31000, 'Osijek'),
(11, 15, 'Ulica Miladina Popovića 50', 83994, 'Osijek'),
(12, 16, 'Ulica Doža Đerđa 69', 94757, 'Slunj'),
(13, 17, 'Ulica Branka Gavelle 40', 26729, 'Lipik'),
(14, 18, 'Ulica Ankice Dobrokes 14', 74879, 'Rovinj'),
(15, 19, 'Ulica Matije Antuna Relkovića 21', 66326, 'Omiš'),
(16, 20, 'Bračka ulica 61', 25620, 'Čakovec'),
(17, 21, 'Partizanska ulica 73', 62003, 'Biograd na Moru'),
(18, 22, 'Grobljanska ulica 81', 67754, 'Gospić'),
(19, 23, 'Ulica Šandora Petefija 34', 55892, 'Đurđevac '),
(20, 24, 'Ulica Vuka Stefanovića Karadžića 56', 56950, 'Vodnjan '),
(21, 25, 'Ulica Aranji Janoša 11', 11850, 'Kaštela'),
(22, 26, 'Ulica Borisa Kidriča 46', 24457, 'Poreč'),
(23, 27, 'Ulica Frana Krste Frankopana 47', 67005, 'Vis '),
(24, 28, 'Ulica Dore Pejačević 31', 69405, 'Buje'),
(25, 29, 'Šećeranska ulica 80', 4949, 'Gospić'),
(26, 30, 'Ulica Marka Oreškovića 67', 48629, 'Slatina'),
(27, 31, 'Ulica Biljske satnije ZNH RH 34', 39943, 'Crikvenica'),
(28, 32, 'Ulica Josipa Runjanina 78', 43730, 'Otok'),
(29, 33, 'Baranjska ulica 22', 93049, 'Kaštela'),
(30, 34, 'Ulica Branka Radičevića 88', 43795, 'Supetar'),
(31, 35, 'Ulica kardinala Franje Šefera 55', 16919, 'Sveti Ivan Zelina'),
(32, 36, 'Ulica Toldi Ferenca 61', 59110, 'Velika Gorica'),
(33, 37, 'Baranjska ulica 63', 63976, 'Omiš'),
(34, 38, 'Ulica 30. svibnja 72', 53467, 'Virovitica'),
(35, 39, 'Ulica dr Franje Tuđmana 66', 70463, 'Petrinja'),
(36, 40, 'Ulica Sare Bertić 22', 94658, 'Glina'),
(37, 41, 'Sunčana ulica 83', 61429, 'Kutjevo'),
(38, 42, 'Daljok 30', 36353, 'Zadar'),
(39, 43, 'Mirna ulica 88', 91114, 'Rab'),
(40, 44, 'Kruševačka ulica 78', 79926, 'Biograd na Moru'),
(41, 45, 'Ribarska ulica 97', 22927, 'Grubišno Polje'),
(42, 46, 'Ulica Eugena Kvaternika 25', 56400, 'Koprivnica'),
(43, 47, 'Trg Josipa bana Jelačića 47', 74744, 'Zaprešić'),
(44, 48, 'Partizanska ulica 47', 10951, 'Dugo Selo'),
(45, 49, 'Ulica Svetozara Miletića 93', 99356, 'Koprivnica'),
(46, 50, 'Ulica Svetozara Miletića 53', 4118, 'Vrgorac'),
(47, 51, 'Ulica Franje Račkoga 81', 29344, 'Vrbovec '),
(48, 52, 'Savska ulica 20', 45521, 'Pakrac'),
(49, 53, 'Ulica 30. svibnja 47', 64691, 'Knin'),
(50, 54, 'Ulica hrvatskih branitelja 81', 23670, 'Valpovo'),
(51, 55, 'Kolodvorska ulica 38', 89282, 'Delnice'),
(52, 56, 'Batina jug 82', 38983, 'Valpovo '),
(53, 57, 'Ulica Dositeja Obradovića 34', 31157, 'Beli Manastir '),
(54, 58, 'Vinkovačka 3', 31000, 'Osijek'),
(55, 59, 'Trg pobjede 3', 35000, 'Slavonski Brod'),
(56, 60, 'Osječka ulica 81', 53312, 'Obrovac'),
(57, 61, 'Ulica Petra Drapšina 49', 65769, 'Bjelovar'),
(58, 62, 'Ulica Ivana Milutinovića 38', 36360, 'Buzet '),
(59, 63, 'Ulica Frana Krste Frankopana 36', 67027, 'Crikvenica'),
(60, 64, 'Ulica Tina Ujevića 97', 49914, 'Kutjevo '),
(61, 65, 'Ulica Eugena Savojskog 85', 81331, 'Kutina ');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Lozinka` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `StudentId` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=72 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`Id`, `Email`, `Lozinka`, `StudentId`) VALUES
(1, 'dorian.mlinar@vuv.hr', 'dodiplay', 1),
(2, 'nikola.tucek@vuv.hr', '54321', 2),
(3, 'mirta.domovic@vuv.hr', '2345', 3),
(4, 'helena.jerbic@vuv.hr', '1122', 4),
(5, 'leonardo.sirac@vuv.hr', '2211', 5),
(6, 'oto.zadro@vuv.hr', 'feder', 6),
(7, 'marko.lipusic@vuv.hr', '987', 7),
(15, 'toni.crnkovic@vuv.hr', '55544332', 9),
(16, 'dominik.mencik@vuv.hr', '0987', 10),
(19, 'lana.bogdanovic@vuv.hr', 'lana123', 13),
(20, 'manuela.pavic@vuv.hr', 'manpav12', 14),
(21, 'emanuel.ivanovic1@vuv.hr', 'emoGuy', 15),
(22, 'duje.milic@vuv.hr', 'duje123', 16),
(23, 'ante.tomic@vuv.hr', 'tomici2', 17),
(24, 'martina.klosar@vuv.hr', 'klosar123', 18),
(25, 'josipa.pavletic@vuv.hr', 'jojoBizzar', 19),
(26, 'dunja.dragovic@vuv.hr', 'dunja123', 20),
(27, 'mihael.vinkovic@vuv.hr', 'mihael25', 21),
(28, 'andrea.abramovic@vuv.hr', 'andre3xa', 22),
(29, 'dorotea.filipovic@vuv.hr', 'doraIstrazuje', 23),
(30, 'ilija.markovic@vuv.hr', 'ilijamarkov', 24),
(31, 'ema.pavic@vuv.hr', 'emapava', 25),
(32, 'dorotea.vuka@vuv.hr', 'BadWolf', 26),
(33, 'sime.zoric@vuv.hr', 'simezoric', 27),
(34, 'vanessa.kenzevic@vuv.hr', 'vanessaic', 28),
(35, 'mila.zupan@vuv.hr', 'milakunis', 29),
(36, 'eva.juric@vuv.hr', 'evajekriva', 30),
(37, 'matea.modric@vuv.hr', 'zabigol', 31),
(38, 'ela.kovacic@vuv.hr', 'willsmithsmithwill', 32),
(39, 'korina.horvatincic@vuv.hr', 'kolac', 33),
(40, 'andrej.pavic@vuv.hr', '5dZJfs', 34),
(41, 'stjepan.grgic@vuv.hr', 'Rd375G', 35),
(42, 'aleksandar.nikolic@vuv.hr', 'Vy2WTh', 36),
(43, 'marina.srna@vuv.hr', 'sQJf6R', 37),
(44, 'stella.pavletic@vuv.hr', 'csXH37', 38),
(45, 'aleksandar.ivanovic@vuv.hr', 'pQJw5W', 39),
(46, 'lea.vlasic12@vuv.hr', 'Pp6vsu', 40),
(47, 'maja.pavcic13@vuv.hr', 'Ar27kR', 41),
(48, 'nela.sudar54@vuv.hr', 'V34YpH', 42),
(49, 'david.modric57@vuv.hr', 'nCDa5v', 43),
(50, 'ana.zupan1@vuv.hr', 'T3yYxc', 44),
(51, 'rafael.tomcic@vuv.hr', 'w6fmPE', 45),
(52, 'jure.kranjcar@vuv.hr', 'aMhF2L', 46),
(53, 'bartol.antic@vuv.hr', 'KrZu8e', 47),
(54, 'dominik.zoric@vuv.hr', '62Vrj8', 48),
(55, 'mihael.corluka@vuv.hr', '6LxsXV', 49),
(56, 'danijel.mlakar@vuv.hr', '7Hjw83', 50),
(57, 'eva.lovren@vuv.hr', 'q9RJEP', 51),
(58, 'karlo.ivanovic@vuv.hr', 'r9PsFy', 52),
(59, 'karlo.blazevic@vuv.hr', 'vgt3J3', 53),
(60, 'matko.zoric@vuv.hr', '2PHnMe', 54),
(61, 'simuc.radic@vuv.hr', 'B5tRxV', 55),
(62, 'benjamin.horvat@vuv.hr', 'ZMec3F', 56),
(63, 'sven.bozic@vuv.hr', 't4JZBt', 57),
(64, 'patrik.grgic@vuv.hr', 'Kcne2m', 58),
(65, 'katja.bogdanovic@vuv.hr', 'CeUL2p', 59),
(66, 'jelena.mandzukic@vuv.hr', 'x6Xmgx', 60),
(67, 'andrea.vuka@vuv.hr', 'r2CunH', 61),
(68, 'patricia.filipovic@vuv.hr', '1i9JdJ', 62),
(69, 'antonija.franjic@vuv.hr', 'xDrw4U', 63),
(70, 'martina.knezevic@vuv.hr', 'hjN8uj', 64),
(71, 'josipa.perkovic@vuv.hr', 'd94MCG', 65);

-- --------------------------------------------------------

--
-- Table structure for table `sobakomentar`
--

DROP TABLE IF EXISTS `sobakomentar`;
CREATE TABLE IF NOT EXISTS `sobakomentar` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `SobaId` int(11) NOT NULL,
  `Komentar` varchar(254) COLLATE utf8_unicode_ci NOT NULL,
  `Vlasnik` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `VlasnikId` int(11) NOT NULL,
  `VrijemeUnosa` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sobakomentar`
--

INSERT INTO `sobakomentar` (`Id`, `SobaId`, `Komentar`, `Vlasnik`, `VlasnikId`, `VrijemeUnosa`) VALUES
(14, 3, 'Najčišća soba u domu.', 'Voditelj', 1, '21-6-2022 12:30:43'),
(15, 4, 'Noge mu zaudaraju!!!', 'Voditelj', 1, '22-6-2022 11:25:06'),
(16, 4, 'Nije istina!', 'Student', 1, '22-6-2022 17:05:54'),
(19, 3, 'Hvala. :)', 'Student', 4, '21-6-2022 17:35:00'),
(24, 3, 'Stanje dalje odlično!', 'Voditelj', 1, '25-6-2022 19:15:21'),
(25, 4, 'Student samo leži u krevetu!', 'Voditelj', 1, '25-6-2022 09:05:01'),
(26, 4, 'Hodam na faks!', 'Student', 1, '25-6-2022 20:55:34'),
(30, 3, 'Hvala :)', 'Student', 3, '28-6-2022 1:41:14'),
(31, 4, 'Student je popravio ponašanje.', 'Voditelj', 1, '28-6-2022 9:0:27'),
(32, 4, 'Nikad nisam ni bio loš.', 'Student', 1, '28-6-2022 9:4:0');

-- --------------------------------------------------------

--
-- Table structure for table `sobe`
--

DROP TABLE IF EXISTS `sobe`;
CREATE TABLE IF NOT EXISTS `sobe` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `BrojSobe` int(3) NOT NULL,
  `Kat` int(1) NOT NULL,
  `BrojMjesta` int(1) NOT NULL,
  `Tip` varchar(1) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sobe`
--

INSERT INTO `sobe` (`Id`, `BrojSobe`, `Kat`, `BrojMjesta`, `Tip`) VALUES
(1, 100, 0, 2, 'B'),
(2, 101, 0, 1, 'A'),
(3, 102, 0, 2, 'B'),
(4, 103, 0, 1, 'A'),
(5, 104, 0, 2, 'B'),
(6, 105, 0, 1, 'A'),
(7, 106, 0, 2, 'C'),
(8, 107, 0, 2, 'C'),
(9, 108, 0, 2, 'C'),
(10, 109, 0, 2, 'C'),
(11, 110, 0, 2, 'C'),
(12, 111, 0, 2, 'C'),
(13, 112, 0, 2, 'C'),
(14, 113, 0, 2, 'C'),
(15, 114, 0, 2, 'C'),
(16, 115, 0, 2, 'C'),
(17, 116, 0, 2, 'C'),
(18, 117, 0, 2, 'C'),
(19, 118, 0, 2, 'C'),
(20, 119, 0, 2, 'C'),
(21, 120, 0, 2, 'C'),
(22, 200, 1, 2, 'C'),
(23, 201, 1, 2, 'C'),
(24, 202, 1, 2, 'C'),
(25, 203, 1, 2, 'C'),
(26, 204, 1, 2, 'C'),
(27, 205, 1, 2, 'C'),
(28, 206, 1, 2, 'C'),
(29, 207, 1, 2, 'C'),
(30, 208, 1, 2, 'C'),
(31, 209, 1, 2, 'C'),
(32, 210, 1, 2, 'C');

-- --------------------------------------------------------

--
-- Table structure for table `stanarinastudenti`
--

DROP TABLE IF EXISTS `stanarinastudenti`;
CREATE TABLE IF NOT EXISTS `stanarinastudenti` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudentId` int(11) NOT NULL,
  `Iznos` decimal(10,2) NOT NULL,
  `DatumUplate` date NOT NULL,
  `Placeno` tinyint(4) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `stanarinastudenti`
--

INSERT INTO `stanarinastudenti` (`Id`, `StudentId`, `Iznos`, `DatumUplate`, `Placeno`) VALUES
(1, 1, '400.00', '2021-10-06', 1),
(2, 1, '400.00', '2021-11-10', 1),
(3, 1, '400.00', '2021-12-02', 1),
(4, 1, '400.00', '2022-01-12', 1),
(5, 1, '400.00', '2022-02-07', 1),
(6, 1, '400.00', '2022-03-04', 1),
(7, 1, '400.00', '2022-04-05', 1),
(8, 1, '400.00', '2022-05-03', 1),
(9, 1, '400.00', '2022-06-11', 1),
(10, 2, '400.00', '2021-10-06', 1),
(11, 2, '400.00', '2021-11-10', 1),
(12, 2, '400.00', '2021-12-02', 1),
(13, 2, '400.00', '2022-01-12', 1),
(14, 2, '400.00', '2022-02-07', 1),
(15, 2, '400.00', '2022-03-04', 1),
(16, 2, '400.00', '2022-04-05', 1),
(17, 2, '400.00', '2022-05-03', 1),
(18, 2, '400.00', '2022-06-11', 0);

-- --------------------------------------------------------

--
-- Table structure for table `studentbodovi`
--

DROP TABLE IF EXISTS `studentbodovi`;
CREATE TABLE IF NOT EXISTS `studentbodovi` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudentId` int(11) NOT NULL,
  `BrojBodova` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `studentbodovi`
--

INSERT INTO `studentbodovi` (`Id`, `StudentId`, `BrojBodova`) VALUES
(13, 9, 1548),
(14, 10, 1900),
(17, 13, 1200),
(18, 14, 1350),
(19, 58, 1850),
(20, 59, 900),
(21, 60, 1545),
(22, 61, 1375),
(23, 62, 1650),
(24, 63, 1537),
(25, 64, 1026),
(26, 65, 1769);

-- --------------------------------------------------------

--
-- Table structure for table `studenti`
--

DROP TABLE IF EXISTS `studenti`;
CREATE TABLE IF NOT EXISTS `studenti` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Ime` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Prezime` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Spol` varchar(1) COLLATE utf8_unicode_ci NOT NULL,
  `JMBAG` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `OIB` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `Upisan` tinyint(1) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=66 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `studenti`
--

INSERT INTO `studenti` (`Id`, `Ime`, `Prezime`, `Spol`, `JMBAG`, `OIB`, `Upisan`) VALUES
(1, 'Dorian Prekrasni', 'Mlinar', 'M', '0307017410', '19729590208', 1),
(2, 'Nikola', 'Tuček', 'M', '0307018033', '52522624886', 1),
(3, 'Mirta', 'Domović', 'F', '0307017256', '82814929959', 1),
(4, 'Helena ', 'Jerbić', 'F', '0307017255', '29519637965', 1),
(5, 'Leonardo', 'Širac', 'M', '0307017653', '33395652209', 1),
(6, 'Oto', 'Zadro', 'M', '0307017245', '52089767872', 1),
(7, 'Marko', 'Lipušić', 'M', '0307017781', '07380194833', 1),
(9, 'Toni', 'Crnković', 'M', '0307017584', '11604164810', 1),
(10, 'Dominik', 'Menčik', 'M', '0307017082', '02504215829', 1),
(13, 'Lana', 'Bogdanović', 'F', '0307017138', '03090171073', 1),
(14, 'Manuela', 'Pavić', 'F', '0307017605', '08858903235', 1),
(15, 'Emanuel', 'Ivanović', 'M', '0307017843', '77306000741', 1),
(16, 'Duje', 'Milić', 'M', '0307017241', '43216804353', 1),
(17, 'Ante', 'Tomić', 'M', '0307017892', '93424255407', 1),
(18, 'Martina', 'Klošar ', 'F', '0307017629', '83178393085', 1),
(19, 'Josipa ', 'Pavletić', 'F', '0307018778', '28424216328', 1),
(20, 'Dunja', 'Dragović', 'F', '0307017756', '71138995003', 1),
(21, 'Mihael', 'Vinković', 'M', '0307017345', '51350217638', 1),
(22, 'Andrea', 'Abramović', 'F', '0307017616', '91512972546', 1),
(23, 'Dorotea', 'Filipović', 'F', '0307017553', '73351644291', 1),
(24, 'Ilija', 'Marković', 'M', '0307017969', '94088094681', 1),
(25, 'Ema', 'Pavić', 'F', '0307018049', '02081342923', 1),
(26, 'Dorotea', 'Vuka', 'F', '0307017171', '95703468609', 1),
(27, 'Šime', 'Zorić', 'M', '0307018438', '88757061310', 1),
(28, 'Vanessa', 'Knežević', 'F', '0307018559', '10600686517', 1),
(29, 'Mila', 'Župan', 'F', '0307017008', '25751078116', 1),
(30, 'Eva', 'Jurić', 'F', '0307018300', '54322066313', 1),
(31, 'Matea', 'Modrić', 'F', '0307018932', '94947138613', 1),
(32, 'Ela', 'Kovačić', 'F', '0307018209', '47532826966', 1),
(33, 'Korina', 'Horvatinčić', 'F', '0307018892', '03567275304', 1),
(34, 'Andrej', 'Pavić', 'M', '0307018998', '37362148666', 1),
(35, 'Stjepan', 'Grgić', 'M', '0307018013', '33273614748', 1),
(36, 'Aleksandar', 'Nikolić', 'M', '0307018454', '08685748255', 1),
(37, 'Marina', 'Srna', 'F', '0307017303', '37810640565', 1),
(38, 'Stella', 'Pavletić', 'F', '0307018559', '84677666713', 1),
(39, 'Aleksandar', 'Ivanović', 'M', '0307017742', '93513031090', 1),
(40, 'Lea', 'Vlašić', 'F', '0307018334', '70970766993', 1),
(41, 'Maja', 'Pavić', 'F', '0307018993', '42229755646', 1),
(42, 'Nela', 'Sudar', 'F', '0307018822', '01345294058', 1),
(43, 'David', 'Modrić', 'M', '0307018967', '54067006934', 1),
(44, 'Ana', 'Župan', 'F', '0307017597', '48328707438', 1),
(45, 'Rafael', 'Tomčić', 'M', '0307018008', '79485714005', 1),
(46, 'Jure', 'Kranjčar', 'M', '0307017582', '95276700041', 1),
(47, 'Bartol', 'Antić', 'M', '0307017166', '44770831896', 1),
(48, 'Dominik', 'Zorić', 'M', '0307017698', '52535534062', 1),
(49, 'Mihael', 'Ćorluka', 'M', '0307018484', '43892375016', 1),
(50, 'Danijel', 'Mlakar', 'M', '0307017433', '89664356966', 1),
(51, 'Eva', 'Lovren', 'F', '0307018999', '77695020304', 1),
(52, 'Karlo', 'Ivanović', 'M', '0307017653', '61458782641', 1),
(53, 'Karlo', 'Blažević', 'M', '0307017988', '06210123519', 1),
(54, 'Matko', 'Zorić', 'M', '0307018266', '98627875158', 1),
(55, 'Šimun', 'Radić', 'M', '0307017327', '13199633490', 1),
(56, 'Benjamin', 'Horvat', 'M', '0307017461', '30808310774', 1),
(57, 'Sven', 'Božić', 'M', '0307017003', '89239867772', 1),
(58, 'Patrik', 'Grgić', 'M', '0307017478', '07845704958', 1),
(59, 'Katja', 'Bogdanić', 'F', '0307017369', '10466940639', 1),
(60, 'Jelena', 'Mandžukić', 'F', '0307018753', '66800908559', 1),
(61, 'Andrea', 'Vuka', 'F', '0307017759', '69111386081', 1),
(62, 'Patricia', 'Filipović', 'F', '0307018451', '91105256592', 1),
(63, 'Antonija', 'Franjić', 'F', '0307018508', '98710844308', 1),
(64, 'Martina', 'Knežević', 'F', '0307018385', '85343538477', 0),
(65, 'Josipa', 'Perković', 'F', '0307018045', '08693156709', 1);

-- --------------------------------------------------------

--
-- Table structure for table `studentposobi`
--

DROP TABLE IF EXISTS `studentposobi`;
CREATE TABLE IF NOT EXISTS `studentposobi` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `SobaId` int(11) NOT NULL,
  `StudentId` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=113 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `studentposobi`
--

INSERT INTO `studentposobi` (`Id`, `SobaId`, `StudentId`) VALUES
(19, 4, 1),
(28, 12, 7),
(34, 3, 3),
(60, 5, 18),
(54, 2, 9),
(61, 5, 19),
(43, 12, 2),
(56, 1, 14),
(55, 3, 4),
(48, 6, 10),
(73, 13, 16),
(72, 13, 15),
(59, 8, 17),
(62, 9, 5),
(63, 9, 6),
(64, 8, 21),
(65, 22, 20),
(66, 22, 22),
(67, 23, 23),
(68, 23, 25),
(69, 24, 26),
(70, 11, 24),
(71, 11, 27),
(74, 24, 28),
(75, 25, 29),
(76, 25, 30),
(77, 26, 31),
(78, 26, 32),
(79, 27, 33),
(80, 14, 34),
(81, 14, 35),
(82, 15, 36),
(83, 27, 37),
(84, 28, 38),
(85, 15, 39),
(86, 28, 40),
(93, 30, 42),
(92, 29, 41),
(89, 10, 43),
(90, 29, 44),
(91, 10, 45),
(94, 16, 46),
(95, 16, 47),
(96, 17, 48),
(97, 17, 49),
(98, 18, 50),
(99, 30, 51),
(100, 18, 52),
(101, 19, 53),
(102, 19, 54),
(103, 20, 55),
(104, 20, 56),
(105, 21, 57),
(106, 7, 60),
(107, 21, 58),
(108, 7, 59),
(109, 31, 61),
(110, 31, 62),
(111, 32, 63),
(112, 32, 65);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
