import React, { useState } from 'react';
import axios from 'axios';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import * as S from './styled';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Formulario(props) {
  const history = useHistory();

  const [ nome, setNome ] = useState("");
  const [ cargo, setCargo ] = useState("");
  const [ dataNascimento, setDataNascimento ] = useState("");
  const [ estadoCivil, setEstadoCivil ] = useState("");
  const [ genero, setGenero ] = useState("");
  const [ cep, setCep ] = useState("");
  const [ logradouro, setLogradouro ] = useState();
  const [ numero, setNumero ] = useState("");
  const [ complemento, setComplemento ] = useState("");
  const [ bairro, setBairro ] = useState();
  const [ cidade, setCidade ] = useState();
  const [ estado, setEstado ] = useState();
  const [ telefone, setTelefone ] = useState("");
  const [ celular, setCelular ] = useState("");
  const [ contato, setContato ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ identidade, setIdentidade ] = useState("");
  const [ cpf, setCpf ] = useState("");
  const [ possuiHabilitacao, setPossuiHabilitacao ] = useState("");
  const [ possuiVeiculo, setPossuiVeiculo ] = useState("");
  
  const [erro, setErro] = useState(false);

  function preencheCEP(e) {
    const cep = e.target.value;
    setCep(cep);

    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(res => {
        let dados = res.data;
        setLogradouro(dados.logradouro);
        setBairro(dados.bairro);
        setCidade(dados.localidade);
        setEstado(dados.uf);

        setErro(false);
      }).catch(err => {
        setErro(true);
      });
  }

  async function handleSubmit() {
    let dadosForm = {
      nome: nome,
      cargo: cargo,
      dataNascimento: dataNascimento,
      estadoCivil: estadoCivil,
      genero: genero,
      logradouro: logradouro, 
      numero: numero, 
      complemento: complemento, 
      bairro: bairro, 
      cidade: cidade, 
      estado: estado, 
      cep: cep, 
      contato: contato, 
      telefone: telefone, 
      celular: celular, 
      email:email,
      identidade: identidade,
      cpf: cpf,
      possuiVeiculo: possuiVeiculo,
      possuiHabilitacao: possuiHabilitacao,
    }
    
    if(cpf!=="" && dataNascimento!=="" && cep!=="" && logradouro!=="" && numero!=="" 
      && bairro!=="" && cidade!=="" && email!=="" && cargo!=="" && celular!=="") {
        
          // const res = await api.post('/api/candidatos', dadosForm);
          // if(res.status === 400) {
          //     alert('CPF já existe.');
          // } else if(res.status === 200) {
                history.push('./concluido');
          // } else {
          //       alert('Ocorreu um erro ao cadastrar no servidor, tente novamente!');
          // }  
    } else {
        alert('Por favor, preencha todos os dados!');
    }
  }

  return (
    <>
      <Header />

      <S.Container>
        <S.ContentForm>
        <form>
          <S.H1>Cadastre-se</S.H1>
          
          <S.ContentFlex>
              <S.Content>
                  <S.Label>Nome Completo:</S.Label>
                  <S.InputLarge type="text" placeholder="Nome Completo"  
                    value={nome} onChange={(e) => setNome(e.target.value)} />
              </S.Content>
          </S.ContentFlex>

          <S.ContentFlex>
              <S.Content>
                  <S.Label>Cargo:</S.Label>
                  <S.InputLarge type="text" placeholder="Cargo" 
                  value={cargo} onChange={(e) => setCargo(e.target.value)} />
              </S.Content>
            
          </S.ContentFlex>

          <S.ContentFlex>
              <S.Content>
                  <S.Label>Data de Nascimento:</S.Label>
                  <S.Input type="date" placeholder="dd/mm/aaaa" 
                    value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
              </S.Content>

              <S.Content>
                  <S.Label>Estado Civil:</S.Label>
                    <S.Select value={estadoCivil} onChange={(e) => setEstadoCivil(e.target.value)}>
                      <option value="solteiro">Solteiro(a)</option>
                      <option value="casado">Casado(a)</option>
                      <option value="divorciado">Divorciado(a)</option>
                      <option value="viuvo">Viúvo(a)</option>
                      <option value="separado">Separado(a)</option>
                    </S.Select>
              </S.Content>
            </S.ContentFlex>

            <S.ContentFlex>
                <S.Content>
                    <S.Label>Gênero:</S.Label>
                    <S.Select value={genero} onChange={(e) => setGenero(e.target.value)}>
                      <option value="Homem Cis">Homem Cis</option>
                      <option value="Mulher Cis">Mulher Cis</option>
                      <option value="Homem Trans">Homem Trans</option>
                      <option value="Mulher Trans">Mulher Trans</option>
                      <option value="Não Binário">Não Binário</option>
                      <option value="Intersexo">Intersexo</option>
                    </S.Select>
                </S.Content>

                <S.Content>
                    <S.Label>CEP:</S.Label>
                    <S.Input type="text" placeholder="00000-000"  value={cep} onChange={preencheCEP} />
                </S.Content>
            </S.ContentFlex>

            <S.ContentFlex>
                <S.Content>
                    <S.Label>Logradouro:</S.Label>
                    <S.InputLarge type="text" readOnly value={logradouro} />
                </S.Content>
            </S.ContentFlex>

          <S.ContentFlex>
              <S.Content>
                  <S.Label>Número:</S.Label>
                  <S.Input type="text" placeholder="Nº" 
                    value={numero} onChange={(e) => setNumero(e.target.value)} />
              </S.Content>
            
              <S.Content>
                  <S.Label>Complemento:</S.Label>
                  <S.Input type="text" placeholder="Bloco, Apto, Casa"
                    value={complemento} onChange={(e) => setComplemento(e.target.value)} />
              </S.Content>
          </S.ContentFlex>

          <S.ContentFlex>
              <S.Content>
                  <S.Label>Bairro:</S.Label>
                  <S.Input type="text" readOnly value={bairro} />
              </S.Content>
              
              <S.Content>
                  <S.Label>Cidade:</S.Label>
                  <S.Input type="text" readOnly value={cidade} />
              </S.Content>
          </S.ContentFlex> 

          <S.ContentFlex>
              <S.Content>
                  <S.Label>UF:</S.Label>
                  <S.Input type="text" readOnly value={estado} />
              </S.Content>

              <S.Content>
                  <S.Label>Celular:</S.Label>
                  <S.Input type="text" placeholder="21 99999-9999" 
                    value={celular} onChange={(e) => setCelular(e.target.value)} />
              </S.Content>    
          </S.ContentFlex>

          <S.ContentFlex> 
              <S.Content>
                  <S.Label>Telefone Fixo:</S.Label>
                  <S.Input type="text" placeholder="21 2345-6789"
                    value={contato} onChange={(e) => setContato(e.target.value)} />
              </S.Content>
              
              <S.Content>
                  <S.Label>Telefone Contato:</S.Label>
                  <S.Input type="text" placeholder="21 2345-6789"
                  value={telefone} onChange={(e) => setTelefone(e.target.value)} />
              </S.Content>    
          </S.ContentFlex>

          <S.ContentFlex>
              <S.Content>
                  <S.Label>E-mail:</S.Label>
                  <S.InputLarge type="email" placeholder="email@email.com" 
                    value={email} onChange={(e) => setEmail(e.target.value)} />
              </S.Content>
          </S.ContentFlex>

          <S.ContentFlex>
              <S.Content>
                  <S.Label>Identidade:</S.Label>
                  <S.Input type="text" placeholder="RG"
                    value={identidade} onChange={(e) => setIdentidade(e.target.value)} />
              </S.Content>

              <S.Content>
                  <S.Label>CPF:</S.Label>
                  <S.Input type="text" placeholder="000.000.00-00" 
                  value={cpf} onChange={(e) => setCpf(e.target.value)} />
              </S.Content>
          </S.ContentFlex>

          <S.ContentFlex>
            <S.Content>
                  <S.Label>Habilitação:</S.Label>
                  <S.Select value={possuiHabilitacao} onChange={(e) => setPossuiHabilitacao(e.target.value)}>
                      <option value="Sim">Sim</option>
                      <option value="Não">Não</option>
                  </S.Select>
              </S.Content>

              <S.Content>
                  <S.Label>Veículo:</S.Label>
                  <S.Select value={possuiVeiculo} onChange={(e) => setPossuiVeiculo(e.target.value)}>
                      <option value="Sim">Sim</option>
                      <option value="Não">Não</option>
                  </S.Select>
              </S.Content>
          </S.ContentFlex>

          <S.Button type="submit" onClick={handleSubmit}>Enviar</S.Button>

          { erro ? <S.ErrorMsg>Ocorreu um erro, tente novamente.</S.ErrorMsg> : '' }
        </form>
        </S.ContentForm>
      </S.Container>

      <Footer />
    </>
  );
}

export default Formulario;