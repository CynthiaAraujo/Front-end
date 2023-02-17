import { FiUser, FiMail, FiLock } from "react-icons/fi";

import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import userImg from "../../assets/background.png";

export function SingUp() {
  return (
    <Container>
      <Background></Background>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser}></Input>

        <Input placeholder="E-mail" type="text" icon={FiMail}></Input>

        <Input placeholder="Senha" type="password" icon={FiLock}></Input>
        <Button title="Cadastrar"></Button>

        <a href="https://www.rocketseat.com.br/">Voltar para o login</a>
      </Form>
    </Container>
  );
}
