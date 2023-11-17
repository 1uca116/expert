import { Api } from 'api';
import { debounce } from 'lodash';
import { makeAutoObservable } from 'mobx';

const defaultDebounceMs = 800;

export type SearchFieldValue = {
  objectType: 'task' | 'profession' | 'name';
  name?: string;
  profession?: string;
  task?: string;
  id: number;
  slug: string;
};

export class SearchStore {
  constructor(private api: Api<unknown>) {
    makeAutoObservable(this);
  }

  private searchDebounced = debounce(
    async (value: string, callback: (data: SearchFieldValue[]) => void) => {
      try {
        const result = await this.fetch(value);

        callback(result ?? []);
      } catch {
        callback([]);
      }
    },
    defaultDebounceMs
  );

  async search(value: string, callback: (data: SearchFieldValue[]) => void) {
    this.searchDebounced(value, callback);
  }

  private async fetch(value: string) {
    // @ts-ignore
    const result = await this.api.search.searchEverything(value);
    // @ts-ignore
    return result.data.items?.map((x) => ({
      name: x.name,
      profession: x.profession,
      task: x.task,
      slug: x.slug,
      objectType: x.objectType,
    }));
  }
}
