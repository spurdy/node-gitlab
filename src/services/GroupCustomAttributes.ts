import { ResourceCustomAttributes } from '../templates';
import { BaseServiceOptions } from '../infrastructure';

class GroupCustomAttributes extends ResourceCustomAttributes {
  constructor(options: BaseServiceOptions) {
    super('groups', options);
  }
}

export default GroupCustomAttributes;
