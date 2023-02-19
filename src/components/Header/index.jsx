import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
  <Container>
    <Profile to="/profile">
      <img src="https://github.com/vitorcaminha.png" alt="Foto do usuário" />
      <div>
        <span>Bem-vindo</span>
        <strong>Vitor Caminha</strong>
      </div>
    </Profile>
    {/* <button title="Voltar"></button> */}
    <Logout>
      <RiShutDownLine />
    </Logout>
    </Container>
  );
}
