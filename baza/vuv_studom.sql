-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 06, 2022 at 06:40 PM
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
  `Email` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Lozinka` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

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
  `Adresa` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `PBR` int(5) NOT NULL,
  `Grad` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `dodatnipodacistudent`
--

INSERT INTO `dodatnipodacistudent` (`Id`, `StudentId`, `Adresa`, `PBR`, `Grad`) VALUES
(1, 1, 'Bjelovarska ulica 187', 43500, 'Donji Daruvar'),
(2, 2, 'Mate Lovraka 12', 43293, 'Velik Zdenci'),
(3, 3, 'A. Starčevića 4', 32100, 'Vinkovci'),
(4, 4, ' Radnička 26', 40305, 'Nedelišće');

-- --------------------------------------------------------

--
-- Table structure for table `listacekanja`
--

DROP TABLE IF EXISTS `listacekanja`;
CREATE TABLE IF NOT EXISTS `listacekanja` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudentId` int(11) NOT NULL,
  `BrojBodova` float NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Lozinka` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `StudentId` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`Id`, `Email`, `Lozinka`, `StudentId`) VALUES
(1, 'dorian.mlinar@vuv.hr', 'dodiplay', 1),
(2, 'nikola.tucek@vuv.hr', '54321', 2);

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
  `Tip` varchar(1) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `sobe`
--

INSERT INTO `sobe` (`Id`, `BrojSobe`, `Kat`, `BrojMjesta`, `Tip`) VALUES
(1, 100, 0, 2, 'C'),
(2, 101, 0, 1, 'A'),
(3, 102, 0, 2, 'B'),
(4, 103, 0, 1, 'A'),
(5, 104, 0, 2, 'B'),
(6, 105, 0, 1, 'A'),
(7, 106, 0, 2, 'C'),
(8, 107, 0, 2, 'C'),
(9, 108, 0, 2, 'C'),
(10, 109, 0, 2, 'C'),
(11, 110, 1, 2, 'C'),
(12, 111, 1, 2, 'C'),
(13, 112, 1, 2, 'C'),
(14, 113, 1, 2, 'C'),
(15, 114, 1, 2, 'C'),
(16, 115, 1, 2, 'C'),
(17, 116, 1, 2, 'C'),
(18, 117, 1, 2, 'C'),
(19, 118, 1, 2, 'C'),
(20, 119, 1, 2, 'C');

-- --------------------------------------------------------

--
-- Table structure for table `studenti`
--

DROP TABLE IF EXISTS `studenti`;
CREATE TABLE IF NOT EXISTS `studenti` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Ime` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Prezime` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Spol` varchar(1) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `JMBAG` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `OIB` varchar(11) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `studenti`
--

INSERT INTO `studenti` (`Id`, `Ime`, `Prezime`, `Spol`, `JMBAG`, `OIB`) VALUES
(1, 'Dorian', 'Mlinar', 'M', '0307017410', '19729590208'),
(2, 'Nikola', 'Tuček', 'M', '0307018033', '52522624886'),
(3, 'Mirta', 'Domović', 'F', '0307017256', '82814929959'),
(4, 'Helena ', 'Jerbić', 'F', '0307017255', '29519637965'),
(5, 'Leonardo', 'Sirac', 'M', '0307017653', '33395652209');

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
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `studentposobi`
--

INSERT INTO `studentposobi` (`Id`, `SobaId`, `StudentId`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 3, 3),
(4, 3, 4);

-- --------------------------------------------------------

--
-- Table structure for table `upisanistudenti`
--

DROP TABLE IF EXISTS `upisanistudenti`;
CREATE TABLE IF NOT EXISTS `upisanistudenti` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudentId` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
