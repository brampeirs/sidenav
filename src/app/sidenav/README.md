# sidenav

### selection state logic

The selection state logic is handled by the sidenav as follows:

1. the `sidenav-item` placed on a `li` gets the `routerLink` directive of its child using `contentChild` as it has no direct access to it since it's not passed as an `input` but through `content projection`.
2. It then calls `this.router.isActive(routerLink.route.urlTree)` which returns whether the url is activated. We use `subset` as `matchOptions` so it also returns active if a child route is the active route.
   So if `/home/detail/123` then below sidenav-item is set to active.

```
<li sidenav-item>
  <a [routerLink]="['/home']">Home</a>
</li>
```

if a sidenav item is placed inside a menu, the menu needs to know if one of its sidenav-items is active.
We use a service the `sidenav-menu` service for this. We provide it on component level of `sidenav-menu`, so each `sidenav-menu` has it's own instance. The `service` has a map and each `sidenav-item` populates this map with it's state when it determines if it's route is active or not. In the `sidenav-menu` component we then ask the service if one of it's `sidenav-items` is active.

```
<li sidenav-menu title="Menu 1">
    <ul>
      <li sidenav-item>
        <a [routerLink]="['/ios']">ios</a>
      </li>
      <li sidenav-item>
        <a [routerLink]="['/android']">android</a>
      </li>
    </ul>
  </li>
```
