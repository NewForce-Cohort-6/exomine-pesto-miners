import { buildGovernors } from "./governors.js"

export const Exomine = () => {
    const html = `
    <h1 class="header--title">Solar System Mining</h1>
        <section class="main--row1">
            <article class="row1--options">
                ${buildGovernors()}
                {buildFacilities()}
            </article>
            <article class="row1--colony-materials">
                <h2>Colony Minerals</h2>
                {renderColonyMineralHtml()}
            </article>
        </section>
        <section class="main--row2">
            <article class="row2--facility-materials">
                <h2>Facility Minerals</h2>
                {renderFacilityMinerals()}
            </article>
            <article class="row2--cart">
                <h2>Space Cart</h2>
                <button id="cart--purchase">Purchase Mineral</button>
            </article>
        </section>
    `
    return html
}

export const buildFacilities = () => {
    return '<input type="radio" value="0"/>'
}
export const renderColonyMineralHtml = () => {
    console.log("colony minerals")
}
export const renderFacilityMinerals = () => {
    console.log("facility minerals")
}