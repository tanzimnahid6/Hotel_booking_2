import { auth } from "@/auth";
import PaymentForm from "@/components/payment/PaymentForm";
import { getHotelById, getUserByEmail } from "@/database/queries";
import { getDayDifference } from "@/utils/data-utils";
import { redirect } from "next/navigation";

const PaymentPage = async ({ params: {id},searchParams: { checkin, checkout } }) => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const loggedInUser = await getUserByEmail(session?.user?.email);
  const hotelInfo = await getHotelById(id, checkin, checkout);

  const hasCheckInCheckOut = checkin && checkout;
  let cost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;
  if (hasCheckInCheckOut) {
    const days = getDayDifference(checkin, checkout);
    cost = cost * days;
  }

  return (
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <p className="text-gray-600 text-sm">
          You have picked <b>{hotelInfo?.name}</b> and base price is{" "}
          <b>${cost}</b>
        </p>
        <PaymentForm hotelInfo={hotelInfo} checkin={checkin} session={session} checkout={checkout} cost={cost} loggedInUser={loggedInUser} />
      </div>
    </section>
  );
};

export default PaymentPage;
