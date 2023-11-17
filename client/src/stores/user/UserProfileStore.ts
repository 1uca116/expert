import { Api } from 'api';
import { makeAutoObservable } from 'mobx';

export interface SocialLinks {
  facebook?: string | null;
  instagram?: string | null;
  telegram?: string | null;
}

export interface FeedBack {
  from: string;
  date: number;
  comment: string;
  reaction: 'like' | 'dislike'
}

export type UserProfileValue = {
  img: string;
  name: string;
  registrationDate: number;
  verified: boolean;
  gender: 'F' | 'M' | 'NO';
  email: string;
  phone: number;
  likes: number;
  socialLinks?: SocialLinks;
  feedBack: FeedBack[];
};

export class UserProfileStore {
  constructor(private api: Api<unknown>) {
    makeAutoObservable(this);
  }

  private async fetch(value: string) {
    // @ts-ignore
    const result = await this.api.search.searchEverything(value);
    // @ts-ignore
    return result.data.items?.map((x) => ({
      img: x.img,
      name: x.name,
      registration: x.registration,
      verified: x.verified,
      gender: x.gender,
      email: x.email,
      phone: x.phone,
      likes: x.likes,
      socialLinks: x.socialLinks,
      feedBack: x.feedBack,
    }));
  }
}
