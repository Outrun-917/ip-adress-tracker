const $ipAddressInput = document.querySelector(".ip-address-input");
const $ipAdressSubmit = document.querySelector(".ip-adress-submit");
const $ipAddressInfoItemValue = document.querySelectorAll(
  ".ip-address-info-item-value"
);

const map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

function getIpInfo(ipAddress) {
  fetch("/data/data.json")
    .then((res) => res.json())
    .then((data) => {
      if (data.ip === ipAddress) {
        makeIpInfo(data);
      }
    })
    .catch((err) => {
      console.log("Une erreur est survenue", err);
    });
}

function makeIpInfo(data) {
  $ipAddressInfoItemValue[0].textContent = data.ip;
  $ipAddressInfoItemValue[1].textContent =
    data.location.city + ", " + data.location.country;
  $ipAddressInfoItemValue[2].textContent = "UTC " + data.location.timezone;
  $ipAddressInfoItemValue[3].textContent = data.isp;

  map.setView([data.location.lat, data.location.lng]);
}

$ipAdressSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const ipAddress = $ipAddressInput.value;

  getIpInfo(ipAddress);
});
