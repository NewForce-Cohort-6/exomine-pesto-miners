import { buildGovernors } from "./governors.js"
import { buildFacilities, getFacilityMinerals } from "./facilities.js"
import { emptyString } from "./minerals.js"

export const Exomine = () => {
    const html = `
    <h1 class="header--title">Solar System Mining</h1>
        <section class="main--row1">
            <article class="row1--options">
                ${buildGovernors()}
                ${buildFacilities()}
            </article>
            <article class="row1--colony-minerals">
                <h2 id="colony-minerals--header">Colony Minerals</h2>
                <article class="colony-minerals">
                    {renderColonyMineralHtml()}
                </article>
            </article>
        </section>
        <section class="main--row2">
            <article class="row2--facility-minerals">
                <h2>Facility Minerals</h2>
                <article class="facility-minerals">

                </article>
            </article>
            <article class="row2--cart">
                <h2>Space Cart</h2>
                <div class="cart--item"></div>
                <button id="cart--purchase">Purchase Mineral</button>
            </article>
        </section>
    `
    return html
}

export const renderColonyMineralHtml = () => {
    console.log("colony minerals")
}
export const renderFacilityMinerals = () => {
    console.log("facility minerals")
}