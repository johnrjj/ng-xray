import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgXRayComponent } from './ngxray.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgXRayComponent],
  exports: [NgXRayComponent],
})
export class NgXRayModule {

  /* optional: in case you need users to override your providers or providers need to be singletons */

}
