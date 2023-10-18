import { User } from "./user.models";


export interface Publication{
  _id: string,
  description: string,
  typePublication: string,
  content: string,
  id_user: User,
  id_event: number
}
