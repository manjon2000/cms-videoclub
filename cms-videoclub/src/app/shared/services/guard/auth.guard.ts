import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   let auth = inject(AuthService);
//   let router = inject(Router);

//   return auth.isAuth().pipe(
//     // Es para disparar un efecto secundario. 
//     tap( state => ( !state ?  router.navigate(['/']) : null ))
//   );
// };
