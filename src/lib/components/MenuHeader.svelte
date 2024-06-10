<script lang="ts">
    /** Stores*/
    import { appResStatus } from '$lib/stores/app-responsive.store';

    import MenuNavItem from '$lib/layouts/MenuNavItem.svelte';
    import { MENU_LIST, appConfigStore } from '$lib/stores/app-opts.store';

    let menuItems: any[] = [
        { icon: 'icon1', title: 'Locations', desc: 'Review the facts for locations and confirm Geo features', link: '/' },
        { icon: 'icon2', title: 'Data Sources', desc: 'desc2', link: '/data-sources' },
        { icon: 'icon3', title: 'Business Management', desc: 'View and manage new business requests, or add new businesses', link: '/business' }
    ];

    function closeSideBar(sideBarToClose: string) {
        appConfigStore.toggleSideBar(sideBarToClose);
    }
</script>

<div class="header-menu-content {$appResStatus}">
    {#each menuItems as item, i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div id="menu-item-{i}" class="menu-item bottom-separator" on:click={() => closeSideBar(MENU_LIST)}>
            <a href={item?.link}>
                <MenuNavItem>
                    <span slot="icon" id="menu-item-{i}" class="item-{i}">{item?.icon}</span>

                    <span slot="title" id="menu-item-{i}" class="item-{i}">{item?.title}</span>

                    <span slot="desc" id="menu-item-{i}" class="item-{i}">{item?.desc}</span>
                </MenuNavItem>
            </a>
        </div>
    {/each}
</div>

<style>
    a {
        text-decoration: none;
        color: inherit;
        display: contents;
    }

    .header-menu-content .menu-item {
        padding: 10px 16px;
    }

    /* .web_large.header-menu-content {
        background-color: red;
    }

    .tablet.header-menu-content {
        background-color: blue;
    }

    .mobile.header-menu-content {
        background-color: green;
    } */
</style>
