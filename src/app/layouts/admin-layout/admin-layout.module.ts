import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {TranscriptComponent} from '../../transcript/transcript.component';
import {TranscriptDialogComponent} from '../../transcript/transcript-dialog'
import {ManageRequestComponent} from '../../manage-request/manage-request.component'
import {RequestDialogComponent} from '../../manage-request/request-dialog';
import {TranscriptService} from '../../transcript-services/transcript-service.service';
import {HttpModule} from '@angular/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DatePipe} from '@angular/common';


import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatNativeDateModule,
    MatAutocompleteModule
} from '@angular/material';
import {RequestService} from '../../request-services/request.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatDialogModule,
        ReactiveFormsModule,
        HttpModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
    ],
    declarations: [
        TranscriptComponent,
        TranscriptDialogComponent,
        ManageRequestComponent,
        RequestDialogComponent
    ],
    entryComponents: [
        TranscriptDialogComponent,
        RequestDialogComponent
    ],
    providers: [
        TranscriptService,
        DatePipe,
        RequestService
    ]
})

export class AdminLayoutModule {
}
