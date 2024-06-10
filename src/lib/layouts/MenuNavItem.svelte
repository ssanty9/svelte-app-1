<script>
</script>

<div class="menu-nav-item">
    <div class="icon">
        <slot name="icon" />
    </div>

    <div class="item-desc">
        <div class="title">
            <slot name="title" />
        </div>
        <div class="desc">
            <slot name="desc" />
        </div>
    </div>
</div>

<style>
    .menu-nav-item {
        display: grid;
        grid-template-columns: auto 1fr;
        align-content: center;
        gap: 20px;
    }

    .menu-nav-item .icon {
        align-content: center;
    }

    .menu-nav-item .item-desc {
        display: grid;
        gap: 10px;
    }
</style>
