import { User } from "../../types"

interface Props {
   user: User
}

export const UserInfo = ({ user }: Props) => {
   return (
      <table>
         <thead>
            <tr>
               <th>Username</th>
               <th>Phone number</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>{user.name}</td>
               <td>{user.phone}</td>
            </tr>
         </tbody>
      </table>
   )
}