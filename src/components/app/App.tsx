import { useState } from "react"
import { User } from "../../types"
import { UserInfo } from "../userInfo"
import { Button } from "../button"

export const App = () => {
   const [item, setItem] = useState<User | null>(null)

   return (
      <div>
         <header>Get a random user</header>
         <Button setItem={setItem} />
         {item ? <UserInfo user={item} /> : null}
      </div>
   );
}