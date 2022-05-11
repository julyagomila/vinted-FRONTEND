import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Publish = ({ token }) => {
  // Import image //
  const [picture, setPicture] = useState(null);
  const [data, setData] = useState(null);
  const [isPictureSending, setIsPictureSending] = useState(false);

  // form state //
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(Number);
  const [change, setChange] = useState(false);

  const navigate = useNavigate();

  const newOffer = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      if (response.data._id) {
        //Je vais déclencher une redirection vers la page de l'offre que je viens de créer
        navigate(`/offer/${response.data._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // token ?
    <section>
      <div className="container-publish">
        <span>Vends ton article</span>

        <form onSubmit={newOffer}>
          <div className="picture-div">
            <input
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
          </div>

          <div className="Div1">
            <p className="p-details">
              <div className="list-details">Titre</div>
              <input
                className="input-newOffer"
                type="text"
                placeholder="ex: Chemise Sézane verte"
                name="title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </p>

            <p className="p-details">
              <div className="list-details">Description</div>
              <input
                className="input-newOffer"
                type="text"
                placeholder="ex: porté quelque fois, taillé correctement"
                name="description"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </p>
          </div>

          <div className="Div2">
            <p className="p-details">
              <div className="list-details">Marque</div>
              <input
                className="input-newOffer"
                type="text"
                placeholder="ex: Zara"
                name="brand"
                value={brand}
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
            </p>

            <p className="p-details">
              <div className="list-details">Taille</div>
              <input
                className="input-newOffer"
                type="text"
                placeholder="ex: L/40/12"
                name="size"
                value={size}
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
            </p>

            <p className="p-details">
              <div className="list-details">Couleur</div>
              <input
                className="input-newOffer"
                type="text"
                placeholder="ex: Fushia"
                name="color"
                value={color}
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </p>
            <p className="p-details">
              <div className="list-details">Condition</div>
              <input
                className="input-newOffer"
                type="text"
                placeholder="Neuf avec étiquette"
                name="condition"
                value={condition}
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              />
            </p>

            <p className="p-details">
              <div className="list-details">Ville</div>
              <input
                className="input-newOffer"
                type="text"
                placeholder="ex: Paris"
                name="city"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </p>
          </div>

          <div className="Div3">
            <p className="p-details">
              <div className="list-details">Prix</div>
              <input
                className="input-newOffer"
                type="text"
                placeholder="0,00€"
                name="price"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </p>

            <p className="checkbox">
              <input
                className="input-newOffer"
                type="checkbox"
                onClick={() => {
                  setChange(!change);
                }}
              />
              <span>Je suis intéressé(e) par les échanges</span>
            </p>
          </div>
          <input className="offer-button" type="submit" value="AJOUTER" />
        </form>
      </div>
    </section>
  );
  // : ( <Navigate to="/login" />);
};

export default Publish;
