import Link from "next/link";

const quotes = [
  {
    id: "1",
    text: "O sal vem do norte, o ouro vem do sul, mas as palavras de Deus e os tesouros da sabedoria vêm de Timbuktu",
  },
  {
    id: "2",
    text: "Não olhe onde você caiu, mas onde você escorregou.",
  },
  {
    id: "3",
    text: "E enquanto você reza, vá fazendo.",
  },
  {
    id: "4",
    text: "Se você pensa que é muito pequeno para fazer a diferença, tente dormir em um quarto fechado com um mosquito!",
  },
  {
    id: "5",
    text: "Quem faz perguntas, não pode evitar as respostas.",
  },
  {
    id: "6",
    text: "Uma mentira estraga mil verdades.",
  },
  {
    id: "7",
    text: "Não esqueça o que é ser um marinheiro apenas porque é um capitão.",
  },
  {
    id: "8",
    text: "A sociedade é como uma floresta. Quanto mais diversa, mais sustentável",
  },
  {
    id: "9",
    text: "A ancestralidade sempre ensinou que o sentido da vida é o coletivo.",
  },
  {
    id: "10",
    text: "Você aprende a cortar árvores cortando-as.",
  },
];

export default function Home() {
  return (
    <>
      <header className="border-b bg-stone-900 p-6 text-white">
        <nav className="container mx-auto flex justify-between align-middle">
          <h1>
            <Link href="/">Timbuktu</Link>
          </h1>

          <ul className="flex justify-center space-x-6 align-middle">
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto flex flex-1">
        <section className="mb-6 mt-6 space-y-6 mx-6">
          <header className="my-4">
            <h2 className="text-2xl">Provérbios Populares</h2>
          </header>

          <div className="flex flex-col space-y-6">
            {quotes.map((quote) => (
              <>
                <div
                  key={quote.id}
                  className="rounded border border-solid bg-stone-100 p-8"
                >
                  <q>{quote.text}</q>
                </div>
              </>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-solid border-neutral-100 p-6 align-bottom">
        <div className="container mx-auto">
          <p>© 2024 Timbuktu</p>
        </div>
      </footer>
    </>
  );
}
