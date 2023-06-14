-- MySQL Script generated by MySQL Workbench
-- Fri May  1 16:14:07 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema redime_prueba
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema redime_prueba
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `redime_prueba` DEFAULT CHARACTER SET utf8 ;
USE `redime_prueba` ;

-- -----------------------------------------------------
-- Table `redime_prueba`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `redime_prueba`.`categorias` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `estado` ENUM('ACTIVO', 'CANCELADO', 'ELIMINADO') NOT NULL DEFAULT 'ACTIVO',
  `nombre` VARCHAR(30) NOT NULL,
  `creado_a` TIMESTAMP NULL,
  `actualizado_a` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `redime_prueba`.`materiales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `redime_prueba`.`materiales` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `estado` ENUM('ACTIVO', 'CANCELADO', 'ELIMINADO') NOT NULL DEFAULT 'ACTIVO',
  `nombre` VARCHAR(50) NOT NULL,
  `descripcion` LONGTEXT NOT NULL,
  `stock_minimo` DECIMAL(10,2) NOT NULL,
  `categoria_id` INT(10) NOT NULL,
  `creado_a` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizado_a` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_materiales_categorias_idx` (`categoria_id` ASC),
  CONSTRAINT `fk_materiales_categorias`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `redime_prueba`.`categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;