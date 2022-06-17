-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2022 at 06:47 PM
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
-- Database: `vuv_faks`
--

-- --------------------------------------------------------

--
-- Table structure for table `dodatnipodacistudent`
--

CREATE TABLE `dodatnipodacistudent` (
  `Id` int(11) NOT NULL,
  `StudentId` int(11) NOT NULL,
  `Adresa` varchar(50) NOT NULL,
  `PBR` int(11) NOT NULL,
  `Grad` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dodatnipodacistudent`
--

INSERT INTO `dodatnipodacistudent` (`Id`, `StudentId`, `Adresa`, `PBR`, `Grad`) VALUES
(1, 1, 'Zagrađe 48', 34310, 'Požega'),
(2, 2, 'Ulica Josipa Jelačića 11', 43500, 'Daruvar');

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
(1, 1, 1548),
(2, 2, 1900);

-- --------------------------------------------------------

--
-- Table structure for table `studenti`
--

CREATE TABLE `studenti` (
  `Id` int(11) NOT NULL,
  `Ime` varchar(50) NOT NULL,
  `Prezime` varchar(50) NOT NULL,
  `Spol` varchar(1) NOT NULL,
  `JMBAG` varchar(10) DEFAULT NULL,
  `OIB` varchar(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `studenti`
--

INSERT INTO `studenti` (`Id`, `Ime`, `Prezime`, `Spol`, `JMBAG`, `OIB`) VALUES
(1, 'Toni', 'Crnković', 'M', '0307017584', '11604164810'),
(2, 'Dominik', 'Menčik', 'M', '0307017082', '02504215829');

-- --------------------------------------------------------

--
-- Table structure for table `studentipodacistudij`
--

CREATE TABLE `studentipodacistudij` (
  `Id` int(11) NOT NULL,
  `StudentId` int(11) NOT NULL,
  `GodinaStudija` int(1) NOT NULL,
  `OstvareniECTS` int(4) NOT NULL,
  `ProsjekOcjena` decimal(10,2) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dodatnipodacistudent`
--
ALTER TABLE `dodatnipodacistudent`
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
-- Indexes for table `studentipodacistudij`
--
ALTER TABLE `studentipodacistudij`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dodatnipodacistudent`
--
ALTER TABLE `dodatnipodacistudent`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `studentbodovi`
--
ALTER TABLE `studentbodovi`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `studenti`
--
ALTER TABLE `studenti`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `studentipodacistudij`
--
ALTER TABLE `studentipodacistudij`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
