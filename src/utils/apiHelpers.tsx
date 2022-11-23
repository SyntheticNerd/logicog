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
    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createProduct = async (
  title: string,
  price: number,
  description: string,
  imageUrl: string
) => {
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
          imageUrl,
        }),
      }
    );

    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
