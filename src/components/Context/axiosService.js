import axios from "axios";

const URI = process.env.DB_URI;

async function getHomePage() {
	try {
		const homePage = await axios.get(`${URI}/`);

		return homePage;
  } catch (error) {
    console.error("Error: " + error.message);
  }
}

async function getCartData(res) {
  
  try {
    const cart = await axios.get(`${URI}/cart`);
    
    res.send(cart);
  } catch (error) {
    console.error("Error: " + error.message);
    
    
  }
}
function AddCart(id) {
	return <></>;
}


export { getHomePage, getCartData, AddCart };