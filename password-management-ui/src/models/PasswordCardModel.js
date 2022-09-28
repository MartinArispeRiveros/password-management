import { Model } from 'vue-mc';
import { integer, min, equal, required, string } from 'vue-mc/validation';

export default class PasswordCard extends Model {
  lettersAndNumbers = /^(?!\s+$).+$/;
  lettersAndNumbersMessages = 'Incorrect format';
  requiredValidationMessage = 'This field is required';

  // Default attributes that define the "empty" state.
  defaults() {
    return {
      id: null,
      url: '',
      name: '',
      userName: '',
      password: '',
    };
  }
  // Attribute mutations.
  mutations() {
    return {
      id: (id) => Number(id) || null,
      name: String,
      url: String,
      userName: String,
      password: String,
    };
  }
  // Attribute validation
  validation() {
    return {
      id: integer.and(min(1)).or(equal(null)),
      name: string.and(required.format(this.requiredValidationMessage)),
      url: string.and(required.format(this.requiredValidationMessage)),
      userName: string.and(required.format(this.requiredValidationMessage)),
      password: string.and(required.format(this.requiredValidationMessage)),
        
    };
  }
  options() {
    return {
      identifier: 'id',
      validateOnChange: true,
      validateOnSave: true,
      validateRecursively: true,
    };
  }
  routes() {
    return {
      save:  'password-cards',
      patch: 'password-cards',
    };
  }
}
