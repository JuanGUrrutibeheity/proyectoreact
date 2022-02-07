import { BsCartFill } from "react-icons/bs";
import { ShoppingCartOutlined} from "@material-ui/icons";

const CartWidget = () => {
    return (
    <BsCartFill bscartfillContent={5} color="secondary">
        <ShoppingCartOutlined />
    </BsCartFill>
    )
}

export default CartWidget