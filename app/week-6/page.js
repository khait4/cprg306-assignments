import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="m-auto max-w-md p-5">
            <h1 className="text-4xl text-blue-500 font-bold ">Shopping List</h1>
            <ItemList />
        </main>
    )
}