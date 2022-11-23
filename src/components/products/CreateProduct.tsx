import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/Logo";
import { createProduct } from "../../utils/apiHelpers";
// import { createProduct } from "../../utils/apiHelpers";
import StdInput from "../common/input/StdInput";
import { CreateProductStyled } from "./CreateProductStyled";

const CreateProduct = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState<string | null>();
  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (e.target.value.length < 1) {
      setTitleError("Please enter a title");
    } else {
      setTitleError("");
    }
  };
  const [price, setPrice] = useState("");
  const [priceError, setPriceError] = useState<string | null>();
  const priceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
    if (
      !e.target.value.length ||
      parseFloat(e.target.value) < 0 ||
      isNaN(parseFloat(e.target.value))
    ) {
      setPriceError("Please enter a valid price.");
    } else {
      setPriceError("");
    }
  };

  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState<string | null>();
  const descriptionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
    if (e.target.value.length < 1) {
      setDescriptionError("Please enter a description");
    } else {
      setDescriptionError("");
    }
  };
  const [img, setImg] = useState("");
  const [imgError, setImgError] = useState<string | null>();
  const imgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImg(e.target.value);
    if (e.target.value.length < 1) {
      setImgError("Please enter a img url");
    } else {
      setImgError("");
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (titleError || priceError || descriptionError || imgError) {
      return;
    }
    createProduct(title, parseFloat(price), description, img).then((res) => {
      console.log(res);
      console.log("Created");
      navigate("/create-product");
    });
  };

  return (
    <CreateProductStyled>
      <Link to='/'>
        <Logo />
      </Link>
      <h1>Create Product</h1>
      <p>Complete all fields to create a product</p>
      <form onSubmit={submitHandler}>
        <StdInput
          onChange={titleHandler}
          error={titleError}
          label='Title'
          value={title}
        />
        <StdInput
          onChange={priceHandler}
          error={priceError}
          label='Price'
          value={price}
        />
        <StdInput
          onChange={descriptionHandler}
          error={descriptionError}
          label='Description'
          value={description}
        />
        <StdInput
          onChange={imgHandler}
          error={imgError}
          label='Image URL'
          value={img}
        />

        <button>Create</button>
      </form>
    </CreateProductStyled>
  );
};

export default CreateProduct;
