import {useState, useEffect} from "react";
import "./productspage.css";
function ProductsPage(props){

const [cartItems, setCartItems] = useState([]);
const [showModal, setShowModal] = useState(false);
const [selectedSize, setSelectedSize] = useState({});
const [totalPrice, setTotalPrice] = useState(0); 

const addToCart = (name, price) => {
  let newItem;
  if (name.includes("T-Shirt") || name.includes("Hoodie")) {
    newItem = {
      name,
      price,
      size: selectedSize[name] || "S",
      quantity: 1,
    };
  } else {
    newItem = { name, price, quantity: 1 };
  }

  const updatedCartItems = [...cartItems, newItem];
  setCartItems(updatedCartItems);
  setTotalPrice(Number(calculateTotalPrice().toFixed(2))); 
  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
};

const calculateTotalPrice = () => {
  return cartItems.reduce(
    (total, item) =>
      total + Number((item.price * item.quantity).toFixed(2)),
    0
  );
};

const clearCart = () => {
  setCartItems([]);
  localStorage.removeItem("cartItems");
};

const updateSelectedSize = (itemName, size) => {
  setSelectedSize({ ...selectedSize, [itemName]: size });
};

const handleQuantityChange = (index, change) => {
  const newCartItems = [...cartItems];
  newCartItems[index].quantity += change;

  if (newCartItems[index].quantity < 0) {
    newCartItems[index].quantity = 0;
  }

  setCartItems(newCartItems);
  setTotalPrice(Number(calculateTotalPrice().toFixed(2))); 
};

useEffect(() => {
  setTotalPrice(Number(calculateTotalPrice().toFixed(2))); 
}, [cartItems]);

useEffect(() => {
  const storedCartItems = localStorage.getItem("cartItems");
  if (storedCartItems) {
    setCartItems(JSON.parse(storedCartItems));
  }
}, []);

  
return(
<>
  <div className="productsHeroContain">
    <div className="productHeroImg">
      <img src="https://CeceliaBloom.github.io/final_project/heroimageproductspage.jpg"></img>
    </div>{/*productHeroImg*/}
  </div>{/*productsHeroContain*/}
<div className="testContain">
  <div className="fixedContainer">
    <div className="cartButtons">
      <button type="button"className="btn btnPrimary" onClick={() => setShowModal(true)}>
        View Cart
      </button>

      <button type="button" className="btn btnSecondary" onClick={clearCart}>
          Clear Cart
      </button>
    </div>{/*cartButtons*/}
  </div>{/*fixedContainers*/}
  </div>
                        {/* Modal section for cart viewing */}
  {showModal && (
    <div className="modal">
      <div className="modalContent">
        <div className="modalHeader">
          <h5 className="modalTitle">Cart</h5>
            <button type="button"className="close"onClick={() => setShowModal(false)}>
                X
            </button>
            </div>{/*modalHeader*/}

        <div className="modalBody">
        <div className="showCart">
          {cartItems.map((item, index) => (
            <div key={index} className="cartItem">
              
            <div className="name">{item.name} {item.size ? `(Size: ${item.size})` : ''}</div>
            <div className="price">${(item.price * item.quantity).toFixed(2)}</div>
            <div className="quantityControls">
              <button type="button" onClick={() => handleQuantityChange(index, -1)}>-</button>
              <div className="quantity">{item.quantity}</div>
              <button type="button" onClick={() => handleQuantityChange(index, 1)}>+</button>
           </div>
          </div>
          ))}
        </div>
        <div className="totalPrice">Total price: ${calculateTotalPrice()}</div>
        </div>{/*modalBody*/}


        <div className="modalFooter">
          <button type="button" className="btn btnPrimary">
                Order now
          </button>
        </div>{/*modalFooter*/}
      </div>{/*modalContent*/}
    {/*modal*/}
    </div>
  )}
  
                             {/*VARIETY FLAVOR PACKS SECTION*/}
  <div className="productsContain">
    <div className="varietyPacksContain">
      <div className="vpRow">
        <div className="vpCol">
          <div className="vpCard">
            <div className="vpImg">
              <img src="https://CeceliaBloom.github.io/final_project/allflavorspack.png"></img>
            </div>{/*vpImg*/}
            <div className="vpCardBlock">
              <div className="vpCardTitle">
              Flavor Fusion Delights
              </div>{/*vpCardTitle*/}
              <div className="vpCardText"> $7.64</div>
              <button onClick={() => addToCart("Flavor Fusion Delights", 7.64)}
              className="addToCart pBTN pBTNPrimary">Add to cart</button>
            </div>{/*vpCardBlock*/}
          </div>{/*vpCard*/}
        </div>{/*vpCol*/}

        <div className="vpCol">
          <div className="vpCard">
            <div className="vpImg">
              <img src="https://CeceliaBloom.github.io/final_project/carandlemonpack.png"></img>
            </div>{/*vpImg*/}
            <div className="vpCardBlock">
              <div className="vpCardTitle">
                Sweet & Tart Duo
              </div>{/*vpCardTitle*/}
              <div className="vpCardText"> $7.64</div>
              <button onClick={() => addToCart("Sweet & Tart Duo", 7.64)}
              className="addToCart pBTN pBTNPrimary">Add to cart</button>
            </div>{/*vpCardBlock*/}
          </div>{/*vpCard*/}
        </div>{/*vpCol*/}

        <div className="vpCol">
          <div className="vpCard">
            <div className="vpImg">
              <img src="https://CeceliaBloom.github.io/final_project/carandmintpack.png"></img>
            </div>{/*vpImg*/}
            <div className="vpCardBlock">
              <div className="vpCardTitle">
              Indulgent Classics Combo
              </div>{/*vpCardTitle*/}
              <div className="vpCardText"> $7.64</div>
              <button onClick={() => addToCart("Indulgent Classics Combo", 7.64)}
              className="addToCart pBTN pBTNPrimary">Add to cart</button>
            </div>{/*vpCardBlock*/}
          </div>{/*vpCard*/}
        </div>{/*vpCol*/}
      </div>{/*vpRow*/}
    </div>{/*varietyPacksContain*/}

                            {/*SINGLE FLAVOR PACKS SECTION*/}
  <div className="singleFlavorPacks">
    <div className="sfRow">
      <div className="sfCol">
        <div className="sfCard1">
          <div className="sfImg">
            <img src="https://CeceliaBloom.github.io/final_project/mint.png"></img>
          </div>{/*sfImg*/}
          <div className="sfCardBlock">
            <div className="sfCardTitle">
              Mint Chocolate Chip
            </div>{/*sfCardTitle*/}
            <div className="sfCardText">$7.64</div>
            <button onClick={() => addToCart("Mint Chocolate Chip", 7.64)}
            className="addToCart pBTN pBTNPrimary">Add to cart</button>
          </div>{/*sfCardBlock*/}
        </div>{/*sfCard1*/}
      </div>{/*sfCol*/}

      <div className="sfCol">
        <div className="sfCard2">
          <div className="sfImg">
            <img src="https://CeceliaBloom.github.io/final_project/caramel.png"></img>
          </div>{/*sfImg*/}
          <div className="sfCardBlock">
            <div className="sfCardTitle">
              Vanilla Salted Caramel 
            </div>{/*sfCardTitle*/}
            <div className="sfCardText">$7.64</div>
            <button onClick={() => addToCart("Vanilla Salted Caramel", 7.64)}
            className="addToCart pBTN pBTNPrimary">Add to cart</button>
          </div>{/*sfCardBlock*/}
        </div>{/*sfCard2*/}
      </div>{/*sfCol*/}

        <div className="sfCol">
          <div className="sfCard3">
            <div className="sfImg">
              <img src="https://CeceliaBloom.github.io/final_project/lemon.png"></img>
            </div>{/*sfImg*/}
            <div className="sfCardBlock">
              <div className="sfCardTitle">
               Sour Lemon
              </div>{/*sfCardTitle*/}
              <div className="sfCardText">$7.64</div>
              <button onClick={() => addToCart("Sour Lemon", 7.64)}
              className="addToCart pBTN pBTNPrimary">Add to cart</button>
            </div>{/*sfCardBlock*/}
          </div>{/*sfCard*/}
        </div>{/*sfCol*/}
    </div>{/*sfRow */}
  </div>{/*singleFlavorPacks*/}

<div className="merchContain">
    <div className="merchRow">
        <div className="merchCol">
          <div className="merchCard1">
            <div className="merchImg">
              <img src="https://CeceliaBloom.github.io/final_project/mintshirt.png"></img>
            </div>{/*merchImg*/}
            <div className="merchCardBlock">
              <div className="merchCardTitle">
                Mint Chocolate T-Shirt
              </div>{/*merchCardTitle*/}
              <div className="merchCardText">$5.00</div>
                <div className="sizeButtons">
                <button onClick={() => setSelectedSize({ ...selectedSize, "Mint Chocolate T-Shirt": "S" })}className={selectedSize["Mint Chocolate T-Shirt"] === "S" ? "sizeButton selected" : "sizeButton"}>S</button>

                <button onClick={() => setSelectedSize({ ...selectedSize, "Mint Chocolate T-Shirt": "M" })}className={selectedSize["Mint Chocolate T-Shirt"] === "M" ? "sizeButton selected" : "sizeButton"}>M</button>

                <button onClick={() => setSelectedSize({ ...selectedSize, "Mint Chocolate T-Shirt": "L" })}className={selectedSize["Mint Chocolate T-Shirt"] === "L" ? "sizeButton selected" : "sizeButton"}>L</button>
                </div>
                <button onClick={() => addToCart("Mint Chocolate T-Shirt", 5.00)}className="addToCart pBTN pBTNPrimary">Add to cart</button>
            </div>{/*merchCardBlock*/}
          </div>{/*merchCard*/}
        </div>{/*merchCol*/}

        <div className="merchCol">
          <div className="merchCard2">
            <div className="merchImg">
              <img src="https://CeceliaBloom.github.io/final_project/caramelshirt.png"></img>
            </div>{/*merchImg*/}
            <div className="merchCardBlock">
              <div className="merchCardTitle">
              Vanilla Caramel T-Shirt
              </div>{/*merchCardTitle*/}
              <div className="merchCardText">$5.00</div>
              <div className="sizeButtons">
              <button onClick={() => setSelectedSize({ ...selectedSize, "Vanilla Caramel T-Shirt": "S" })}className={selectedSize["Vanilla Caramel T-Shirt"] === "S" ? "sizeButton selected" : "sizeButton"}>S</button>

              <button onClick={() => setSelectedSize({ ...selectedSize, "Vanilla Caramel T-Shirt": "M" })}className={selectedSize["Vanilla Caramel T-Shirt"] === "M" ? "sizeButton selected" : "sizeButton"}>M</button>

              <button onClick={() => setSelectedSize({ ...selectedSize, "Vanilla Caramel T-Shirt": "L" })}className={selectedSize["Vanilla Caramel T-Shirt"] === "L" ? "sizeButton selected" : "sizeButton"}>L</button>

                </div>
                <button onClick={() => addToCart("Vanilla Caramel T-Shirt", 5.00)}className="addToCart pBTN pBTNPrimary">Add to cart</button>
            </div>{/*merchCardBlock*/}
          </div>{/*merchCard*/}
        </div>{/*merchCol*/}

        <div className="merchCol">
          <div className="merchCard3">
            <div className="merchImg">
              <img src="https://CeceliaBloom.github.io/final_project/lemonshirt.png"></img>
            </div>{/*merchImg*/}
            <div className="merchCardBlock">
              <div className="merchCardTitle">
               Sour Lemon T-Shirt
              </div>{/*merchCardTitle*/}
              <div className="merchCardText">$5.00</div>
              <div className="sizeButtons">
                <button onClick={() => setSelectedSize({ ...selectedSize, "Sour Lemon T-Shirt": "S" })}className={selectedSize["Sour Lemon T-Shirt"] === "S" ? "sizeButton selected" : "sizeButton"}>S</button>

                <button onClick={() => setSelectedSize({ ...selectedSize, "Sour Lemon T-Shirt": "M" })}className={selectedSize["Sour Lemon T-Shirt"] === "M" ? "sizeButton selected" : "sizeButton"}>M</button>

                <button onClick={() => setSelectedSize({ ...selectedSize, "Sour Lemon T-Shirt": "L" })}className={selectedSize["Sour Lemon T-Shirt"] === "L" ? "sizeButton selected" : "sizeButton"}>L</button>
                </div>
                <button onClick={() => addToCart("Sour Lemon T-Shirt", 5.00)}className="addToCart pBTN pBTNPrimary">Add to cart</button>
            </div>{/*merchCardBlock*/}
          </div>{/*merchCard*/}
        </div>{/*merchCol*/}
        </div>{/*merchRow*/}

      <div className="merchRow">
        <div className="merchCol">
          <div className="merchCard4">
            <div className="merchImg">
              <img src="https://CeceliaBloom.github.io/final_project/minthoodie.png"></img>
            </div>{/*merchImg*/}
            <div className="merchCardBlock">
              <div className="merchCardTitle">
                Mint Chocolate Hoodie
              </div>{/*merchCardTitle*/}
              <div className="merchCardText">$10.00</div>
              <div className="sizeButtons">
                <button onClick={() => setSelectedSize({ ...selectedSize, "Mint Chocolate Hoodie": "S" })}className={selectedSize["Mint Chocolate Hoodie"] === "S" ? "sizeButton selected" : "sizeButton"}>S</button>

                <button onClick={() => setSelectedSize({ ...selectedSize, "Mint Chocolate Hoodie": "M" })}className={selectedSize["Mint Chocolate Hoodie"] === "M" ? "sizeButton selected" : "sizeButton"}>M</button>

                <button onClick={() => setSelectedSize({ ...selectedSize, "Mint Chocolate Hoodie": "L" })}className={selectedSize["Mint Chocolate Hoodie"] === "L" ? "sizeButton selected" : "sizeButton"}>L</button>

                </div>
                <button onClick={() => addToCart("Mint Chocolate Hoodie", 10.00)}className="addToCart pBTN pBTNPrimary">Add to cart</button>
            </div>{/*merchCardBlock*/}
          </div>{/*merchCard*/}
        </div>{/*merchCol*/}

        <div className="merchCol">
          <div className="merchCard5">
            <div className="merchImg">
              <img src="https://CeceliaBloom.github.io/final_project/caramelhoodie.png"></img>
            </div>{/*merchImg*/}
            <div className="merchCardBlock">
              <div className="merchCardTitle">
              Vanilla Caramel Hoodie
              </div>{/*merchCardTitle*/}
              <div className="merchCardText">$10.00</div>
              <div className="sizeButtons">
                <button onClick={() => setSelectedSize({ ...selectedSize, "Vanilla Caramel Hoodie": "S" })}className={selectedSize["Vanilla Caramel Hoodie"] === "S" ? "sizeButton selected" : "sizeButton"}>S</button>

                <button onClick={() => setSelectedSize({ ...selectedSize, "Vanilla Caramel Hoodie": "M" })}className={selectedSize["Vanilla Caramel Hoodie"] === "M" ? "sizeButton selected" : "sizeButton"}>M</button>

                <button onClick={() => setSelectedSize({ ...selectedSize, "Vanilla Caramel Hoodie": "L" })}className={selectedSize["Vanilla Caramel Hoodie"] === "L" ? "sizeButton selected" : "sizeButton"}>L</button>
                </div>
                <button onClick={() => addToCart("Vanilla Caramel Hoodie", 10.00)}className="addToCart pBTN pBTNPrimary">Add to cart</button>
            </div>{/*merchCardBlock*/}
          </div>{/*merchCard*/}
        </div>{/*merchCol*/}

        <div className="merchCol">
          <div className="merchCard6">
            <div className="merchImg">
              <img src="https://CeceliaBloom.github.io/final_project/lemonhoodie.png"></img>
            </div>{/*merchImg*/}
            <div className="merchCardBlock">
              <div className="merchCardTitle">
              Sour Lemon Hoodie
              </div>{/*merchCardTitle*/}
              <div className="merchCardText">$10.00</div>
              <div className="sizeButtons">
                <button onClick={() => setSelectedSize({ ...selectedSize, "Sour Lemon Hoodie": "S" })}className={selectedSize["Sour Lemon Hoodie"] === "S" ? "sizeButton selected" : "sizeButton"}>S</button>

                <button onClick={() => setSelectedSize({ ...selectedSize, "Sour Lemon Hoodie": "M" })}className={selectedSize["Sour Lemon Hoodie"] === "M" ? "sizeButton selected" : "sizeButton"}>M</button>

                <button onClick={() => setSelectedSize({ ...selectedSize, "Sour Lemon Hoodie": "L" })}className={selectedSize["Sour Lemon Hoodie"] === "L" ? "sizeButton selected" : "sizeButton"}>L</button>

                </div>
                <button onClick={() => addToCart("Sour Lemon Hoodie", 10.00)}className="addToCart pBTN pBTNPrimary">Add to cart</button>
            </div>{/*merchCardBlock*/}
          </div>{/*merchCard*/}
        </div>{/*merchCol*/}
      </div>{/*merchRow*/}
    </div>{/*merchContain*/}
  </div>{/*productsContain*/}


</>
)}

export default ProductsPage;