import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

import { MenuService } from './services';

/**
 * Core module
 */
@NgModule({
  imports: [],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [MenuService]
    };
  }

  /**
   * Constructor for Core module
   * @param parentModule
   */
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
