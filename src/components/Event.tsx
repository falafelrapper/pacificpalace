const Event = ({
  name,
  date,
  area,
  ticket_link,
}: {
  name: string
  area: string
  date: string
  ticket_link: string
}) => {
  return (
    <div className="flex z-30 items-center content-between bg-gray-700/90 rounded-lg p-3 my-5 lg:w-[35vw] w-[90vw] lg:min-w-[30rem]">
      <div className="mr-auto">
        <h3 className="text-3xl lg:text-4xl">{name}</h3>
        <p className="text-sm">
          {date} - {area}
        </p>
      </div>
      <a
        className="ease-in-out duration-200 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 rounded-3xl py-1 px-2 text-lg text-nowrap ml-auto min-w-fit"
        href={ticket_link}
        target="_blank"
      >
        View Details
      </a>
    </div>
  )
}

export default Event
