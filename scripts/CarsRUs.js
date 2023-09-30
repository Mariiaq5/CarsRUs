import { Paints } from "./Paints.js";
import { Interiors } from "./Interiors.js";
import { Technologies } from "./Technologies.js";
import { Wheels } from "./Wheels.js";
import { Orders } from "./Orders.js";

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            window.alert(Paints)
        }
    }
)

export const carsRUs = () => {
    return `
    <h1>Cars R Us</h1>

    <article class="choices">
        <section class="choices__tech options">
            ${Technologies()}
        </section>
        <section class="choices__wheels options">
        ${Wheels()}
    </section>
    <section class="choices__paints options">
        ${Paints()}
    </section>
    <section class="choices__interiors options">
    ${Interiors()}
</section>
    </article>
    <article>
            <button id="orderButton">Create Custom Order</button> 
            </article>
            <article class="customOrders">
          <h2>Custom Car Orders</h2>
              ${Orders()} 
              </article>
`
}