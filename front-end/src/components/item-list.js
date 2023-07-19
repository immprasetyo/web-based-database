import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ItemList = () => {
  const [items, set_items] = useState([]);

  useEffect(() => {
    get_items();
  }, []);

  const get_items = async () => {
    const response = await axios.get("http://localhost:5000/items");
    set_items(response.data);
  };

  const delete_item = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/items/${id}`);
      get_items();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns">
      <div className="column is-half">
        <Link to="/add" className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Brand</th>
              <th>Product Name</th>
              <th>NIE Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item["Brand"]}</td>
                <td>{item["Product Name"]}</td>
                <td>{item["NIE Type"]}</td>
                <td>
                  <Link
                    to={`/edit/${item._id}`}
                    className="button is-info is-small"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => delete_item(item._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemList;
