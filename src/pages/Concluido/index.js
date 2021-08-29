import React from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styled';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Confirmacao() {
  const history = useHistory();

  function rota() {
    history.push('./');
  }

  return(
    <>
      <Header />
      <S.Container>
          <S.Content>
              <S.ContentFlex>
                  <S.H1>Enviado com sucesso!</S.H1>
                  <S.P>Seu cadastro foi realizado em nossa plataforma.</S.P>
                  <S.Button type="submit" onClick={rota}>Voltar</S.Button>
              </S.ContentFlex>
          </S.Content>
      </S.Container>
      <Footer />
  </>
  )
}

export default Confirmacao;