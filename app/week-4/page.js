import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Add a New Item</h1>
      <NewItem />
    </main>
  );
}

