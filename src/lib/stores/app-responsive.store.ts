import { derived, writable } from 'svelte/store';

interface DeviceState {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}

const initialState: DeviceState = {
    isMobile: false,
    isTablet: false,
    isDesktop: false
};

function createAppResponsiveStore() {
    const { subscribe, set } = writable(initialState);

    const handleMediaQueryChange = (mediaQueryList: Record<string, MediaQueryList>) => {
        set({
            isMobile: mediaQueryList.mobile.matches,
            isTablet: mediaQueryList.tablet.matches,
            isDesktop: mediaQueryList.desktop.matches
        });
    };

    if (typeof window !== 'undefined') {
        const mediaQueryList: Record<string, MediaQueryList> = {
            mobile: window.matchMedia('(max-width: 767px)'),
            tablet: window.matchMedia('(min-width: 768px) and (max-width: 1024px)'),
            desktop: window.matchMedia('(min-width: 1025px)')
        };

        for (const key in mediaQueryList) {
            mediaQueryList[key].addEventListener('change', () => handleMediaQueryChange(mediaQueryList));
        }

        handleMediaQueryChange(mediaQueryList);
    }

    return {
        subscribe
    };
}

export const appResponsiveStore = createAppResponsiveStore();



export const appResStatus = derived(
    appResponsiveStore,
    ($appResponsiveStore) => {

        let deviceState = 'web_large';

        if ($appResponsiveStore.isTablet) {
            deviceState = 'tablet';
        }

        if ($appResponsiveStore.isMobile) {
            deviceState = 'mobile';
        }

        return deviceState;
    }
);
