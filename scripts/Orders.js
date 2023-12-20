import { getOrders } from "./database.js"
import { getInteriors } from "./database.js"
import { getPaints } from "./database.js"
import { getTechnologies } from "./database.js"
import { getWheels } from "./database.js"


const interiors = getInteriors()
const paints = getPaints()
const technologies = getTechnologies()
const wheels = getWheels()

const buildOrderListItem = (order) => {
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    const foundWheels = wheels.find(
        (wheels) => {
            return wheels.id === order.wheelId
        }
    )
    const totalCost = (foundInterior.price + foundWheels.price + foundPaint.price + foundTechnology.price)
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    /* const date = new Date(order.timestamp) */
    return `<li>
    Order #${order.id} cost ${costString}
   </li>`
   /* was placed on ${date} */
}


export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}