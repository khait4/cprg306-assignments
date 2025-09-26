export default function Item({ item }) {
    const { name, quantity, category } = item;
    return (
        <section className=" bg-yellow-900 my-4 p-2 w-90">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p>Buy {quantity} in {category}</p>
        </section>
    );
}