import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Item({ item, width }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1); // to count the items
  const [isHovered, setIsHovered] = useState(false); // to check if the mouse is hovered over the item
  const {
    palette: { neutral },
  } = useTheme();
  const { category, price, name, image } = item.attributes;

  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box width={width}>
      <Box
        position={"relative"}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          width={"300px"}
          height={"400px"}
          src={`http://localhost:1337${url}`} // images sourced from the backend strapi server
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position={"absolute"}
          bottom={"10%"}
          left={"0"}
          width={"100%"}
          padding={"0 5%"}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              backgroundColor={shades.neutral[100]}
              borderRadius={"3px"}
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>

            {/* Button */}
            <Button
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
              sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
      <Box mt={"3px"}>
        <Typography variant="subtitle2" color={neutral.dark}>
            {/* capitalising the first letter of the items categories from the backend strapi  */}
          {category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}  
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">${price}</Typography>
      </Box>
    </Box>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  width: PropTypes.string,
};

export default Item;
