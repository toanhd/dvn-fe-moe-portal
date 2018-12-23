import {Routes} from '@angular/router';
import {TranscriptComponent} from '../../transcript/transcript.component';
import {ManageRequestComponent} from '../../manage-request/manage-request.component';


export const AdminLayoutRoutes: Routes = [
    {path: 'transcript', component: TranscriptComponent},
    {path: 'manage-request', component: ManageRequestComponent},
];
