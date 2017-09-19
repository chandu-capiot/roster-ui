import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { RoastrComponent } from './src/app/roastr.component';

export * from './src/app/roastr.component';

@NgModule({
    declarations: [
        RoastrComponent
    ],
    exports: [
        RoastrComponent
    ]
})
export class RoastrModule { }
