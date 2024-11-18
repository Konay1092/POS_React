import { Separator } from "@/components/ui/separator";
import Delete from "/assets/add-to-cart/delete.svg";
import { useAppSelector } from "@/store/hook";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  incrementQuantity,
  decrementQuantity,
  updateTotalCost,
} from "@/store/slices/Checkout/checkOutSlice";

const ItemQuantity = ({
  quantity,
  onIncrement,
  onDecrement,
}: {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}) => {
  return (
    <div className="flex gap-4 rounded-full border px-3 w-[80px] border-black">
      <span onClick={onDecrement} style={{ cursor: "pointer" }}>
        -
      </span>
      <span>{quantity}</span>
      <span onClick={onIncrement} style={{ cursor: "pointer" }}>
        +
      </span>
    </div>
  );
};

const CartItem = ({
  id,
  title,
  image,
  desc,
  price,
  size,
  color,
  quantity,
  onDelete,
}: {
  id: number;
  title: string;
  image: string;
  desc: string;
  price: string | number;
  size: string;
  color: string;
  quantity: number;
  onDelete: (id: number) => void;
}) => {
  const dispatch = useDispatch();
  const itemQuantity = useAppSelector(
    (state) =>
      state.checkout.cartItems.find((item) => item.id === id)?.quantity || 1
  );

  const totalPrice = Number(price) * itemQuantity;

  const handleIncrement = () => {
    dispatch(incrementQuantity(id));
    dispatch(updateTotalCost());
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(id));
    dispatch(updateTotalCost());
  };

  return (
    <div>
      <div className="flex justify-around">
        <img src={image} alt={title} className="w-[250px] h-[250px] py-4" />
        <div className="flex flex-col justify-center ">
          <div className="mb-2 flex justify-between items-center">
            <h2 className="font-bold">{title}</h2>
            <img
              src={Delete}
              className="cursor-pointer"
              onClick={() => onDelete(id)}
            />
          </div>
          <p>{desc}</p>
          <small className="text-muted-foreground">Size: {size}</small>
          <span className="text-xs">{color}</span>
          <div className="flex justify-between items-center mt-4">
            <ItemQuantity
              quantity={itemQuantity}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
            <span>{totalPrice} Ks</span>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
};

const CartComp = () => {
  const cartItems = useAppSelector((state) => state.checkout.cartItems);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteItem(id));
    dispatch(updateTotalCost());
  };

  return (
    <div className="w-full sm:w-[80%] lg:w-[60%] border rounded-lg shadow-lg">
      {cartItems.map((item, index) => (
        <CartItem
          key={index}
          id={item.id}
          title={item.title}
          image={item.image}
          color={item.color}
          desc={item.desc}
          price={item.price}
          size={item.size}
          quantity={item.quantity}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default CartComp;
