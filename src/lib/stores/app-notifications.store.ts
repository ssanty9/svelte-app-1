import { writable } from 'svelte/store';



export interface LSNotification {
    Type: string;
    Title: string;
    Desc: string;
}


export interface AppNotificationState {
    notifications: LSNotification[];
}


const initialState: AppNotificationState = {
    notifications: []
}


function createNotificationsStore() {

    const { subscribe, set, update } = writable(initialState);


    return {
        subscribe,
        addNotification: ((notification: LSNotification) => update((state: AppNotificationState) => {

            state.notifications.push(notification);


            return {
                ...state
            }
        })),

        clearNotifications: (() => update((state: AppNotificationState) => {


            state.notifications = [];

            return {
                ...state
            }
        })),

        reset: (() => set(initialState))
    }
}


export const systemNotificationsStore = createNotificationsStore();