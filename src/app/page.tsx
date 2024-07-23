import Link from "next/link";

const quotes = [
  {
    id: "1",
    text: "Nunca se esquecem as lições aprendidas na dor.",
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
    text: "O rastafari é um revolucionário. Não se intimida, não aceita ser comprado.",
  },
  {
    id: "6",
    text: "Difícil não é lutar por aquilo que se quer, e sim desistir daquilo que se mais ama. Eu desisti. Mas não pense que foi por não ter coragem de lutar, e sim por não ter mais condições de sofrer.",
  },
  {
    id: "7",
    text: "Não viva para que a sua presença seja notada, mas para que a sua falta seja sentida.",
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
    text: "De grão em grão, a galinha enche o papo",
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
            <h2 className="text-2xl">Populares</h2>
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
