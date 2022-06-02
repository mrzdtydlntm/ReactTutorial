import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-6256c-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        history.replace('/')
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section>
      <h1>Add New Meetups</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
