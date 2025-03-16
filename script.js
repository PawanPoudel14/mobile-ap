// Toggle mobile menu
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

// Generate random stock gainers & losers
function generateStockData() {
    const stocks = ["ABC", "XYZ", "LMN", "PQR", "DEF", "GHI", "JKL", "MNO", "RST", "UVW"];
    const gainers = stocks.sort(() => 0.5 - Math.random()).slice(0, 10);
    const losers = stocks.sort(() => 0.5 - Math.random()).slice(0, 10);

    document.getElementById("gainers-list").innerHTML = gainers.map(stock => `<li>${stock} +${Math.random().toFixed(2)}%</li>`).join("");
    document.getElementById("losers-list").innerHTML = losers.map(stock => `<li>${stock} -${Math.random().toFixed(2)}%</li>`).join("");
}

// Run stock generator on load
window.onload = generateStockData;