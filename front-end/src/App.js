import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./components/item-list";
import AddItem from "./components/add-item";
import EditItem from "./components/edit-item";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="edit/:id" element={<EditItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
