import { SearchFieldValue } from '../stores/SearchStore';
import { UserProfileValue } from '../stores/user/UserProfileStore';
import { SingleSelectValue } from '../components/core/single-select';

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
    slug: 'nanny',
  },
  {
    objectType: 'profession',
    name: 'Milan Manchich',
    profession: 'Translator',
    id: 2,
    slug: 'translator',
  },
  {
    objectType: 'task',
    task: 'Cleaning',
    id: 3,
    slug: 'cleaning',
  },
];

export const UserProfile: UserProfileValue[] = [
  {
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
      },
    ],
  },
];

export const ServiceType: SingleSelectValue[] = [
  {
    label: 'Tutors',
    value: 'tutors',
  },
  {
    label: 'Repair experts',
    value: 'repair exports',
  },
  {
    label: 'Beauty masters',
    value: 'beauty masters',
  },
  {
    label: 'Freelancers',
    value: 'freelancers',
  },
  {
    label: 'Accountants and lawyers',
    value: 'accountants and lawyers',
  },
  {
    label: 'Sports trainers',
    value: 'sports trainers',
  },
  {
    label: 'Household staff',
    value: 'household staff',
  },
  {
    label: 'Veterinarians',
    value: 'veterinarians',
  },
  {
    label: 'Driving instructors',
    value: 'driving instructors',
  },
  {
    label: 'Various specialists',
    value: 'various specialists',
  },

];
