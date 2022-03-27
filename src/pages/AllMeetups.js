import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
  
function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://meet-up-1a06e-default-rtdb.firebaseio.com/meetups.json').then(
      (response) => {
        return response.json();
      }
    ).then((data) => {
      const meetups = [];

      for(const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    })
  }, []);

  if(isLoading) {
    return <section>
      <h1>IS LOADING ...</h1>
    </section>
  }
return <section>
    <h1>AllMeetups</h1>
    <ul>
      <MeetupList meetups={loadedMeetups}/>
    </ul>
</section>;
}

export default AllMeetupsPage;