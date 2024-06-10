import { writable } from 'svelte/store';


export const MENU_LIST = 'menu';

export const NOTIFICATION_LIST = 'notification';

export const ITEM_INFO = 'item_info';

export const APP_SIDEBARS_LIST = [MENU_LIST, NOTIFICATION_LIST, ITEM_INFO]


export interface AppConfigState {
    sideBarsOpened: string[];
}


const initialState: AppConfigState = {
    sideBarsOpened: []
}



function createAppConfigStore() {
    const { subscribe, set, update } = writable(initialState);


    return {
        subscribe,
        toggleSideBar: ((sideBarToToggle: string) => update((state: AppConfigState) => {

            const existsBarOpened = state.sideBarsOpened.some((sideBar) => sideBar === sideBarToToggle)

            if (existsBarOpened) {
                state.sideBarsOpened = state.sideBarsOpened.filter((val) => val !== sideBarToToggle)
            } else {
                state.sideBarsOpened.push(sideBarToToggle);
            }

            return {
                ...state
            }
        })),


        reset: (() => set(initialState))
    }
}

export const appConfigStore = createAppConfigStore()




/**
     *
     * @param sideBarsOpened sidebars currently opened
     * @param sideBarID sidebar to toggle
     */
export function isSideBarOpened(sideBarsOpened: string[], sideBarID: string): boolean {
    return sideBarsOpened.some((val) => val === sideBarID);
}


/**
     *
     * @param responsiveStatus determine which device we are using (mobile, tablet, monitor desktop)
     */
export function sideBarResponsiveWidth(responsiveStatus: string) {
    let width = 25;

    switch (responsiveStatus) {
        case 'tablet':
            width = 50;
            break;
        case 'mobile':
            width = 100;
            break;
    }

    return width;
}