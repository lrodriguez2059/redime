-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-06-2023 a las 08:32:12
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
 

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `redime_prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(10) NOT NULL,
  `estado` enum('ACTIVO','CANCELADO','ELIMINADO') NOT NULL DEFAULT 'ACTIVO',
  `nombre` varchar(30) NOT NULL,
  `creado_a` timestamp NULL DEFAULT NULL,
  `actualizado_a` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `estado`, `nombre`, `creado_a`, `actualizado_a`) VALUES
(1, 'ACTIVO', 'tecnologia', NULL, NULL),
(2, 'ACTIVO', 'dd345', NULL, NULL),
(3, 'ACTIVO', 'dd345', NULL, NULL),
(4, 'ACTIVO', 'animales', NULL, NULL),
(5, 'ACTIVO', 'test', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materiales`
--

CREATE TABLE `materiales` (
  `id` int(10) NOT NULL,
  `estado` enum('ACTIVO','CANCELADO','ELIMINADO') NOT NULL DEFAULT 'ACTIVO',
  `nombre` varchar(50) NOT NULL,
  `descripcion` longtext NOT NULL,
  `stock_minimo` decimal(10,2) NOT NULL,
  `categoria_id` int(10) NOT NULL,
  `creado_a` timestamp NULL DEFAULT current_timestamp(),
  `actualizado_a` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `materiales`
--

INSERT INTO `materiales` (`id`, `estado`, `nombre`, `descripcion`, `stock_minimo`, `categoria_id`, `creado_a`, `actualizado_a`) VALUES
(3, 'CANCELADO', 'Multimetro4', 'Prueba', '11.98', 1, '2023-06-14 03:15:44', '2023-06-14 10:58:56'),
(5, 'ACTIVO', 'dd345', 'lorem ipsum2amaflafmaf', '9.00', 1, '2023-06-14 10:14:47', '2023-06-14 10:14:47'),
(6, 'ACTIVO', 'test', 'afaff2', '11.98', 1, '2023-06-14 10:17:09', '2023-06-14 11:24:28');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `materiales`
--
ALTER TABLE `materiales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_materiales_categorias_idx` (`categoria_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `materiales`
--
ALTER TABLE `materiales`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `materiales`
--
ALTER TABLE `materiales`
  ADD CONSTRAINT `fk_materiales_categorias` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
