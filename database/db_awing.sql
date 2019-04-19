-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 18/04/2019 às 20:34
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
-- Estrutura para tabela `esquadrao`
--

DROP TABLE IF EXISTS `esquadrao`;
CREATE TABLE `esquadrao` (
  `cod_esquadrao` int(11) NOT NULL COMMENT 'Código auto-incrementado para os esquadões StarWars',
  `nom_esquadrao` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Armazena o nome dos esquadrões apresentadas no Star Wars',
  `descricao` varchar(3000) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descrição dos esquadrões',
  `datahora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Data e Hora da última modificação'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Esquadrões conhecidos no universo Star Wars';

--
-- Tabela truncada antes do insert `esquadrao`
--

TRUNCATE TABLE `esquadrao`;
-- --------------------------------------------------------

--
-- Estrutura para tabela `membro_esquadrao`
--

DROP TABLE IF EXISTS `membro_esquadrao`;
CREATE TABLE `membro_esquadrao` (
  `cod_personagem` int(11) NOT NULL COMMENT 'Chave do Personagem',
  `cod_esquadrao` int(11) NOT NULL COMMENT 'Chave do Esquadrão',
  `descricao` varchar(3000) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descrição sobre o personagem neste esquadrão',
  `datahora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Data e Hora da última modificação'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Tabela truncada antes do insert `membro_esquadrao`
--

TRUNCATE TABLE `membro_esquadrao`;
-- --------------------------------------------------------

--
-- Estrutura para tabela `personagem`
--

DROP TABLE IF EXISTS `personagem`;
CREATE TABLE `personagem` (
  `cod_personagem` int(11) NOT NULL COMMENT 'Código do personagem',
  `nom_personagem` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nome do personagem Star Wars',
  `imagem` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Link para uma imagem do personagem',
  `descricao` varchar(3000) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descrição sobre o personagem',
  `datahora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Data e Hora da última modificação'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Personagens da saga Star Wars';

--
-- Tabela truncada antes do insert `personagem`
--

TRUNCATE TABLE `personagem`;
-- --------------------------------------------------------

--
-- Estrutura para tabela `starship`
--

DROP TABLE IF EXISTS `starship`;
CREATE TABLE `starship` (
  `cod_starship` int(11) NOT NULL COMMENT 'Código da nave',
  `cod_type` int(11) NOT NULL COMMENT 'Tipo de nave',
  `nom_starship` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nome da nave',
  `imagem` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Link para uma imagem da nave',
  `descricao` varchar(3000) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descrição da nave',
  `datahora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Data e Hora de ultima atualização'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Naves utilizadas no universo Star Wars';

--
-- Tabela truncada antes do insert `starship`
--

TRUNCATE TABLE `starship`;
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

--
-- Tabela truncada antes do insert `starship_pilot`
--

TRUNCATE TABLE `starship_pilot`;
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
-- Tabela truncada antes do insert `starship_type`
--

TRUNCATE TABLE `starship_type`;
--
-- Fazendo dump de dados para tabela `starship_type`
--

INSERT INTO `starship_type` (`cod_type`, `nom_type`, `descricao`, `datahora`) VALUES(1, 'A-Wing', 'With its sleek arrowhead shape, streamlined cockpit, and massive twin engines, the A-wing is faster than even the TIE interceptor.', '2019-04-18 23:03:05');
INSERT INTO `starship_type` (`cod_type`, `nom_type`, `descricao`, `datahora`) VALUES(2, 'Y-Wing', 'The Y-wing is a workhorse starfighter has been in use since the Clone Wars.', '2019-04-18 23:00:13');
INSERT INTO `starship_type` (`cod_type`, `nom_type`, `descricao`, `datahora`) VALUES(3, 'X-Wing', 'The X-wing is a versatile Rebel Alliance starfighter that balances speed with firepower.', '2019-04-18 22:58:41');
INSERT INTO `starship_type` (`cod_type`, `nom_type`, `descricao`, `datahora`) VALUES(4, 'YT-1300 Corellian', 'The Corellian YT-1300 was used as a freighter and transport, and some saw service as intermodal tugs in orbital freight yards.', '2019-04-18 23:06:49');
INSERT INTO `starship_type` (`cod_type`, `nom_type`, `descricao`, `datahora`) VALUES(7, 'Imperial Star Destroyer', 'The wedge-shaped Imperial I-class Star Destroyer had a length of 1,600 meters, and over 37,000 crew on board.', '2019-04-18 23:18:10');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `esquadrao`
--
ALTER TABLE `esquadrao`
  ADD PRIMARY KEY (`cod_esquadrao`);

--
-- Índices de tabela `membro_esquadrao`
--
ALTER TABLE `membro_esquadrao`
  ADD KEY `cod_personagem` (`cod_personagem`),
  ADD KEY `cod_esquadrao` (`cod_esquadrao`),
  ADD KEY `cod_personagem_2` (`cod_personagem`),
  ADD KEY `cod_esquadrao_2` (`cod_esquadrao`);

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
-- AUTO_INCREMENT de tabela `esquadrao`
--
ALTER TABLE `esquadrao`
  MODIFY `cod_esquadrao` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Código auto-incrementado para os esquadões StarWars';
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
  MODIFY `cod_type` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Código auto-incrementado para o tipo de naves', AUTO_INCREMENT=8;
--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `membro_esquadrao`
--
ALTER TABLE `membro_esquadrao`
  ADD CONSTRAINT `FK_MEMBRO_ESQUADRAO` FOREIGN KEY (`cod_esquadrao`) REFERENCES `esquadrao` (`cod_esquadrao`),
  ADD CONSTRAINT `FK_MEMBRO_PERSONAGEM` FOREIGN KEY (`cod_personagem`) REFERENCES `personagem` (`cod_personagem`);

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
