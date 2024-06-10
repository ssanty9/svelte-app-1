<script lang="ts">
    import logo from '$lib/images/svelte-logo.svg';

    // Stores
    import { MENU_LIST, NOTIFICATION_LIST, appConfigStore } from '$lib/stores/app-opts.store';
    import { systemNotificationsStore } from '$lib/stores/app-notifications.store';

    // Components
    import NavBarLayout from '$lib/layouts/NavBarLayout.svelte';
    import IconButton, { Icon } from '@smui/icon-button';
    import { mdiBellOutline } from '@mdi/js';
    import Button, { Label } from '@smui/button';
    import { mdiBellBadgeOutline } from '@mdi/js';
</script>

<header>
    <NavBarLayout>
        <div slot="contentLeft" class="nav-bar left menu-title">
            <IconButton class="material-icons" on:click={() => appConfigStore.toggleSideBar(MENU_LIST)} size="button">menu</IconButton>
            <!-- style="width: 25px; height:25px" -->
            <a href="/">
                <IconButton size="button">
                    <img src={logo} alt="SvelteKit" />
                </IconButton>
            </a>
        </div>

        <div slot="contentRigth" class="nav-bar right login-setting">
            <IconButton class="material-icons mat-icons" on:click={() => appConfigStore.toggleSideBar(NOTIFICATION_LIST)}>
                {#if $systemNotificationsStore.notifications.length > 0}
                    <Icon tag="svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d={mdiBellBadgeOutline} />
                    </Icon>
                {/if}

                {#if $systemNotificationsStore.notifications.length == 0}
                    <Icon tag="svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d={mdiBellOutline} />
                    </Icon>
                {/if}
            </IconButton>
        </div>
    </NavBarLayout>
</header>

<style>
    /* header {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		padding: 0 16px;
		height: 39px;
		background-color: #fff;
		border-bottom: 1px solid #edf1f3;
	}
*/
    .menu-title {
        display: flex;
        gap: 10px;
    }
</style>
