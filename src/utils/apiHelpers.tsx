export const createCustomer = async (
  first: string,
  last: string,
  email: string,
  password: string
) => {
  try {
    let response = await fetch(
      "https://13713ult3b.execute-api.us-west-1.amazonaws.com/dev/customers/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: first,
          lastName: last,
          email: email,
          password: password,
        }),
      }
    );

    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const loginCustomer = async (email: string, password: string) => {
  try {
    let response = await fetch(
      "https://13713ult3b.execute-api.us-west-1.amazonaws.com/dev/customers/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    let data = await response.json();
    localStorage.setItem("sid", data.sid);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

interface Style {
  title: string;
  images: string[];
  color: string;
  quantity: number;
}

export const createProduct = async (
  title: string,
  price: string,
  description: string,
  category: string,
  styles: Style[],
  powerDelivery: string,
  weight: string,
  height: string,
  width: string,
  depth: string,
  warranty: string,
  primarySpecs: string[],
  technicalSpecs: string[],
  tracking: string[],
  requirements: string[],
  platforms: string[],
  inBox: string[]
) => {
  console.log({
    title,
    price,
    description,
    category,
    styles,
    powerDelivery,
    weight,
    height,
    width,
    depth,
    warranty,
    primarySpecs,
    technicalSpecs,
    tracking,
    requirements,
    platforms,
    inBox,
  });
  try {
    let response = await fetch(
      "https://13713ult3b.execute-api.us-west-1.amazonaws.com/dev/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          price,
          description,
          category,
          styles,
          powerDelivery,
          weight,
          height,
          width,
          depth,
          warranty,
          primarySpecs,
          technicalSpecs,
          tracking,
          requirements,
          platforms,
          inBox,
        }),
      }
    );

    let data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getAllProducts = async () => {
  const res = await fetch(
    "https://13713ult3b.execute-api.us-west-1.amazonaws.com/dev/products"
  );
  const data = await res.json();
  return data;
};

export const addProductToCart = async (prodId: any) => {
  const sid = localStorage.getItem("sid");
  if (sid) {
    const res = await fetch(
      "https://13713ult3b.execute-api.us-west-1.amazonaws.com/dev/customers/add-to-cart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sid: sid,
          productId: prodId,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
    return data;
  } else {
    console.log("Store cart in redux until user creates account");
  }
};
