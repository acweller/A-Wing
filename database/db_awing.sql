-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 17/04/2019 às 17:28
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
-- Estrutura para tabela `personagem`
--

DROP TABLE IF EXISTS `personagem`;
CREATE TABLE `personagem` (
  `cod_personagem` int(11) NOT NULL COMMENT 'Código do personagem',
  `nom_personagem` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nome do personagem Star Wars',
  `descricao` varchar(3000) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descrição sobre o personagem',
  `datahora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Data e Hora da última modificação'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Personagens da saga Star Wars';

-- --------------------------------------------------------

--
-- Estrutura para tabela `starship`
--

DROP TABLE IF EXISTS `starship`;
CREATE TABLE `starship` (
  `cod_starship` int(11) NOT NULL COMMENT 'Código da nave',
  `cod_type` int(11) NOT NULL COMMENT 'Tipo de nave',
  `nom_starship` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nome da nave',
  `descricao` varchar(3000) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descrição da nave',
  `datahora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Data e Hora de ultima atualização'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Naves utilizadas no universo Star Wars';

-- --------------------------------------------------------

--
-- Estrutura para tabela `starship_pilot`
--

DROP TABLE IF EXISTS `starship_pilot`;
CREATE TABLE `starship_pilot` (
  `cod_personagem` int(11) NOT NULL COMMENT 'Chave do Personagem',
  `cod_starship` int(11) NOT NULL COMMENT 'Chave da Nave Pilotada',
  `descricao` varchar(3000) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descrição sobre desse piloto dessa nave',
  `datahora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Data e Hora da última modificação'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `starship_type`
--

DROP TABLE IF EXISTS `starship_type`;
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
-- Índices de tabela `personagem`
--
ALTER TABLE `personagem`
  ADD PRIMARY KEY (`cod_personagem`);

--
-- Índices de tabela `starship`
--
ALTER TABLE `starship`
  ADD PRIMARY KEY (`cod_starship`),
  ADD KEY `cod_type` (`cod_type`);

--
-- Índices de tabela `starship_pilot`
--
ALTER TABLE `starship_pilot`
  ADD KEY `cod_personagem` (`cod_personagem`),
  ADD KEY `cod_starship` (`cod_starship`);

--
-- Índices de tabela `starship_type`
--
ALTER TABLE `starship_type`
  ADD PRIMARY KEY (`cod_type`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `personagem`
--
ALTER TABLE `personagem`
  MODIFY `cod_personagem` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Código do personagem';
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

--
-- Restrições para tabelas `starship_pilot`
--
ALTER TABLE `starship_pilot`
  ADD CONSTRAINT `FK_PILOT_PERSONAGEM` FOREIGN KEY (`cod_personagem`) REFERENCES `personagem` (`cod_personagem`),
  ADD CONSTRAINT `FK_PILOT_STARSHIP` FOREIGN KEY (`cod_starship`) REFERENCES `starship` (`cod_starship`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
