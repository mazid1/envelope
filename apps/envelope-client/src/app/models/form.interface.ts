import { FormGroup } from '@angular/forms';

export interface FormInterface {
  buildFormGroup(model?: any): FormGroup;
  trimFormGroup(formGroup: FormGroup): FormGroup;
}
