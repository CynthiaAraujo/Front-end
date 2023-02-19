import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components//NoteItem";
import { Button } from "../../components/Button";

export function New() {
  return (
    <Container>
      <Header></Header>
      <main>
        <Form>
          <header>
            <h1>Criar notas</h1>
            <a href="/">Voltar</a>
          </header>
          <Input placeholder="Título"></Input>
          <TextArea placeholder="Observações"></TextArea>
          <Section title="Links Úteis">
            <NoteItem value="https://www.rocketseat.com.br/"></NoteItem>
            <NoteItem isNew placeholder="Novo Item"></NoteItem>
          </Section>
          <Section title="Marcadores">
            <div class="tags">
              <NoteItem value="react"></NoteItem>
              <NoteItem isNew placeholder="Novo Marcador"></NoteItem>
            </div>
          </Section>
          <Button title="Salvar" type="button"></Button>
        </Form>
      </main>
    </Container>
  );
}
