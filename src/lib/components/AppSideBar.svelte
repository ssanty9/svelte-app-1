<script lang="ts">
    import { onMount } from 'svelte';

    // stores
    import { appConfigStore } from '$lib/stores/app-opts.store';
    import { systemNotificationsStore } from '$lib/stores/app-notifications.store';

    //Declarations
    export let isOpen: boolean;

    export let widthPercent = 25;

    export let colapseOpt = false;

    export let title = '';

    export let position = '';

    export let sideBarID = '';

    let colapseActivated = false;

    let sidebarWidth = 0;

    let sidebarPosition = 0;

    function updateOnMountSidebarWidth() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.style.width = `${sidebarWidth}%`;
        }
    }

    function closeSideBar(sideBarToClose: string) {
        appConfigStore.toggleSideBar(sideBarToClose);
    }

    $: {
        //Set up side bar width
        if (!isOpen) {
            sidebarPosition = -widthPercent;
        } else {
            sidebarPosition = 0;
        }
        sidebarWidth = widthPercent;
    }

    $: showColapseButton = () => {
        return colapseOpt && isOpen && colapseActivated;
    };

    $: enableBarTitle = title !== '';

    // $: colapseActivated = () => {
    //     return true;
    // };

    // Actualizar el ancho del sidebar cuando se monta el componente
    onMount(() => {
        isOpen = false;

        updateOnMountSidebarWidth();
    });
</script>

<!-- on:click={} -->
{#if showColapseButton()}
    <div class="circle" style="{position}: calc({sidebarWidth}% - 10px);"></div>
{/if}

<div class="sidebar {position}" id="sidebar" style="width: {sidebarWidth}%;{position}:{sidebarPosition}%">
    {#if enableBarTitle}
        <div class="side-bar-title title-actions-grid">
            <div id="title" class="title">{title}</div>
            <div id="actions" class="actions">
                <!-- <button class="collapse" on:click={() => (colapseActivated = !colapseActivated)}>collapse</button> -->

                <button class="clear" on:click={systemNotificationsStore.clearNotifications}>clear</button>

                <button class="close" on:click={() => closeSideBar(sideBarID)}>close</button>
            </div>
        </div>
    {/if}

    <div class="content">
        <slot />
    </div>
</div>

<style>
    .sidebar {
        height: 100vh;
        background-color: #fff;
        position: fixed;
        /* top: 40px; */
        top: unset;
        overflow-x: auto;
        border-left: 1px solid #edf1f3;
        box-shadow: 0 14px 16px #0003;
        z-index: 2;
    }

    .sidebar.right {
        transition: right 0.3s ease-in-out;
    }

    .sidebar.left {
        transition: left 0.3s ease-in-out;
    }

    .side-bar-title {
        padding: 0 16px;
    }

    .side-bar-title {
        height: 40px;
    }

    /* Circle */
    .circle {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: blue;
        position: absolute;
        top: 40px;
        z-index: 1000;
    }
</style>
