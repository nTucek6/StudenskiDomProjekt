-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 28, 2022 at 04:10 PM
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
-- Database: `vuv_faks`
--

-- --------------------------------------------------------

--
-- Table structure for table `dodatnipodacistudent`
--

DROP TABLE IF EXISTS `dodatnipodacistudent`;
CREATE TABLE IF NOT EXISTS `dodatnipodacistudent` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudentId` int(11) NOT NULL,
  `Adresa` varchar(50) NOT NULL,
  `PBR` int(11) NOT NULL,
  `Grad` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dodatnipodacistudent`
--

INSERT INTO `dodatnipodacistudent` (`Id`, `StudentId`, `Adresa`, `PBR`, `Grad`) VALUES
(1, 1, 'Zagrađe 48', 34310, 'Požega'),
(2, 2, 'Ulica Josipa Jelačića 11', 43500, 'Daruvar'),
(3, 3, ' Zajčeva 2', 21000, 'Split'),
(4, 4, 'Trg V. Lisinskog 3', 31000, 'Osijek'),
(5, 5, 'Vinkovačka 3', 31000, 'Osijek'),
(6, 6, 'Trg pobjede 3', 35000, 'Slavonski Brod'),
(7, 7, 'Ulica Vladana Desnice 68', 77184, 'Supetar '),
(8, 8, 'Osječka ulica 81', 53312, 'Obrovac'),
(9, 9, 'Ulica Petra Drapšina 49', 65769, 'Bjelovar'),
(10, 10, 'Ulica Ivana Milutinovića 38', 36360, 'Buzet '),
(11, 11, 'Ulica Frana Krste Frankopana 36', 67027, 'Crikvenica');

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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `studentbodovi`
--

INSERT INTO `studentbodovi` (`Id`, `StudentId`, `BrojBodova`) VALUES
(1, 1, 1548),
(2, 2, 1900),
(3, 3, 1200),
(4, 4, 1350),
(5, 5, 1850),
(6, 6, 900),
(7, 7, 1025),
(8, 8, 1545),
(9, 9, 1375),
(10, 10, 1650),
(11, 11, 1537);

-- --------------------------------------------------------

--
-- Table structure for table `studenti`
--

DROP TABLE IF EXISTS `studenti`;
CREATE TABLE IF NOT EXISTS `studenti` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Ime` varchar(50) NOT NULL,
  `Prezime` varchar(50) NOT NULL,
  `Spol` varchar(1) NOT NULL,
  `JMBAG` varchar(10) DEFAULT NULL,
  `OIB` varchar(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `studenti`
--

INSERT INTO `studenti` (`Id`, `Ime`, `Prezime`, `Spol`, `JMBAG`, `OIB`) VALUES
(1, 'Toni', 'Crnković', 'M', '0307017584', '11604164810'),
(2, 'Dominik', 'Menčik', 'M', '0307017082', '02504215829'),
(3, 'Lana', 'Bogdanović', 'F', '0307017138', '03090171073'),
(4, 'Manuela', 'Pavić', 'F', '0307017605', '08858903235'),
(5, 'Patrik', 'Grgić', 'M', '0307017478', '07845704958'),
(6, 'Katja', 'Bogdanić', 'F', '0307017369', '10466940639'),
(7, 'Bruno', 'Kasun', 'M', '0307017267', '32950472560'),
(8, 'Jelena', 'Mandžukić', 'F', '0307018753', '66800908559'),
(9, 'Andrea', 'Vuka', 'F', '0307017759', '69111386081'),
(10, 'Patricia', 'Filipović', 'F', '0307018451', '91105256592'),
(11, 'Antonija', 'Franjić', 'F', '0307018508', '98710844308');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
