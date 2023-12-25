import TicketCard from "./(componends)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const Dashboard = async () => {


  const data = await getTickets();

  // Make sure we have tickets needed for production build.
  if (!data?.tickets) {
    return <p>No tickets.</p>;
  }


  const tickets = data.tickets;

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];


  return (
    <div className="p-5">
      <div>
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div className=" mb-4" key={categoryIndex}>
            <h2 className="text-2xl font-bold">{uniqueCategory}</h2>

            <div className="lg:grid grid-cols-2 xl:grid-cols-4">
              {tickets.fliter((ticket) => ticket.category === uniqueCategory).map((filterTicket, _index) => (
                <TicketCard key={_index} id={_index} ticket={filterTicket} />
              ))}
            </div>
          </div>
        ))}
        {/* <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div> */}
      </div>
    </div>
  )
}

export default Dashboard;
