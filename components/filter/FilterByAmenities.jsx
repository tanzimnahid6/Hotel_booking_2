"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterByAmenities = () => {
  const [amenities, setAmenities] = useState([]);

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const params = new URLSearchParams(searchParams);

  const handleChange = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;

    if (checked) {
      setAmenities((prev) => [...prev, name]);
    } else {
      setAmenities((prev) => prev.filter((amenity) => amenity !== name));
    }
  };

  useEffect(() => {
    const amenity = params.get("amenity");
    if (amenity) {
      const ame = amenity.split("|");
      setAmenities(ame);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (amenities.length > 0) {
      params.set("amenity", amenities.join("|"));
    } else {
      params.delete("amenity");
    }
    replace(`${pathName}?${params.toString()}`);
  }, [amenities, params, pathName, replace]);

  return (
    <div>
      <h3 className="font-bold text-lg">Amenities</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        <label htmlFor="wifi">
          <input
            type="checkbox"
            checked={amenities.includes("wifi")}
            name="wifi"
            onChange={handleChange}
            id="wifi"
          />
          Wi-fi
        </label>

        <label htmlFor="swimmingPool">
          <input
            type="checkbox"
            onChange={handleChange}
            checked={amenities.includes("swimmingPool")}
            name="swimmingPool"
            id="swimmingPool"
          />
          Swimming Pool
        </label>
        <label htmlFor="gym">
          <input
            type="checkbox"
            onChange={handleChange}
            checked={amenities.includes("gym")}
            name="gym"
            id="gym"
          />
          Gymnasium
        </label>
        <label htmlFor="spa">
          <input
            type="checkbox"
            onChange={handleChange}
            checked={amenities.includes("spa")}
            name="spa"
            id="spa"
          />
          Spa
        </label>
      </form>
    </div>
  );
};

export default FilterByAmenities;
