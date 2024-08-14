import Search from "@/components/search/Search";
import Filter from "@/components/search/Filter";
import HotelList from "@/components/hotel/HotelList";

const HotelListPage = ({
  searchParams: { destination, checkin, checkout, category },
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
          <HotelList
            destination={destination}
            checkin={checkin}
            checkout={checkout}
            category={refinedCategory(category)}
          />
        </div>
      </section>
    </>
  );
};

export default HotelListPage;
