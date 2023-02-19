import { FiPlus, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Brand, Menu, Search, Content, NewNotes } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header></Header>
      <Menu>
        <li>
          <ButtonText title="Todos" isActive></ButtonText>
        </li>
        <li>
          <ButtonText title="Frontend"></ButtonText>
        </li>
        <li>
          <ButtonText title="Node"></ButtonText>
        </li>
        <li>
          <ButtonText title="React"></ButtonText>
        </li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}></Input>
      </Search>
      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React Modal",
              tags: [
                { id: "1", name: "React" },
                { id: "2", name: "NodeJs" },
              ],
            }}
          ></Note>
          
          <Note
            data={{
              title: "Exemplo de Middleware",
              tags: [
                { id: "3", name: "Express" },
                { id: "2", name: "NodeJs" },
              ],
            }}
          ></Note>
        </Section>
      </Content>
      <NewNotes to="/New">
        <FiPlus></FiPlus>
        Criar nota
      </NewNotes>

    </Container>
  );
}
