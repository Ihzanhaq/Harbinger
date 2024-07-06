-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 06, 2024 at 08:21 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `desserts`
--

CREATE TABLE `desserts` (
  `id` varchar(10) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `paragraph` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `desserts`
--

INSERT INTO `desserts` (`id`, `title`, `price`, `paragraph`) VALUES
('0050', 'Chewy Beets roasted & dehydrated', 1748.95, 'coconut & lime leaf dressing, rice chips, cilantro oil'),
('0051', 'Fingerling Potato nam prik pao', 3456.65, 'melted leeks, pickled mushroom, bonito espuma'),
('0052', 'Shrimp & Crab mandu dumplings', 2134.46, 'coconut lemongrass, spicy prawn oil'),
('0053', 'Bacon & Brussel okonomiyaki', 2345.35, 'soy poached egg, yuzu aioli, bulldog sauce'),
('0054', 'Ember Roasted Beet tortellini', 2346.85, 'house made ricotta, yuzu kosho beurre blanc, blood orange supremes'),
('0055', 'Farm Carrots, Memories From Vietnam', 4875.89, 'soured carrot, house-made lemongrass sausage, crispy garlic, cilantro'),
('0056', 'Sablefish steamed in banana leaf', 3215.45, 'umami butter, roasted mushroom broth, glass noodles, rau ram'),
('0057', 'Wagyu Skirt Steak shaking beef', 3460.00, 'charred alliums, roasted broccoli, vietnamese dipping sauce'),
('0058', 'Fried Chicken southern Thai style', 4321.05, 'winter root vegetable mash, crispy brussels, nyony dipping sauce'),
('0059', 'FORESTIERE EN PAPILLOTE', 1654.23, 'white asparagus, spring vegetables, white verjus'),
('0060', 'HALIBUT EN MOUSSELINE', 5416.78, 'caraway, brussels sprouts, artichoke barigoule'),
('0061', 'SPRING LAMB', 2345.15, 'green garlic persillade, ramp, spring onion soubise'),
('0062', 'DRY-AGED CROWN OF DUCK', 1245.76, 'swiss chard, parsnip, soppressata jam'),
('0063', 'Grilled Shrimp tom yum', 4567.87, 'shellfish emulsion, thai herbs, pickled fresno chili'),
('0064', 'PRIME CÔTE DE BOEUF', 2345.26, 'baby lettuces, olive oil frites, maple hollandaise');

-- --------------------------------------------------------

--
-- Table structure for table `drinks`
--

CREATE TABLE `drinks` (
  `id` varchar(10) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `paragraph` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `drinks`
--

INSERT INTO `drinks` (`id`, `title`, `price`, `paragraph`) VALUES
('0051', 'NAKED & FAMOUS', 560.90, 'mezcal, yellow chartreuse, aperol, lime'),
('0052', 'THE AVENUE', 765.76, 'bourbon, calvados, passionfruit, grenadine'),
('0053', 'PALOMA', 976.99, 'blanco tequila, grapefruit, lime, soda, salt'),
('0054', 'PINK LADY', 2260.43, 'Barr hill gin, lemon, grenadine, lavender, egg white'),
('0055', 'SAZERAC', 2340.00, 'bache-gabrielson cognac, absinthe, peychaud’s bitters'),
('0056', 'DRY CIDER', 1980.26, 'Graft Farm Flor, New York'),
('0057', 'TSOLIKOURI', 2679.75, '2019 Mshvenieradze Winery, Imereti, GE'),
('0058', 'DUNKEL LAGER', 899.89, 'Von trapp, Vermont'),
('0059', 'PILSNER', 1567.87, 'Rothaus Tannenzäpfle, Germany'),
('0060', 'PINOT NOIR', 2456.95, '2017 Nicolas Rossignol, Burgundy, FR');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `name`, `message`, `created_at`) VALUES
(2, 'Ihzan', 'Good Food', '2024-06-16 11:24:12'),
(4, 'Haq123', 'Hii', '2024-06-30 17:37:20');

-- --------------------------------------------------------

--
-- Table structure for table `mains`
--

CREATE TABLE `mains` (
  `id` varchar(10) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `paragraph` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mains`
--

INSERT INTO `mains` (`id`, `title`, `price`, `paragraph`) VALUES
('0030', 'Chewy Beets roasted & dehydrated', 1748.95, 'coconut & lime leaf dressing, rice chips, cilantro oil'),
('0031', 'Fingerling Potato nam prik pao', 3456.65, 'melted leeks, pickled mushroom, bonito espuma'),
('0032', 'Shrimp & Crab mandu dumplings', 2134.46, 'coconut lemongrass, spicy prawn oil'),
('0033', 'Bacon & Brussel okonomiyaki', 2345.35, 'soy poached egg, yuzu aioli, bulldog sauce'),
('0034', 'Ember Roasted Beet tortellini', 2346.85, 'house made ricotta, yuzu kosho beurre blanc, blood orange supremes'),
('0035', 'Farm Carrots, Memories From Vietnam', 4875.89, 'soured carrot, house-made lemongrass sausage, crispy garlic, cilantro'),
('0036', 'Sablefish steamed in banana leaf', 3215.45, 'umami butter, roasted mushroom broth, glass noodles, rau ram'),
('0037', 'Wagyu Skirt Steak shaking beef', 3460.00, 'charred alliums, roasted broccoli, vietnamese dipping sauce'),
('0038', 'Fried Chicken southern Thai style', 4321.05, 'winter root vegetable mash, crispy brussels, nyony dipping sauce'),
('0039', 'FORESTIERE EN PAPILLOTE', 1654.23, 'white asparagus, spring vegetables, white verjus'),
('0040', 'HALIBUT EN MOUSSELINE', 5416.78, 'caraway, brussels sprouts, artichoke barigoule'),
('0041', 'SPRING LAMB', 2345.15, 'green garlic persillade, ramp, spring onion soubise'),
('0042', 'DRY-AGED CROWN OF DUCK', 1245.76, 'swiss chard, parsnip, soppressata jam'),
('0043', 'Grilled Shrimp tom yum', 4567.87, 'shellfish emulsion, thai herbs, pickled fresno chili'),
('0044', 'PRIME CÔTE DE BOEUF', 2345.26, 'baby lettuces, olive oil frites, maple hollandaise');

-- --------------------------------------------------------

--
-- Table structure for table `pasta`
--

CREATE TABLE `pasta` (
  `id` varchar(10) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `paragraph` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pasta`
--

INSERT INTO `pasta` (`id`, `title`, `price`, `paragraph`) VALUES
('0012', 'Rigatoni alla Vodka', 18.00, 'Creamy vodka sauce, pancetta, Parmesan'),
('0013', 'Spaghetti Carbonara', 20.45, 'Eggs, pancetta, black pepper, Pecorino Romano cheese'),
('0014', 'Penne Arrabbiata', 16.95, 'Spicy tomato sauce, garlic, red pepper flakes, basil'),
('0015', 'Linguine alle Vongole', 24.92, 'Clams, garlic, white wine, parsley'),
('0016', 'Fettuccine Alfredo', 22.28, 'Creamy Alfredo sauce, Parmesan, black pepper'),
('0017', 'Lasagna Bolognese', 30.18, 'Layers of pasta, Bolognese sauce, ricotta, mozzarella'),
('0018', 'Pappardelle with Wild Mushroom', 28.66, 'Wild mushrooms, garlic, thyme, cream sauce'),
('0019', 'Orecchiette with Broccoli Rabe', 25.15, 'Broccoli rabe, garlic, chili flakes, olive oil'),
('0020', 'Gnocchi Gorgonzola', 26.55, 'Gorgonzola cream sauce, walnuts, sage'),
('0021', 'Penne all\'Arrabbiata', 34.12, 'Spicy tomato sauce, garlic, red pepper flakes'),
('0022', 'Ravioli Ricotta e Spinaci', 32.55, 'Ricotta cheese, spinach, marinara sauce'),
('0023', 'Tagliatelle al Tartufo', 38.12, 'Truffle cream sauce, Parmesan cheese, chives');

-- --------------------------------------------------------

--
-- Table structure for table `pending_reservations`
--

CREATE TABLE `pending_reservations` (
  `id` int(11) NOT NULL,
  `num` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `request` text DEFAULT NULL,
  `status` varchar(20) DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pending_reservations`
--

INSERT INTO `pending_reservations` (`id`, `num`, `date`, `time`, `name`, `phone`, `request`, `status`) VALUES
(15, 2, '2024-07-03', '01:34:00', 'User123', '1234567890', 'Nothung', 'declined');

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(10) NOT NULL,
  `num` int(10) NOT NULL,
  `date` varchar(20) NOT NULL,
  `time` varchar(20) NOT NULL,
  `name` varchar(25) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `request` text NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `num`, `date`, `time`, `name`, `phone`, `request`, `status`) VALUES
(12, 2, '2024-06-22', '03:04:00', 'Sasss', '1234567890', 'dddas', ''),
(66, 2, '2024-06-22 00:00:00.', '12:44:00', 'dsaa', '1234567890', 'saddas', '');

-- --------------------------------------------------------

--
-- Table structure for table `snacks`
--

CREATE TABLE `snacks` (
  `id` varchar(10) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `paragraph` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `snacks`
--

INSERT INTO `snacks` (`id`, `title`, `price`, `paragraph`) VALUES
('00012', 'Sweet Potato banh bao', 876.00, 'crispy shallots, red curry, calamansi'),
('00015', 'Duck Confit on crispy potato', 3256.92, 'pickled mustard seed, grilled romaine, harby sauce'),
('0013', 'Pork Secreto satay', 1233.45, 'sweet & sour cucumber, turmeric pickled carrot'),
('0014', 'Egg Roll vietnamese peanut sauce', 1940.95, 'vermicelli, shitake, nappa cabbage, carrot'),
('0016', 'Malaysian Pickled Eggplant grilled roti', 965.28, 'cilantro, raita'),
('0017', 'TRUFFLE MALAI MUSHROOM', 1235.18, 'Ricotta, Wild Mushroom Medley'),
('0018', 'ROMAN ARMY SOURDOUGH', 1750.65, 'sunflower spread, whipped lardo'),
('0019', 'CRUDITÉS', 2255.47, 'green garlic-pepita'),
('0020', 'SOUFFLE CAKES', 1567.46, 'seaweed butter, green meyer lemon, caviar'),
('0021', 'FAVA BEAN BOMBOLONI', 2456.92, 'pecorino fonduta, pancetta pepato, preserved truffle'),
('0023', 'DUCK MORTADELLA', 897.28, 'brioche, pistachio mustard'),
('0024', 'FOIE GRAS CANELE', 789.18, 'earl grey, prune, armagnac');

-- --------------------------------------------------------

--
-- Table structure for table `starters`
--

CREATE TABLE `starters` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `paragraph` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `starters`
--

INSERT INTO `starters` (`id`, `title`, `price`, `paragraph`) VALUES
(1, 'AVOCADO PAPDI CHAAT', 175.95, 'Masala Guacamole, Crispy Toro Chips'),
(2, 'BENGALI BEET CHOP', 225.45, 'Roasted Red Beet Croquettes, Kasundi Mayo'),
(3, 'KERALA FRIED CHICKEN', 190.95, 'Southern Spiced Boneless Crispy Fried Chicken, Curry Leaves'),
(4, 'SHRIMP KOLIWADA', 325.92, 'Popcorn-Style Fritters, Pickled Mango Sauce'),
(5, 'OLD DELHI CHAAT', 260.28, 'Slow Cooked Chickpeas, Smashed Potato Turnovers, Yogurt, Chutneys'),
(6, 'MUMBAI VADA PAV', 480.18, 'Spiced Potato Patty, Garlic Chutney, Homemade Buns'),
(7, 'MARKET SALAD', 578.66, 'variations, black olive, creamy italian'),
(8, 'STEELHEAD TROUT', 634.95, 'trumpet, dill, vermouth, bottarga'),
(9, 'GREEN ASPARAGUS', 483.15, 'colatura, spring lettuces, parmesan frico'),
(10, 'CARPACCIO', 336.55, 'wagyu, maitake, worcestershire'),
(11, 'SPANISH DUCK CHORIZO', 634.12, 'patatas bravas, duck ham sofrito');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'Haq123', 'haq123'),
(58, 'User123', 'user123'),
(59, 'User123', 'user123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `desserts`
--
ALTER TABLE `desserts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `drinks`
--
ALTER TABLE `drinks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mains`
--
ALTER TABLE `mains`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pasta`
--
ALTER TABLE `pasta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pending_reservations`
--
ALTER TABLE `pending_reservations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `snacks`
--
ALTER TABLE `snacks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `starters`
--
ALTER TABLE `starters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pending_reservations`
--
ALTER TABLE `pending_reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `starters`
--
ALTER TABLE `starters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
