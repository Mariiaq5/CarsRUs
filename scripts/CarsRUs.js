import { Paints } from "./Paints.js";
import { Interiors } from "./Interiors.js";
import { Technologies } from "./Technologies.js";
import { Wheels } from "./Wheels.js";


export const carsRUs = () => {
    return `
    <h1>Cars R Us</h1>

    <article class="choices">
        <section class="choices__tech options">
            ${Technologies()}
        </section>
        </section>
    </article>
`
}