import { getAllHotels } from "@/database/queries";
import HotelCard from "./HotelCard";
import NoHotels from "./NoHotel";

const HotelList = async ({
  destination,
  checkin,
  checkout,
  category,
  sortBy,
  amenity
}) => {
  const allHotels = await getAllHotels(
    destination,
    checkin,
    checkout,
    category,
    sortBy,
    amenity
  );

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {allHotels.length > 0 ? (
          allHotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotelInfo={hotel}
              checkin={checkin}
              checkout={checkout}
            />
          ))
        ) : (
          <NoHotels></NoHotels>
        )}
      </div>
    </div>
  );
};

export default HotelList;
