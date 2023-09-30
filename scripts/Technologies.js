import { getTechnologies } from "./database.js"
import { setTechnologies } from "./database.js"

const technologies = getTechnologies()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            setTechnologies(parseInt(changeEvent.target.value))
        }
    }
)


export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    for (const tech of technologies) {
        html += `<option value="${tech.id}">${tech.package}</option>`
    }

    html += "</select>"
    return html
}