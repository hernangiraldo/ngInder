import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SinginComponent } from './components/singin/singin'
import { SingupComponent } from './components/singup/singup'

@NgModule({
    declarations: [
        SinginComponent,
        SingupComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        SinginComponent,
        SingupComponent
    ]
})
export class SharedModule {}
