const regionList = ["Africa", "Americas", "Asia", "Europe", "Oceania", "Polar"];
const regions = regionList.map((region, index) => {
  return { value: region, label: region };
});
export { regions };
