# VuePanels
VuePanels is a component library for VueJS that contains animated panels which you can use in your own projects.

$ npm install @thomaswilliammcclean/vuepanels --save

```javascript
<script>
  import "@thomaswilliammcclean/vuepanels";
</script>
```

## Included Components
### App Panel
A component which slides in from either side of the screen and allows you to place your own content.
```html
<app-panel enter-from="left">
  <p>TEST</p>
</app-panel>
```

### Confirmation Panel
A component which slides up from the bottom of the page, can be used for cookie banners or confirmations from an end user.
```html
<confirmation-panel :show="true">
  <p>This content goes inside the panel.</p>
</confirmation-panel>
```

### Notification Panel
Used to show dismissable notifications sliding down from the top of the screen
```html
<notification-panel :show="true">
  <p>This content goes inside the panel.</p>
</notification-panel>
```