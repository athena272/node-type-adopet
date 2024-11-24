import express, { Request, Response } from "express";

// Definição do tipo para um Pet
interface Pet {
  id: number;
  nome: string;
  especie: string;
  idade: number;
  adotado: boolean;
}

const app = express();
app.use(express.json());

// Endpoint inicial
app.get("/", (_: Request, res: Response) => {
  res.send("Bem vindo ao curso de TypeScript!");
});

function criaPet({ id, nome, especie, idade, adotado }: Pet) {
  return {
    id,
    nome,
    especie,
    idade,
    adotado,
  };
}

let id = 0;
function geraId(): number {
  id = id + 1;
  return id;
}

app.post("/pets", (_: Request, res: Response) => {
  const pet1 = criaPet({
    id: geraId(),
    nome: "Bolt",
    especie: "cachorro",
    idade: 3,
    adotado: false
  })
  const pet2 = criaPet({
    id: geraId(),
    nome: "Mel",
    especie: "gato",
    idade: 2,
    adotado: false
  })

  res.send([pet1, pet2]);
});

export default app;
