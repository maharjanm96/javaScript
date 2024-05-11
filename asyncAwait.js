async function productDetails() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Could not find the url");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
productDetails();
