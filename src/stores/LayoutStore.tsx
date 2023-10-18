import { makeAutoObservable, runInAction } from 'mobx';
import { Id, toast, TypeOptions } from 'react-toastify';

const NOTIFICATION_AUTO_CLOSE_SEC = 10;

type SidebarData = {
  show: boolean;
  content: JSX.Element | null;
};

type ModalData = {
  show: boolean;
  content: JSX.Element | null;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
};

export class LayoutStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _sidebarData: SidebarData = {
    show: false,
    content: null,
  };

  modalData: ModalData = {
    show: false,
    content: null,
  };

  private _loaderSet = new Set<string>();

  get sidebarData() {
    return this._sidebarData;
  }

  get showPreloader() {
    return this._loaderSet.size > 0;
  }

  addLoading(id: string) {
    runInAction(() => {
      this._loaderSet.add(id);
    });

    return id;
  }

  removeLoading(id: string) {
    runInAction(() => {
      this._loaderSet.delete(id);
    });
  }

  toggleSidebar(show: boolean, content?: JSX.Element) {
    runInAction(() => {
      this._sidebarData = {
        show: show,
        content: content ?? null,
      };
    });

    this.updateBodyNoScroll();
  }

  toggleModal(
    show: boolean,
    params?: {
      content?: JSX.Element;
      title?: string;
      size?: 'sm' | 'md' | 'lg';
    }
  ) {
    runInAction(() => {
      this.modalData = {
        show: show,
        content: params?.content ?? null,
        title: params?.title,
        size: params?.size,
      };
    });

    this.updateBodyNoScroll();
  }

  addProgressNotification(content: JSX.Element | string) {
    return toast(content, {
      closeButton: false,
      closeOnClick: false,
      autoClose: false,
    });
  }

  finishProgressNotification({
    id,
    type,
    content,
  }: {
    id: Id;
    type: TypeOptions;
    content: JSX.Element | string;
  }) {
    toast.update(id, {
      render: content,
      type: type,
      isLoading: false,
      closeButton: true,
      autoClose: NOTIFICATION_AUTO_CLOSE_SEC * 1000,
    });
  }

  removeNotification(id: Id) {
    toast.dismiss(id);
  }

  private updateBodyNoScroll() {
    const noScroll =
      this.modalData.show === true || this.sidebarData.show === true;

    if (!noScroll) {
      document.body.classList.remove('no-scroll');
      return;
    }

    document.body.classList.add('no-scroll');
  }
}
