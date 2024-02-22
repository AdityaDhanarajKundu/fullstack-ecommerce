import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import Item from "../../components/Item";
import { setItems } from "../../state";

function ShoppingList() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((store) => store.cart.items);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  console.log("items", items);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  // async function to asynchronously product items from the backend strapi server
  async function fetchItems() {
    const itemsJson = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    ).then((response) => response.json());

    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // categorising and arrange the products into different categories as we receive them from the backend
  const topRatedItems = items.filter(
    (item) => item.attributes.category === "topRated"
  );
  const newArrivalsItems = items.filter(
    (item) => item.attributes.category === "newArrivals"
  );
  const bestSellersItems = items.filter(
    (item) => item.attributes.category === "bestSellers"
  );

  return (
    <Box width={"80%"} margin={"80px auto"}>
      <Typography variant="h3" textAlign={"center"}>
        Our Featured <b>Products</b>{" "}
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          margin: "25px",
          "& .MuiTabs-flexContainer": { flexWrap: "wrap" },
        }}
      >
        <Tab label="All" value="all" />
        <Tab label="Top Rated" value="topRated" />
        <Tab label="New Arrivals" value="newArrivals" />
        <Tab label="Best Sellers" value="bestSellers" />
      </Tabs>

      {/* the grid to display the products */}
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}

        {value === "newArrivals" &&
          newArrivalsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}

        {value === "bestSellers" &&
          bestSellersItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}

        {value === "topRated" &&
          topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
}

export default ShoppingList;
