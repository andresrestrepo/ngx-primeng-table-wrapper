# NgxPrimengTableWrapper

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Primeng Table wrapper
Library to centralice primeng table

## Install

```bash
npm install ngx-primeng-table-wrapper
```

## Configure

* app.config.ts
```ts
   import {providePrimeNG} from 'primeng/config'
   import Aura from '@primeng/themes/aura'
   import {provideAnimationsAsync} from '@angular/platform-browser/animations/async'
   ...
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.fake-dark-selector',
          darkMode: false
        }
      }
    })
  ...
```

## Usage

* app.component.html
```html
  <app-table [value]="data"></app-table>
```
* app.component.ts
```ts
...
import { AppTableComponent } from 'ngx-primeng-table-wrapper'
...
@Component({
   ...
  imports: [AppTableComponent],
  ...
})
...

export class AppComponent {
...
   data = [
      {
         id: 226186,
         invoice_id: 29695,
         filename: 'filename1.txt',
         mimetype: 'application/pdf',
         filetype: 6,
         s3_key: null,
         status: null,
         mc_filetemplate_mapping_id: null,
         parent_file_id: null,
         combine_id: null,
      }
   ]
...
}

```




## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the library, run:

```bash
ng build ngx-primeng-table-wrapper
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

### Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. Navigate to the `dist` directory:
   ```bash
   cd dist/ngx-primeng-table-wrapper
   ```

2. Run the `npm publish` command to publish your library to the npm registry:
   ```bash
   npm publish
   ```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
