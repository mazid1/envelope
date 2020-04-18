import { FormControl, FormGroup } from '@angular/forms';

import { BaseModel } from './base.model';
import { FormInterface } from './form.interface';

export class Category extends BaseModel implements FormInterface {
  value: string;
  displayText: string;

  constructor(data?: any) {
    super(data);

    if (!data) {
      return;
    }

    this.value = data.value;
    this.displayText = data.displayText;
  }

  buildFormGroup(model?: any): FormGroup {
    const tempCategory = model ? model : this;

    const categoryForm = new FormGroup({
      value: new FormControl(tempCategory.value),
      displayText: new FormControl(tempCategory.displayText)
    });

    return categoryForm;
  }

  trimFormGroup(formGroup: FormGroup): FormGroup {
    return formGroup;
  }
}
