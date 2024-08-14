import FilterByAmenities from "../filter/FilterByAmenities";
import FilterByCategory from "../filter/FilterByCategory";
import FilterByRange from "../filter/FilterByRange";
import SortHotel from "../sort/SortHotel";

const Filter = () => {
  return (
    <>
      <div className="col-span-3 space-y-4">
        <SortHotel></SortHotel>

        <FilterByRange></FilterByRange>

        <FilterByCategory></FilterByCategory>

        <FilterByAmenities></FilterByAmenities>
      </div>
    </>
  );
};

export default Filter;
