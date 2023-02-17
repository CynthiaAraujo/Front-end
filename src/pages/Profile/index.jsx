import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="">
          <FiArrowLeft></FiArrowLeft>
        </a>
      </header>
      <Form>
        <Avatar>
        <img src="https://github.com/vitorcaminha.png" alt="User Photo" />
        <label htmlFor="avatar">
        <FiCamera></FiCamera>
        <input id="avatar" type="file" />
        </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser}></Input>
        <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
        <Input placeholder="Senha Atual" type="password" icon={FiLock}></Input>
        <Input placeholder="Nova  Senha" type="password" icon={FiLock}></Input>
        <Button title="Salvar"></Button>
      </Form>
    </Container>
  );
}
