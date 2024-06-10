<script>
</script>

<nav class="nav-bar">
    <div class="left">
        <slot name="contentLeft">
            <!-- <div class="loading-background"></div> -->
        </slot>
    </div>

    <div class="right">
        <slot name="contentRigth">
            <!-- <div class="loading-background"></div> -->
        </slot>
    </div>
</nav>

<style>
    .nav-bar {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        padding: 0 16px;
        height: 39px;
        background-color: #fff;
        border-bottom: 1px solid #edf1f3;
    }

    .nav-bar .left,
    .nav-bar .right {
        display: flex;
        align-items: center;
    }
</style>
