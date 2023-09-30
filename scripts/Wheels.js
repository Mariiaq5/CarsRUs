import { getWheels } from "./database.js"
import { setWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            setWheels(parseInt(changeEvent.target.value))
        }
    }
)


export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheels">'
    html += '<option value="0">Select wheels</option>'

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.wheels}</option>`
    }

    html += "</select>"
    return html
}