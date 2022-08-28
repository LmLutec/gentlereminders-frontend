import axios from "axios";

function GetReminder() {
  function fetchReminders() {
    axios
      .get("http://localhost:3000/reminders")
      .then((res) => console.log(res));
  }

  return (
    <div className="background">
      <div className="dialogBox">
        <button onClick={fetchReminders}>Get Reminder</button>
      </div>
    </div>
  );
}
export default GetReminder;
