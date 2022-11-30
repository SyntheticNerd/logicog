import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../images/Logo";
import { createProduct } from "../../../utils/apiHelpers";
// import { createProduct } from "../../utils/apiHelpers";
import StdInput from "../../common/input/StdInput";
import { SmallFormBtn } from "../../common/SmallFormBtn";
import { CreateProductStyled } from "./CreateProductStyled";

interface Style {
  title: string;
  images: string[];
  color: string;
  quantity: number;
}

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
  const [category, setCategory] = useState("");
  const [categoryError, setCategoryError] = useState<string | null>();
  const categoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
    if (e.target.value.length < 1) {
      setCategoryError("Please enter a Category");
    } else {
      setCategoryError("");
    }
  };

  const [styleTitle, setStyleTitle] = useState("");
  const [color, setColor] = useState("");

  const [quantity, setQuantity] = useState("0");
  const [quantityError, setQuantityError] = useState<string | null>();
  const quantityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value);
    if (
      !e.target.value.length ||
      parseFloat(e.target.value) < 0 ||
      isNaN(parseFloat(e.target.value))
    ) {
      setQuantityError("Please enter a valid quantity.");
    } else {
      setQuantityError("");
    }
  };
  const [url, setUrl] = useState("");
  const [imgError, setImgError] = useState<string | null>();
  const imgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    if (e.target.value.length < 1 && imgArray.length < 1) {
      setImgError("Please add an img url");
    } else {
      setImgError("");
    }
  };

  // const [primary, setPrimary] = useState(true);
  const [imgArray, setImgArray] = useState<string[]>([]);
  const addImgHandler = () => {
    // let _img = { url: url, color: color };
    if (url.length > 0) {
      setImgArray((prev) => [...prev, url]);
      setUrl("");
      // setColor("");
      // setPrimary(true);
    }
  };
  const deleteUrlHandler = (imageUrl: string) => {
    setImgArray((prev) => prev.filter((img) => img !== imageUrl));
  };

  const [stylesArray, setStylesArray] = useState<Style[]>([]);
  const stylesArrayHandler = () => {
    setStylesArray((prev) => [
      ...prev,
      {
        title: styleTitle,
        images: imgArray,
        color: color,
        quantity: parseFloat(quantity),
      },
    ]);
    setStyleTitle("");
    setImgArray([]);
    setColor("");
    setQuantity("0");
  };

  const [powerDelivery, setPowerDelivery] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [warranty, setWarranty] = useState("");

  const [primSpec, setPrimSpec] = useState("");
  const [primSpecArray, setPrimSpecArray] = useState<string[]>([]);
  const primSpecHandler = () => {
    if (primSpec.length > 0) {
      setPrimSpecArray((prev) => [...prev, primSpec]);
      setPrimSpec("");
    }
  };
  const [techSpec, setTechSpec] = useState("");
  const [techSpecArray, setTechSpecArray] = useState<string[]>([]);
  const techSpecHandler = () => {
    if (techSpec.length > 0) {
      setTechSpecArray((prev) => [...prev, techSpec]);
      setTechSpec("");
    }
  };
  const [tracking, setTracking] = useState("");
  const [trackingArray, setTrackingArray] = useState<string[]>([]);
  const trackingHandler = () => {
    if (tracking.length > 0) {
      setTrackingArray((prev) => [...prev, tracking]);
      setTracking("");
    }
  };
  const [req, setReq] = useState("");
  const [reqArray, setReqArray] = useState<string[]>([]);
  const reqHandler = () => {
    if (req.length > 0) {
      setReqArray((prev) => [...prev, req]);
      setReq("");
    }
  };
  const [platform, setPlatform] = useState("");
  const [platformArray, setPlatformArray] = useState<string[]>([]);
  const platformHandler = () => {
    if (platform.length > 0) {
      setPlatformArray((prev) => [...prev, platform]);
      setPlatform("");
    }
  };
  const platformDeleteHandler = (ele: string) => {
    setPlatformArray((prev) => prev.filter((item) => item !== ele));
  };
  const [inBox, setInBox] = useState("");
  const [inBoxArray, setInBoxArray] = useState<string[]>([]);
  const inBoxHandler = () => {
    if (inBox.length > 0) {
      setInBoxArray((prev) => [...prev, inBox]);
      setInBox("");
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitting");
    if (
      titleError ||
      priceError ||
      descriptionError ||
      title.length < 1 ||
      price.length < 1 ||
      description.length < 1
    ) {
      return;
    }
    createProduct(
      title,
      price,
      description,
      category,
      stylesArray,
      powerDelivery,
      weight,
      height,
      width,
      depth,
      warranty,
      primSpecArray,
      techSpecArray,
      trackingArray,
      reqArray,
      platformArray,
      inBoxArray
    ).then((res) => {
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
          onChange={categoryHandler}
          error={categoryError}
          label='Category'
          value={category}
        />
        <h2>Create Style</h2>
        <div className='styleContainer'>
          <StdInput
            onChange={(e) => setStyleTitle(e.target.value)}
            // error={titleError}
            label='Style Title'
            value={styleTitle}
          />
          <StdInput
            onChange={(e) => setColor(e.target.value)}
            label='Color'
            value={color}
          />
          <StdInput
            onChange={quantityHandler}
            error={quantityError}
            label='Quantity'
            value={quantity}
          />
          <h2>Add Images</h2>
          <StdInput
            onChange={imgHandler}
            error={imgError}
            label='URL'
            value={url}
            // type="file"
          />
          <button type='button' onClick={addImgHandler}>
            Add Image
          </button>
          {imgArray.length > 0 && <h3>Images</h3>}
          <div className='imgSelections'>
            {imgArray.map((img) => (
              <div key={img} className='imgDeleteBox'>
                <img src={img} alt={img} className='previewImg' />
                <button onClick={() => deleteUrlHandler(img)}>delete</button>
              </div>
            ))}
          </div>
        </div>
        <SmallFormBtn type='button' onClick={stylesArrayHandler}>
          Commit Style
        </SmallFormBtn>
        <div className='imgDeleteBox'>
          {stylesArray.map((style) => (
            <div>
              <p>Title: {style.title}</p>
              <p>Color: {style.color}</p>
              <p>Quantity: {style.quantity}</p>
              <div className='imgSelections'>
                {style.images.map((img) => (
                  <img src={img} alt={img} className='previewImg' />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div>
          <div>
            <label htmlFor='primary'>Primary? </label>
            <input
              id='primary'
              type='checkbox'
              checked={primary}
              onChange={(e) => setPrimary(e.target.checked)}
            />
          </div>
        </div> */}
        <StdInput
          onChange={(e) => setPowerDelivery(e.target.value)}
          label='Power Delivery'
          value={powerDelivery}
        />
        <StdInput
          onChange={(e) => setWeight(e.target.value)}
          label='Weight'
          value={weight}
        />
        <StdInput
          onChange={(e) => setHeight(e.target.value)}
          label='Height'
          value={height}
        />
        <StdInput
          onChange={(e) => setWidth(e.target.value)}
          label='Width'
          value={width}
        />
        <StdInput
          onChange={(e) => setDepth(e.target.value)}
          label='Depth'
          value={depth}
        />
        <StdInput
          onChange={(e) => setWarranty(e.target.value)}
          label='Warranty'
          value={warranty}
        />
        <StdInput
          onChange={(e) => setPrimSpec(e.target.value)}
          label='Primary Specs'
          value={primSpec}
        />
        <SmallFormBtn type='button' onClick={primSpecHandler}>
          Add Primary Spec
        </SmallFormBtn>
        {primSpecArray.map((ele) => (
          <p key={ele}>{ele}</p>
        ))}
        <StdInput
          onChange={(e) => setTechSpec(e.target.value)}
          label='Technical Specs'
          value={techSpec}
        />
        <SmallFormBtn type='button' onClick={techSpecHandler}>
          Add Technical Spec
        </SmallFormBtn>
        {techSpecArray.map((ele) => (
          <p key={ele}>{ele}</p>
        ))}
        <StdInput
          onChange={(e) => setTracking(e.target.value)}
          label='Tracking'
          value={tracking}
        />
        <SmallFormBtn type='button' onClick={trackingHandler}>
          Add Tracking
        </SmallFormBtn>
        {trackingArray.map((ele) => (
          <p key={ele}>{ele}</p>
        ))}
        <StdInput
          onChange={(e) => setReq(e.target.value)}
          label='Requirements'
          value={req}
        />
        <SmallFormBtn type='button' onClick={reqHandler}>
          Add Requirement
        </SmallFormBtn>
        {reqArray.map((ele) => (
          <p key={ele}>{ele}</p>
        ))}
        <StdInput
          onChange={(e) => setPlatform(e.target.value)}
          label='Platform'
          value={platform}
        />
        <SmallFormBtn type='button' onClick={platformHandler}>
          Add Platform
        </SmallFormBtn>
        {platformArray.map((ele) => (
          <div key={ele}>
            <p>{ele}</p>{" "}
            <button type='button' onClick={() => platformDeleteHandler(ele)}>
              delete
            </button>
          </div>
        ))}
        <StdInput
          onChange={(e) => setInBox(e.target.value)}
          label='In Box'
          value={inBox}
        />
        <SmallFormBtn type='button' onClick={inBoxHandler}>
          Add Box Item
        </SmallFormBtn>
        {inBoxArray.map((ele) => (
          <p key={ele}>{ele}</p>
        ))}
        <button>Create</button>
      </form>
    </CreateProductStyled>
  );
};

export default CreateProduct;
