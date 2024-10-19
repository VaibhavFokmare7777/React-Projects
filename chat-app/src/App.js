import Chat from "./chat/Chat";
import Detail from "./detail/Detail";
import Login from "./Login";
import List from "./list/List";
import Notification from "./Notification/Notification";


function App() {

  const user=true;
  return (
    <div className="container">
      {
        user?(
          <>
        <List/>
          <Chat/>
          <Detail/>
          </>
        )
        :(
          <Login/>
        )
      }
      
  <Notification/>
   
    
    </div>
  );
}

export default App;
