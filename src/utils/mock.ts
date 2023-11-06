import { SearchFieldValue } from '../stores/SearchStore';
import {UserProfileValue} from '../stores/user/UserProfileStore'

export const Test: SearchFieldValue[] = [
  {
    objectType: 'name',
    name: 'Milica Jovanovich',
    profession: 'Tailor',
    id: 0,
    slug: 'test',
  },
  {
    objectType: 'profession',
    name: 'Jovana Ivanchich',
    profession: 'Nanny',
    id: 1,
    slug: 'test',
  },
  {
    objectType: 'profession',
    name: 'Milan Manchich',
    profession: 'Translator',
    id: 2,
    slug: 'test',
  },
  {
    objectType: 'task',
    task: 'Cleaning',
    id: 3,
    slug: 'test',
  },
];


export const UserProfile : UserProfileValue[] = [{
  img: '/images/user-empty.png',
  name: 'Jovana Jorjevic',
  registrationDate: 1667504269,
  verified: true,
  gender: 'F',
  email: 'test@mail.ru',
  phone: 9687763751,
  likes: 2,
  socialLinks: {
    instagram: 'https://www.instagram.com/bn_sj2013/',
  },
  feedBack: [
    {
      from: 'Nina Petrovic',
      date: 1670096269,
      comment: 'responsible',
      reaction: 'like',
    }
  ]
}]
