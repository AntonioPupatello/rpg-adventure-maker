import { ValidatorFn, Validators } from "@angular/forms";
import { matchPasswordValidator } from "../validators/matchPasswordValidator";
import { FormConfig } from "../../shared/form/form.component";

export const globalSignupFormConfig: ValidatorFn[] = [
    matchPasswordValidator('password', 'confirmPassword'),
  ];

  export const signUpFormConfig: FormConfig[] = [
    {
      name: 'email',
      label: 'Indirizzo Email',
      type: 'text',
      validators: [Validators.required, Validators.email],
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      validators: [Validators.required],
    },
    {
      name: 'confirmPassword',
      label: 'Conferma Password',
      type: 'password',
      validators: [Validators.required],
    },
    {
      name: 'type',
      label: 'Tipo utente',
      type: 'select',
      options: [
        { value: 'master', label: 'Master' },
        { value: 'player', label: 'Giocatore' },
      ],
      validators: [
        Validators.required,
      ],
    }
  ];
  
  export const signupFormPlayerConfig: FormConfig[] = [
    ...signUpFormConfig,
    {
      name: 'partyId',
      label: 'Codice Party ID',
      type: 'text',
      validators: [Validators.required],
    },
  ]