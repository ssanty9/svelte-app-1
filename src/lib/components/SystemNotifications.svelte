<script lang="ts">
    /** Stores*/
    import { appResStatus } from '$lib/stores/app-responsive.store';

    import MenuNavItem from '$lib/layouts/MenuNavItem.svelte';
    import type { LSNotification } from '$lib/stores/app-notifications.store';

    export let notifications: LSNotification[] = [];
</script>

<div class="system-notitications-content {$appResStatus}">
    {#each notifications as item, i}
        <div id="menu-item-{i}" class="menu-item bottom-separator">
            <MenuNavItem>
                <span slot="icon" id="menu-item-{i}" class="item-{i}">{item?.Type}</span>

                <span slot="title" id="menu-item-{i}" class="item-{i}">{item?.Title}</span>

                <span slot="desc" id="menu-item-{i}" class="item-{i}">{item?.Desc}</span>
            </MenuNavItem>
        </div>
    {/each}
</div>

<style>
    .system-notitications-content .menu-item {
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
