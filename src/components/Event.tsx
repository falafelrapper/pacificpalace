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
    <div className="flex z-30 items-center">
      <div className="mr-40">
        <h3 className="text-4xl">{name}</h3>
        <p className="text-sm">
          {date} - {area}
        </p>
      </div>
      <a
        className="bg-orange-500 rounded-3xl py-1 px-2 text-lg"
        href={ticket_link}
        target="_blank"
      >
        Purchase Tickets
      </a>
    </div>
  )
}

export default Event
