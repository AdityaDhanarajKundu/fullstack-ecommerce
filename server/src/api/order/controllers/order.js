'use strict';
// @ts-ignore
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({strapi})=>({
    async create(ctx){
      const { products, userName, email } = ctx.request.body;  

      try{
        // retrieve the product info
        const lineItems = await Promise.all(
          products.map(async (product) => {
            const item = await strapi
              .service("api::item.item")
              .findOne(product.id);

            return {
              price_data: {
                currency: "inr",
                product_data: {
                  name: item.name,
                },
                unit_amount: item.price * 100,
              },
              quantity: product.count,
            };
          })
        );

        // creating a stripe session
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          customer_email: email,
          mode: "payment",
          success_url: "http://localhost:5173/checkout/success",
          cancel_url: "http://localhost:5173",
          line_items: lineItems,
        });

        // create the order item
        await strapi.service("api::order.order").create({
          data: { userName, products, stripeSessionId: session.id },
        });

        return {id: session.id};
      }
      catch(error){
        ctx.response.status = 500;
        return {
          error: { message: "There was a problem creating the charge" },
        };
      }
    }
}));
