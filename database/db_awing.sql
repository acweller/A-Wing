-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 16/04/2019 às 17:57
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
CREATE DATABASE [IF NOT EXISTS] db_awing CHARACTER SET utf8 COLLATE utf8_general_ci;

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
-- Índices de tabela `starship_type`
--
ALTER TABLE `starship_type`
  ADD PRIMARY KEY (`cod_type`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `starship_type`
--
ALTER TABLE `starship_type`
  MODIFY `cod_type` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Código auto-incrementado para o tipo de naves';
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
