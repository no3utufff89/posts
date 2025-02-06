//DB type
export interface IPost {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    photo?: string;
}

export interface DefaultStateType {
     error?: Error | null;
     posts?: IPost[];
     loading: boolean;
     hasError: boolean;
}
export interface SettingsType {
    isModalOpen: boolean;
    currentModalTitle?: 'Редактировать' | 'Удалить' | null;
    currnetPostData?: IPost | null;
    modalType?: 'edit' | 'create' | 'info' | 'del';
  }