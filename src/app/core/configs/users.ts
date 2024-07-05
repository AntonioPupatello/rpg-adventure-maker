import { ValidatorFn, Validators } from '@angular/forms';
import { FormConfig } from '../../shared/form/form.component';
import { TableConfig } from '../../shared/table/table.model';
import { matchPasswordValidator } from '../validators/matchPasswordValidator';


export const userFormConfig: FormConfig[] = [
  {
    name: 'firstName',
    label: 'Nome',
    type: 'text',
    validators: [Validators.required],
  },
  {
    name: 'lastName',
    label: 'congnome',
    type: 'text',
    validators: [Validators.required],
  },
  {
    name: 'city',
    label: 'La tua città',
    type: 'text',
    validators: [Validators.required],
  },
  {
    name: 'email',
    label: 'Indirizzo Email',
    type: 'text',
    validators: [Validators.required, Validators.email],
  },
  {
    name: 'phone',
    label: 'Numero di telefono',
    type: 'text',
    validators: [Validators.required, Validators.pattern(/^\+\d{2}\s\d{10}$/)],
    errorMessage: 'deve essere un numero di telefono valido',
  },
  {
    name: 'notes',
    label: 'note',
    type: 'textarea',
    validators: [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(100),
    ],
  },
  {
    name: 'type',
    label: 'Tipo utente',
    type: 'select',
    options: [
      { value: 'master', label: 'Master' },
      { value: 'player', label: 'Player' },
    ],
    validators: [
      Validators.required,
    ],
  }
];

export const signupPlayerConfig: FormConfig[] = [
  ...userFormConfig,
  {
    name: 'partyId',
    label: 'Codice Party ID',
    type: 'text',
    validators: [Validators.required],
  },
]

export const userSignupFormConfig: FormConfig[] = [
  ...userFormConfig,
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
  }
];


export const userLoginFormConfig: FormConfig[] = [ 
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
    }
]



export const userTableConfig: TableConfig[] = [
  {
    name: 'firstName',
    type: 'text',
    label: 'Nome',
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Cognome',
  },
  {
    name: 'city',
    type: 'text',
    label: 'Città',
  },
  {
    name: 'email',
    type: 'text',
    label: 'Email',
  },
  {
    name: 'detail',
    type: 'action',
    label: 'Go to detail',
  },
];

