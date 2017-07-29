# ng-xray

Simple, tree-shakable, AoT, Universal and Web Worker friendly XRay component for Angular (4 and beyond). Easily see into your components.

# How to use?

```
$ npm i ng-xray --save
```

# API

## Outputs



## Inputs


# Integration

Should work out of the box with webpack, respectively angular-cli. All you need to do is to include `NgXRayModule`:

```ts
import { NgXRayModule } from 'ngxray';

@NgModule({
  imports: [NgXRayModule],
  ...
})
class AppModule {}
```

Use as component:

```html
<ng-xray>
  <!-- below will be x-rayed -->
  <div class="app-container">
    ...
  </div>
</ng-xray>
```


Or directive:

```html
<div ngxray>
  <!-- below will be x-rayed !-->
  <div class="app-container">
    ...
  </div>
</div>
```

## Angular Seed

```ts
// tools/config/project.ts

...
// Add packages (e.g. ngresizable)
let additionalPackages: ExtendPackages[] = [{
  name: 'ngxray',
  path: 'node_modules/ngxray/ngxray.bundle.js'
}];

this.addPackagesBundles(additionalPackages);
...
```

# License

MIT

