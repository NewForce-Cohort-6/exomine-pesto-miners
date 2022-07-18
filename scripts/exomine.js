export const Exomine = () => {
    const html = `
    <h1>Solar System Mining</h1>
        <section class="row-1">
            <article class="dropdown-container">
                ${buildGovs()}
                ${buildFacilities()}
            </article>
            <article class="colony-materials">
                <h2>Colony Minerals</h2>
                ${renderColonyMineralHtml()}
            </article>
        </section>
        <section class="row-2">
            <article class="facility-materials">
                <h2>Facility Minerals</h2>
                ${renderFacilityMinerals()}
            </article>
            <article class="cart">
                <h2>Space Cart</h2>
                <button id="purchase">Purchase Mineral</button>
            </article>
        </section>
    `
    return html
}

export const buildGovs = () => {
    return '<input type="radio" value="0"/>'

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