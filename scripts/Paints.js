import { getPaints } from "./database.js"
import { setPaints } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paints") {
            setPaints(parseInt(changeEvent.target.value))
        }
    }
)


export const Paints = () => {
    let html = "<h2>Paints</h2>"

    html += '<select id="paints">'
    html += '<option value="0">Select paints</option>'

    for (const color of paints) {
        html += `<option value="${color.id}">${color.color}</option>`
    }

    html += "</select>"
    return html
}

