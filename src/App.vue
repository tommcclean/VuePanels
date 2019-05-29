<template>
    <div id="vuepanels">
        <section>
            <h2>App Panel</h2>
            <p>Use the App Panel to configure settings or hold a navigation menu.</p>
            <div class="trigger-button" @click="showAppPanelLeft = !showAppPanelLeft">
                <span>Slide in from left</span>
            </div>
            <div class="trigger-button" @click="showAppPanelRight = !showAppPanelRight">
                <span>Slide in from right</span>
            </div>

            <app-panel :show="showAppPanelLeft" v-on:close="showAppPanelLeft = false">
                <div class="trigger-button" @click="showAppPanelLeft = false">
                    <span>Close app panel</span>
                </div>
            </app-panel>
            <app-panel
                :show="showAppPanelRight"
                enter-from="right"
                v-on:close="showAppPanelRight = false"
            >
                <div class="trigger-button" @click="showAppPanelRight = false">
                    <span>Close app panel</span>
                </div>
            </app-panel>
        </section>

        <section>
            <h2>Notification Panel</h2>
            <p>Use the notification panel to give the user some dismissable information.</p>
            <div class="trigger-button" @click="showNotificationPanel = !showNotificationPanel">
                <span>Show notification panel</span>
            </div>

            <notification-panel
                :show="showNotificationPanel"
                v-on:close="showNotificationPanel = false"
            >
                <div class="trigger-button" @click="showNotificationPanel = false">
                    <span>Close notification panel</span>
                </div>
            </notification-panel>
        </section>
    </div>
</template>

<script>
import "@/components/index.js";

export default {
    name: "vuepanels",
    data() {
        return {
            showAppPanelLeft: false,
            showAppPanelRight: false,
            showNotificationPanel: false
        };
    }
};
</script>

<style scoped>
#vuepanels {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

section {
    border-bottom: 1px solid black;
    background-color: whitesmoke;
    padding: 10px;
    padding-bottom: 20px;
}

section::after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
}

section .left {
    float: left;
    width: calc((100% - 44px) / 2);
    padding: 10px;
    border: 1px dashed gray;
}

section .right {
    float: right;
    width: calc((100% - 44px) / 2);
    padding: 10px;
    border: 1px dashed gray;
}

section .relative {
    position: relative;
    width: 90%;
    height: 200px;
    margin: 0 auto;
    background-color: red;
}

section .trigger-button {
    border: 1px solid black;
    cursor: pointer;
    display: inline-block;
    padding: 10px;
    margin: 10px;
}
</style>
