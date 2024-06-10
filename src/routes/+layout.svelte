<script lang="ts">
    // stores
    import { MENU_LIST, NOTIFICATION_LIST, appConfigStore, sideBarResponsiveWidth, isSideBarOpened } from '$lib/stores/app-opts.store';
    import { appResStatus } from '$lib/stores/app-responsive.store';
    import { systemNotificationsStore } from '$lib/stores/app-notifications.store';

    //Components
    import AppSideBar from '$lib/components/AppSideBar.svelte';
    import MenuHeader from '$lib/components/MenuHeader.svelte';
    import Header from './Header.svelte';
    import './styles.css';
    import SystemNotifications from '$lib/components/SystemNotifications.svelte';
</script>

<div class="app {$appResStatus}">
    <Header />

    <main id="app-content" class="main-content">
        <AppSideBar
            position="left"
            widthPercent={sideBarResponsiveWidth($appResStatus)}
            sideBarID={MENU_LIST}
            isOpen={isSideBarOpened($appConfigStore.sideBarsOpened, MENU_LIST)}
        >
            <MenuHeader />
        </AppSideBar>

        <!-- Sidebar options -->
        <AppSideBar
            position="right"
            sideBarID={NOTIFICATION_LIST}
            widthPercent={sideBarResponsiveWidth($appResStatus)}
            isOpen={isSideBarOpened($appConfigStore.sideBarsOpened, NOTIFICATION_LIST)}
            colapseOpt={true}
            title="Notifications"
        >
            <SystemNotifications notifications={$systemNotificationsStore?.notifications} />
        </AppSideBar>

        <slot />
    </main>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;

        width: 100%;
        box-sizing: border-box;
    }
</style>
