# ngx-loading-spinner

Angular 8+ loader spinner. It can be used with two simple methods, `.show()` and `.hide()`. An example can be found in the `/projects/spinner-test`.

## Setup

Import module to your applications main module:

```
import { NgxLoadingSpinnerModule } from 'ngx-loading-spinner';
```

Import it in your `NgModule`:

```
imports: [ NgxLoadingSpinnerModule.forRoot() ]
```

Place the component somewhere in your root level component:

```
<ngx-loading-spinner></ngx-loading-spinner>
```

## Use

Import `NgxLoadingSpinnerService` to the components where you want to control the spinner:

```
import { NgxLoadingSpinnerService } from 'ngx-loading-spinner';
```

Inject dependency:
```
    constructor(
        private spinnerService: NgxLoadingSpinnerService
    ) { }
```

Use show() and hide() method to control the loading spinner:
```
this.spinnerService.show();
// ...
this.spinnerService.hide();
```
