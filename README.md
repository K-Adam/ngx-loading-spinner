

# ngx-loading-spinner

Angular 8+ loader spinner. It can be used with two simple methods, `.show()` and `.hide()`. An example can be found in the `/projects/spinner-test`.

## Setup

Install library ( Angular 10+ ):

```
npm install @k-adam/ngx-loading-spinner --save
```

If you are using an older version of Angular x (8/9), then install it this way:

```
npm install @k-adam/ngx-loading-spinner@1.x --save
```

Import module to your applications main module:

```
import { NgxLoadingSpinnerModule } from '@k-adam/ngx-loading-spinner';
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
import { NgxLoadingSpinnerService } from '@k-adam/ngx-loading-spinner';
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

### Parameters

All the parameters are optional.
| Name | Type | Default | Description
|--|--|--|--|
| timeout | number | 10000 ms | The spinner will be hidden automatically after the given time |
| threshold | number  | 500 ms | The spinner will be visible only, if the time between calling show() and hide() is more than **threshold** |
| zIndex | number  | 100 | The z-index property of the spinner overlay element |
| loadingText | string |  | The displayed text under the spinner |
| template | string |  | The spinner can be replaced with HTML text |

Example:

```
<ngx-loading-spinner
  [threshold]="250"
  [timeout]="20000"
  [loadingText]="'Loading...'"
></ngx-loading-spinner>
```
