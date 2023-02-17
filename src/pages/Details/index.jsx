import { Container, Links, Content } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir a nota"></ButtonText>

          <h1>Introdução ao React</h1>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            labore sint, accusantium nisi omnis rerum repellendus, numquam
            deleniti at delectus amet suscipit quasi maxime vel quibusdam
            obcaecati. Laboriosam, laborum architecto!
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://www.rocketseat.com.br/" target={"_blank"}>
                  https://www.rocketseat.com.br/
                </a>
              </li>
              <li>
                <a href="https://www.rocketseat.com.br/" target={"_blank"}>
                  https://www.rocketseat.com.br/
                </a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"></Tag>
            <Tag title="node"></Tag>
          </Section>

          <Button title="Voltar"></Button>
        </Content>
      </main>
    </Container>
  );
}
