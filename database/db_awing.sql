-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 17/04/2019 às 17:05
-- Versão do servidor: 5.7.25-1
-- Versão do PHP: 7.3.3-1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_awing`
--
CREATE DATABASE IF NOT EXISTS `db_awing` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `db_awing`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `starship`
--

CREATE TABLE `starship` (
  `cod_starship` int(11) NOT NULL COMMENT 'Código da nave',
  `cod_type` int(11) NOT NULL COMMENT 'Tipo de nave',
  `nom_starship` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nome da nave',
  `descricao` varchar(3000) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descrição da nave',
  `datahora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Data e Hora de ultima atualização'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Naves utilizadas no universo Star Wars';

-- --------------------------------------------------------

--
-- Estrutura para tabela `starship_type`
--

CREATE TABLE `starship_type` (
  `cod_type` int(11) NOT NULL COMMENT 'Código auto-incrementado para o tipo de naves',
  `nom_type` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Armazena o nome dos tipos de nave apresentadas no Star Wars',
  `descricao` varchar(3000) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descrição da Nave',
  `datahora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Data e Hora da última modificação'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Tipos de naves utilizadas no universo Star Wars';

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `starship`
--
ALTER TABLE `starship`
  ADD PRIMARY KEY (`cod_starship`),
  ADD KEY `cod_type` (`cod_type`);

--
-- Índices de tabela `starship_type`
--
ALTER TABLE `starship_type`
  ADD PRIMARY KEY (`cod_type`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `starship`
--
ALTER TABLE `starship`
  MODIFY `cod_starship` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Código da nave';
--
-- AUTO_INCREMENT de tabela `starship_type`
--
ALTER TABLE `starship_type`
  MODIFY `cod_type` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Código auto-incrementado para o tipo de naves';
--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `starship`
--
ALTER TABLE `starship`
  ADD CONSTRAINT `starship_ibfk_1` FOREIGN KEY (`cod_type`) REFERENCES `starship_type` (`cod_type`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
