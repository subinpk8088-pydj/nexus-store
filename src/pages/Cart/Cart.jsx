import { useCart } from "../../context/CartContext";

function Cart() {
  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div
        style={{
          padding: "120px 40px",
          textAlign: "center",
        }}
      >
        <h1>Your Cart Is Empty</h1>
      </div>
    );
  }

  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "auto",
        padding: "100px 40px",
      }}
    >
      <h1
        style={{
          marginBottom: "40px",
        }}
      >
        Shopping Cart
      </h1>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            marginBottom: "20px",
            padding: "20px",
            background: "#f8f9fb",
            borderRadius: "16px",
          }}
        >
          <div>
            <h3>{item.name}</h3>

            <p>${item.price}</p>
          </div>

          <div>
            <button
              onClick={() =>
                decreaseQuantity(item.id)
              }
            >
              -
            </button>

            <span
              style={{
                margin: "0 15px",
              }}
            >
              {item.quantity}
            </span>

            <button
              onClick={() =>
                increaseQuantity(item.id)
              }
            >
              +
            </button>
          </div>

          <button
            onClick={() =>
              removeFromCart(item.id)
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h2>
        Total: ${cartTotal.toFixed(2)}
      </h2>
    </section>
  );
}

export default Cart;