import FilterableProductTable from "./component/FilterableProductTable";
import PRODUCTS from "./Product";

function App() {
  return (
    <div>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
