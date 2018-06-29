# ion-event
Hybrid app for events/todo/notes/tasks
Based on: https://market.ionicframework.com/themes/todo-app-theme#description

## How to use this project
This project uses pretty much the same standard as Ionic CLI

### With the Ionic CLI:

```bash
$ sudo npm install -g ionic cordova
```

Then, to run it, cd into project and run:

```bash
$ ionic serve -b -lcs # -b doesn't open the browser by default, -l = liveloread, c = console.logs
```

To build for platforms, do:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

### Linting

```bash
$ npm lint
```

tslint core rules, codelyzer, eslint, ionic are used.

Tslint can be invoked with **--fix** but it doesn't seem to work reliably (certain imports are removed)


### Lazy loading components
Instead of using `MyComponent` everywhere there's a push to nav, or is referenced for tabs for instance, use `'MyComponent'` (as a string) instead.

