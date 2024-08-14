import Search from "@/components/search/Search";
import Filter from "@/components/search/Filter";
import HotelList from "@/components/hotel/HotelList";
import { Suspense } from "react";
import Loading from "@/components/Ui/Loading";

const HotelListPage = ({
  searchParams: { destination, checkin, checkout, category, sortBy, amenity },
}) => {
  const refinedCategory = (category) => {
    const decodedCategory = decodeURI(category);
    if (decodedCategory == "undefined") {
      return "";
    }
    return decodedCategory;
  };

  return (
    <>
      <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
        <div className="container items-center py-12 ">
          <Search
            fromList={true}
            destination={destination}
            checkin={checkin}
            checkout={checkout}
          />
        </div>
      </section>
      <section className="py-12">
        <div className="container grid grid-cols-12">
          <Filter />
          <Suspense fallback={<Loading></Loading>}>
            <HotelList
              destination={destination}
              checkin={checkin}
              checkout={checkout}
              category={refinedCategory(category)}
              sortBy={sortBy}
              amenity={amenity}
            />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default HotelListPage;
