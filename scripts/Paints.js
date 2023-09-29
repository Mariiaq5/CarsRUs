import { getPaints } from "./database.js"

const paints = getPaints()


export const Paints = () => {
    return `<h2>Paints</h2>`
}