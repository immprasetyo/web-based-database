import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditItem = () => {
  const [brand, set_brand] = useState("");
  const [product_name, set_product_name] = useState("");
  const [nie_type, set_nie_type] = useState("New");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    get_item_by_id();
    // eslint-disable-next-line
  }, []);

  const get_item_by_id = async () => {
    const response = await axios.get(`http://localhost:5000/items/${id}`);
    set_brand(response.data["Brand"]);
    set_product_name(response.data["Product Name"]);
    set_nie_type(response.data["NIE Type"]);
  };

  const update_item = async (x) => {
    x.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/items/${id}`, {
        Brand: brand,
        "Product Name": product_name,
        "NIE Type": nie_type,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={update_item}>
          <div className="field">
            <label className="label">Brand</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={brand}
                onChange={(x) => set_brand(x.target.value)}
                placeholder="Brand"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Product Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={product_name}
                onChange={(x) => set_product_name(x.target.value)}
                placeholder="Product Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">NIE Type</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={nie_type}
                  onChange={(x) => set_nie_type(x.target.value)}
                >
                  <option value="New">New</option>
                  <option value="Renewal">Renewal</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItem;
