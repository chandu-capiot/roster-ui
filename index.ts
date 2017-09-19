import { NgModule } from '@angular/core';
import { RoasterComponent } from './src/roaster/roaster.component';

export * from './src/roaster/roaster.component';

@NgModule({
    declarations: [
        RoasterComponent
    ],
    exports: [
        RoasterComponent
    ]
})
export class RoasterModule { }
