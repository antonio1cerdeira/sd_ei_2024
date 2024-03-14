DROP TABLE RECLAMACAO_FEEDBACK;
DROP TABLE RECLAMACAO;

CREATE TABLE "RECLAMACAO" (
    id_reclamacao      NUMBER(6) NOT NULL,
    data_rec_in DATE,
    data_rec_out DATE,
    tipo_reclamacao    VARCHAR2(50),
    status_rec         VARCHAR2(10),
    prioridade         VARCHAR2(10),
    descricao_rec      VARCHAR2(100),
    fk_rec_resposta    NUMBER(6) NOT NULL,
    data_rec_out       DATE
);

ALTER TABLE "RECLAMACAO" ADD CONSTRAINT "Feedback_PK" PRIMARY KEY ( id_reclamacao );

CREATE TABLE "RECLAMACAO_FEEDBACK" (
    id_rec_resposta NUMBER(6) NOT NULL,
    descricao          VARCHAR2(100),
    palvr_chave   VARCHAR2(25)
);

ALTER TABLE "RECLAMACAO_FEEDBACK" ADD CONSTRAINT "response_feedback_pk" PRIMARY KEY ( id_rec_resposta );
 COMMIT;

CREATE SEQUENCE criacao_id;

CREATE OR REPLACE PROCEDURE INSERE_TABELA_EXTRA, AS
    v_id_seq NUMBER;
BEGIN 
    SELECT criacao_id.NEXTVAL INTO v_id_seq FROM dual;
    INSERT INTO RECLAMACAO_FEEDBACK (id_rec_resposta, descricao, palvr_chave)
    VALUES (v_id_seq, dbms_random.string('u', 20), 'Exelente');
    
    SELECT criacao_id.NEXTVAL INTO v_id_seq FROM dual;
    INSERT INTO RECLAMACAO_FEEDBACK (id_rec_resposta, descricao, palvr_chave)
    VALUES (v_id_seq, dbms_random.string('u', 20), 'Bom');
    
    SELECT criacao_id.NEXTVAL INTO v_id_seq FROM dual;
    INSERT INTO RECLAMACAO_FEEDBACK (id_rec_resposta, descricao, palvr_chave)
    VALUES (v_id_seq, dbms_random.string('u', 20), 'Divino');
    
    SELECT criacao_id.NEXTVAL INTO v_id_seq FROM dual;
    INSERT INTO RECLAMACAO_FEEDBACK (id_rec_resposta, descricao, palvr_chave)
    VALUES (v_id_seq, dbms_random.string('u', 20), 'Admiravel');
    
    SELECT criacao_id.NEXTVAL INTO v_id_seq FROM dual;
    INSERT INTO RECLAMACAO_FEEDBACK (id_rec_resposta, descricao, palvr_chave)
    VALUES (v_id_seq, dbms_random.string('u', 20), 'Excepcional');
    
    SELECT criacao_id.NEXTVAL INTO v_id_seq FROM dual;
    INSERT INTO RECLAMACAO_FEEDBACK (id_rec_resposta, descricao, palvr_chave)
    VALUES (v_id_seq, dbms_random.string('u', 20), 'Surpreendente');
END;
/
BEGIN
INSERE_TABELA_EXTRA();
COMMIT; 
END;
 SELECT * FROM 
 RECLAMACAO_FEEDBACK;

CREATE OR REPLACE PROCEDURE DELETE_TABELA_EXTRA AS
BEGIN
    DELETE FROM RECLAMACAO_FEEDBACK;
END;
/
BEGIN
    DELETE_TABELA_EXTRA(); 
    COMMIT; 
END;
/