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

export const logoutApi = async () => {
  const sid = localStorage.getItem("sid");
  if (sid) {
    const res = await fetch(
      "https://13713ult3b.execute-api.us-west-1.amazonaws.com/dev/customers/log-out",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sid: sid,
        }),
      }
    );
    const data = await res.json();
    console.log(data);

    return data;
  } else {
    console.log("No user logged in");
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

export const getProductBtId = async (prodId: string) => {
  console.log(prodId);
  try {
    const res = await fetch(
      `https://13713ult3b.execute-api.us-west-1.amazonaws.com/dev/products/${prodId}`
    );
    const data = await res.json();
    console.log(data);
    return data.product;
  } catch (err) {
    console.log("can not get product", err);
  }
};

export const addProductToCartApi = async (prodId: any, styleId: String) => {
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
          styleId: styleId,
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

export const changeQuantityApi = async (prodId: any, newQty: number) => {
  const sid = localStorage.getItem("sid");
  if (sid) {
    const res = await fetch(
      "https://13713ult3b.execute-api.us-west-1.amazonaws.com/dev/customers/updateCartQuantity",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sid: sid,
          productId: prodId,
          newQuantity: newQty,
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

export const checkoutApi = async (total: number) => {
  const sid = localStorage.getItem("sid");
  console.log("In the API now, fetching", sid, total);

  if (sid) {
    const res = await fetch(
      "https://13713ult3b.execute-api.us-west-1.amazonaws.com/dev/customers/checkout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sid: sid,
          total: total,
        }),
      }
    );
    const data = await res.json();
    console.log(data);

    return data;
  } else {
    console.log(
      "No customer logged in, have them create account, maybe create guest checkout"
    );
  }
};
