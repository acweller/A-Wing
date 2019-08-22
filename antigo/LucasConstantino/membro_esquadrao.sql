DROP TABLE IF EXISTS `membro_esquadrao`
CREATE TABLE IF NOT EXISTS `mydb`.`membro_esquadrao` (
  `cod_personagem` INT NOT NULL,
  `cod_esquadrao` INT NOT NULL,
  `descricao` VARCHAR(3000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datahora` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `fk_personagem_memb_idx` (`cod_personagem` ASC) VISIBLE,
  INDEX `fk_esquadrao_memb_idx` (`cod_esquadrao` ASC) VISIBLE,
  CONSTRAINT `fk_personagem_memb`
    FOREIGN KEY (`cod_personagem`)
    REFERENCES `mydb`.`personagem` (`cod_personagem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_esquadrao_memb`
    FOREIGN KEY (`cod_esquadrao`)
    REFERENCES `mydb`.`esquadrao` (`cod_esquadrao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)ENGINE = InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;