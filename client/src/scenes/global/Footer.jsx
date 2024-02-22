import { useTheme } from "@emotion/react";
import {Box} from "@mui/material";
import {Typography} from "@mui/material";
import {shades} from "../../theme"

function Footer() {
  
  const {
    palette : {neutral},
  }  = useTheme();
    
  return (
    <Box mt={"70px"} p={"40px 0"} bgcolor={neutral.light}>
      <Box
        width={"80%"}
        margin={"auto"}
        display={"flex"}
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            ShopEzz
          </Typography>
          <div>
            Welcome to SHOPEZZ, your go-to destination for cutting-edge fashion.
            Explore our curated collection of trendy outfits for every occasion.
            With a focus on quality and innovation, we offer a seamless shopping
            experience. Discover the latest styles and express your
            individuality with our diverse range of clothing options. From
            casual chic to elegant sophistication, find the perfect look that
            speaks to you. Shop now and let SHOPEZZ elevate your wardrobe with
            our curated selection of fashion-forward pieces.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            50 north Whatever Blvd, Kolkata 700001 , West Bengal, India
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: adityadhanarajkundu@gmail.com
          </Typography>
          <Typography mb="30px">(+91)7595909374</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
