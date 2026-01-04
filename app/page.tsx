import EventCard from '@/components/EventCard'
import ExploreBTN from '@/components/ExploreBTN'
import events from '@/lib/constants' 

const Home = () => {
  return (
   <section>
    <h1 className='text-center'>The Hub for every dev <br /> You can't miss</h1>
    <p className='text-center mt-5'>Hackathons, Meetup, and Conference all in one place</p>
    <ExploreBTN />

    <div className='mt-20 space-y-7'>
     <h3>Featured Events</h3>

     <ul className='events'>
      {events.map((event) => (
        <li key={event.title} className='list-none'> 
        <EventCard {...event} />
        </li>
      ))}
     </ul>
    </div>
   </section>
  )
}

export default Home