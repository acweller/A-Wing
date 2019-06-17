CREATE DATABASE squadleds;
CREATE TABLE `esquadrao` (
  `cod_esquadrao` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY 'Código auto-incrementado para os esquadões StarWars',
  `nom_esquadrao` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Armazena o nome dos esquadrões apresentadas no Star Wars',
  `descricao` varchar(3000) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descrição dos esquadrões',
  `datahora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Data e Hora da última modificação'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Esquadrões conhecidos no universo Star Wars';

--
-- Tabela truncada antes do insert `esquadrao`
--

TRUNCATE TABLE `esquadrao`;
DESCRIBE esquadrao;
 

