import ListGroup from "./components/ListGroup";
function App() {
  let items = [
    "New York",
    "San Fransciso",
    "Tokoyo",
    "London",
    "Paris",
    "Dubai",
    "Bangalore",
  ];

  const handleSelecItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelecItem}
      />
    </div>
  );
}

export default App;
