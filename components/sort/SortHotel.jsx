"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SortHotel = () => {
  const [selected, setSelected] = useState("");

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const params = new URLSearchParams(searchParams);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
  };


  useEffect(() => {
    if (selected) {
      params.set("sortBy", selected);
    } else {
      params.delete("category");
    }
    replace(`${pathName}?${params}`);
  }, [params, pathName, replace, selected]);
  useEffect(() => {
    const selectedSort = params.get("sortBy");
    if (selectedSort) {
      setSelected(selectedSort);
    }
  }, [params]);
  return (
    <div>
      <h3 className="font-bold text-lg">Sort By</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        <label htmlFor="highToLow">
          <input
            type="radio"
            name="sortOrder"
            id="highToLow"
            value="highToLow"
            checked={selected === "highToLow"}
            onChange={handleChange}
          />
          Price High to Low
        </label>

        <label htmlFor="lowToHigh">
          <input
            type="radio"
            name="sortOrder"
            id="lowToHigh"
            value="lowToHigh"
            checked={selected === "lowToHigh"}
            onChange={handleChange}
          />
          Price Low to High
        </label>
      </form>
    </div>
  );
};

export default SortHotel;
