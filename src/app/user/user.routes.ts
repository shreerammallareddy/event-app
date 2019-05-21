import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";

//The path here is going to be /users/profile
export const  userRoutes = [
    {path:'profile', component:ProfileComponent},
    {path:'login', component:LoginComponent}
];