import { getInteriors } from "./database.js"
import { setInteriors } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interiors") {
            setInteriors(parseInt(changeEvent.target.value))
        }
    }
)


export const Interiors = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select id="interiors">'
    html += '<option value="0">Select interiors</option>'

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.interiorStyle}</option>`
    }

    html += "</select>"
    return html
}
