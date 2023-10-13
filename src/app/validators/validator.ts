import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms'
import { UsersService } from '../services/users/users.service';
import { Observable, map } from 'rxjs';

export function validateUsername(usersService:UsersService):AsyncValidatorFn{
  return (control:AbstractControl):Observable<ValidationErrors | null> => {
   return usersService.checkUsername(control.value)

    .pipe(
      map(( data: boolean ) =>{
        if(data){
          return data? {usernameExists:true}:null;
        }else if(!data){
          return data? {usernameExists:false}:null;
        }else{
          return null;
        }
      }
      )
    )
  }
}


