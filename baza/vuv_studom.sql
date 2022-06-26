-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2022 at 01:02 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

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

CREATE TABLE `administrator` (
  `Id` int(11) NOT NULL,
  `Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Lozinka` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `administrator`
--

INSERT INTO `administrator` (`Id`, `Email`, `Lozinka`) VALUES
(1, 'voditelj@pin.hr', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `dodatnipodacistudent`
--

CREATE TABLE `dodatnipodacistudent` (
  `Id` int(11) NOT NULL,
  `StudentId` int(11) NOT NULL,
  `Adresa` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `PBR` int(5) NOT NULL,
  `Grad` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
(9, 13, ' Zajčeva 2', 21000, 'Split');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `Id` int(11) NOT NULL,
  `Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Lozinka` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `StudentId` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
(19, 'lana.bogdanovic@vuv.hr', 'lana123', 13);

-- --------------------------------------------------------

--
-- Table structure for table `sobakomentar`
--

CREATE TABLE `sobakomentar` (
  `Id` int(11) NOT NULL,
  `SobaId` int(11) NOT NULL,
  `Komentar` varchar(254) COLLATE utf8_unicode_ci NOT NULL,
  `Vlasnik` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `VlasnikId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sobakomentar`
--

INSERT INTO `sobakomentar` (`Id`, `SobaId`, `Komentar`, `Vlasnik`, `VlasnikId`) VALUES
(14, 3, 'Najčišća soba u domu.', 'Voditelj', 1),
(15, 4, 'Noge mu smrde!!!', 'Voditelj', 1),
(16, 4, 'Nije istina!', 'Student', 1),
(19, 3, 'Hvala. :)', 'Student', 4),
(23, 4, 'Sve ja znam!', 'Student', 1),
(24, 3, 'Stanje dalje odlično!', 'Voditelj', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sobe`
--

CREATE TABLE `sobe` (
  `Id` int(11) NOT NULL,
  `BrojSobe` int(3) NOT NULL,
  `Kat` int(1) NOT NULL,
  `BrojMjesta` int(1) NOT NULL,
  `Tip` varchar(1) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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

CREATE TABLE `stanarinastudenti` (
  `Id` int(11) NOT NULL,
  `StudentId` int(11) NOT NULL,
  `Iznos` decimal(10,2) NOT NULL,
  `DatumUplate` date NOT NULL,
  `Placeno` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `stanarinastudenti`
--

INSERT INTO `stanarinastudenti` (`Id`, `StudentId`, `Iznos`, `DatumUplate`, `Placeno`) VALUES
(1, 1, '400.00', '2021-10-06', 1),
(2, 1, '400.00', '2021-11-10', 0);

-- --------------------------------------------------------

--
-- Table structure for table `studentbodovi`
--

CREATE TABLE `studentbodovi` (
  `Id` int(11) NOT NULL,
  `StudentId` int(11) NOT NULL,
  `BrojBodova` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `studentbodovi`
--

INSERT INTO `studentbodovi` (`Id`, `StudentId`, `BrojBodova`) VALUES
(13, 9, 1548),
(14, 10, 1900),
(17, 13, 1200);

-- --------------------------------------------------------

--
-- Table structure for table `studenti`
--

CREATE TABLE `studenti` (
  `Id` int(11) NOT NULL,
  `Ime` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Prezime` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Spol` varchar(1) COLLATE utf8_unicode_ci NOT NULL,
  `JMBAG` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `OIB` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `Upisan` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `studenti`
--

INSERT INTO `studenti` (`Id`, `Ime`, `Prezime`, `Spol`, `JMBAG`, `OIB`, `Upisan`) VALUES
(1, 'Dorian', 'Mlinar', 'M', '0307017410', '19729590208', 1),
(2, 'Nikola', 'Tuček', 'M', '0307018033', '52522624886', 1),
(3, 'Mirta', 'Domović', 'F', '0307017256', '82814929959', 1),
(4, 'Helena ', 'Jerbić', 'F', '0307017255', '29519637965', 1),
(5, 'Leonardo', 'Širac', 'M', '0307017653', '33395652209', 1),
(6, 'Oto', 'Zadro', 'M', '0307017245', '52089767872', 1),
(7, 'Marko', 'Lipušić', 'M', '0307017781', '07380194833', 1),
(9, 'Toni', 'Crnković', 'M', '0307017584', '11604164810', 1),
(10, 'Dominik', 'Menčik', 'M', '0307017082', '02504215829', 1),
(13, 'Lana', 'Bogdanović', 'F', '0307017138', '03090171073', 0);

-- --------------------------------------------------------

--
-- Table structure for table `studentposobi`
--

CREATE TABLE `studentposobi` (
  `Id` int(11) NOT NULL,
  `SobaId` int(11) NOT NULL,
  `StudentId` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `studentposobi`
--

INSERT INTO `studentposobi` (`Id`, `SobaId`, `StudentId`) VALUES
(19, 4, 1),
(28, 12, 7),
(3, 3, 3),
(5, 5, 5),
(33, 3, 4),
(29, 5, 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrator`
--
ALTER TABLE `administrator`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `dodatnipodacistudent`
--
ALTER TABLE `dodatnipodacistudent`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `sobakomentar`
--
ALTER TABLE `sobakomentar`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `sobe`
--
ALTER TABLE `sobe`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `stanarinastudenti`
--
ALTER TABLE `stanarinastudenti`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `studentbodovi`
--
ALTER TABLE `studentbodovi`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `studenti`
--
ALTER TABLE `studenti`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `studentposobi`
--
ALTER TABLE `studentposobi`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `administrator`
--
ALTER TABLE `administrator`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `dodatnipodacistudent`
--
ALTER TABLE `dodatnipodacistudent`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `sobakomentar`
--
ALTER TABLE `sobakomentar`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `sobe`
--
ALTER TABLE `sobe`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `stanarinastudenti`
--
ALTER TABLE `stanarinastudenti`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `studentbodovi`
--
ALTER TABLE `studentbodovi`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `studenti`
--
ALTER TABLE `studenti`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `studentposobi`
--
ALTER TABLE `studentposobi`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
