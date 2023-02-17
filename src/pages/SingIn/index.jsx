import { FiMail, FiLock} from "react-icons/fi";

import { Container, Form, Background} from "./styles";
import { Input } from "../../components/Input";
import {Button } from "../../components/Button";
import userImg from "../../assets/background.png"


export function SingIn() {
  return (
    <Container>
      <Form>
      <h1>Rocket Notes</h1>
      <p>Aplicação para salvar e gerenciar seus links úteis.</p>

      <h2>Faça seu login</h2>

      <Input 
      placeholder="E-mail"
      type="text"
      icon ={FiMail}
      ></Input>

      <Input 
      placeholder="Senha"
      type="password"
      icon = {FiLock}
      ></Input>
      <Button 
      title="Enviar">
      </Button>

      <a href="https://www.rocketseat.com.br/">Criar Conta</a>

      </Form>

    

      <Background>

      </Background>

    </Container>
  );
}
