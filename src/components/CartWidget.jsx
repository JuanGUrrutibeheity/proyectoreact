import { BsCartFill } from "react-icons/bs";
import { ShoppingCartOutlined} from "@material-ui/icons";

const CartWidget = () => {
    return (
    <Badge badgeContent={5} color="secondary">
        <ShoppingCartOutlined />
    </Badge>
    )
}