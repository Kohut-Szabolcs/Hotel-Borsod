-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Már 28. 13:45
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `hotel`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalo`
--

CREATE TABLE `felhasznalo` (
  `id` int(11) NOT NULL,
  `TeljesNév` varchar(100) NOT NULL,
  `Telefonszám` varchar(15) NOT NULL,
  `SzületésiDátum` date NOT NULL,
  `SzületésiHely` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Jelszó` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `foglalas`
--

CREATE TABLE `foglalas` (
  `foglalas_id` int(11) NOT NULL,
  `bejelentkezes_datum` date NOT NULL,
  `kijelentkezes_datum` date NOT NULL,
  `szoba_id` int(11) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `hotel`
--

CREATE TABLE `hotel` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `hotel`
--

INSERT INTO `hotel` (`id`, `name`, `location`) VALUES
(1, 'Hotel Borsod', 'Kazinczy utca 35');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `szoba`
--

CREATE TABLE `szoba` (
  `szoba_id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `Ár` int(11) NOT NULL,
  `SzobaSzám` int(11) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `szoba`
--

INSERT INTO `szoba` (`szoba_id`, `type`, `Ár`, `SzobaSzám`) VALUES
(1, 'Alap', 35000, 101),
(2, 'Alap', 35000, 102),
(3, 'Alap', 35000, 103),
(4, 'Alap', 35000, 104),
(5, 'Alap', 35000, 105),
(6, 'Deluxe', 100000, 201),
(7, 'Deluxe', 100000, 202);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `szolgaltatas`
--

CREATE TABLE `szolgaltatas` (
  `szolgaltatas_id` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL,
  `ar` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `szolgaltatas`
--

INSERT INTO `szolgaltatas` (`szolgaltatas_id`, `nev`, `ar`) VALUES
(1, 'Welness központ', 30000),
(2, 'Úszómedence', 1000),
(3, 'Gourmet étterem', 12000),
(4, 'Sportolási lehetőségek', 5000),
(5, 'Konferenciaterem', 2000);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `felhasznalo`
--
ALTER TABLE `felhasznalo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- A tábla indexei `foglalas`
--
ALTER TABLE `foglalas`
  ADD PRIMARY KEY (`foglalas_id`),
  ADD KEY `szoba_id` (`szoba_id`);

--
-- A tábla indexei `hotel`
--
ALTER TABLE `hotel`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `szoba`
--
ALTER TABLE `szoba`
  ADD PRIMARY KEY (`szoba_id`);

--
-- A tábla indexei `szolgaltatas`
--
ALTER TABLE `szolgaltatas`
  ADD PRIMARY KEY (`szolgaltatas_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `felhasznalo`
--
ALTER TABLE `felhasznalo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `foglalas`
--
ALTER TABLE `foglalas`
  MODIFY `foglalas_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `hotel`
--
ALTER TABLE `hotel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `szoba`
--
ALTER TABLE `szoba`
  MODIFY `szoba_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT a táblához `szolgaltatas`
--
ALTER TABLE `szolgaltatas`
  MODIFY `szolgaltatas_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `foglalas`
--
ALTER TABLE `foglalas`
  ADD CONSTRAINT `foglalas_ibfk_1` FOREIGN KEY (`szoba_id`) REFERENCES `szoba` (`szoba_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
