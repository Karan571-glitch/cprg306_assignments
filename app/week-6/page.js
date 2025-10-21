import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}
